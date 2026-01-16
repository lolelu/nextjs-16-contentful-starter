import { EntriesQueries } from "contentful";
import { getContentfulClient } from "./client";
import {
  CONTENT_TYPE_IDS,
  GenericPageType,
  TypeGenericPageSkeleton,
  TypeStandardLabelsSkeleton,
} from "./types";
import { cacheTag } from "next/cache";
import { getContentfulLocale, UrlLocale } from "@/lib/i18n/config";

export type GenericPageQuery = EntriesQueries<
  TypeGenericPageSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;

type QueryOptions = {
  locale?: UrlLocale;
  preview?: boolean;
};

/**
 * Fetches generic pages from Contentful
 * @param query - Optional query parameters to filter results
 * @param options - Locale and preview options
 * @returns Array of generic page entries
 */
export const getGenericPages = async (
  query?: GenericPageQuery,
  options?: QueryOptions
) => {
  "use cache";
  const client = getContentfulClient(options?.preview);
  const contentfulLocale = options?.locale
    ? getContentfulLocale(options.locale)
    : undefined;

  const entriesResult =
    await client.withoutUnresolvableLinks.getEntries<TypeGenericPageSkeleton>({
      content_type: CONTENT_TYPE_IDS.GENERIC_PAGE,
      locale: contentfulLocale,
      ...query,
    });

  const entries = entriesResult.items.map((entry) => ({
    ...entry.fields,
    id: entry.sys.id,
  }));

  cacheTag(...entries.map((entry) => entry.id));
  return entries;
};

/**
 * Fetches a single generic page by page type
 * @param pageType - The type of page to fetch (e.g., "HomePage", "Landing")
 * @param options - Locale and preview options
 * @param query - Optional additional query parameters
 * @returns The first matching generic page entry or null
 */
export const getGenericPageByType = async (
  pageType: GenericPageType,
  options?: QueryOptions,
  query?: GenericPageQuery
) => {
  "use cache";
  const client = getContentfulClient(options?.preview);
  const contentfulLocale = options?.locale
    ? getContentfulLocale(options.locale)
    : undefined;

  const entriesResult =
    await client.withoutUnresolvableLinks.getEntries<TypeGenericPageSkeleton>({
      content_type: CONTENT_TYPE_IDS.GENERIC_PAGE,
      "fields.type": pageType,
      locale: contentfulLocale,
      limit: 1,
      ...query,
    });

  if (entriesResult.items.length > 0) {
    const entry = entriesResult.items[0];
    const result = {
      ...entry.fields,
      id: entry.sys.id,
    };
    cacheTag(result.id);
    return result;
  }

  return null;
};

/**
 * Fetches the homepage (GenericPage with type "HomePage")
 * @param options - Locale and preview options
 * @param query - Optional additional query parameters
 * @returns The homepage entry or null if not found
 */
export const getHomepage = async (
  options?: QueryOptions,
  query?: GenericPageQuery
) => {
  "use cache";
  return getGenericPageByType("HomePage", options, query);
};

// Type for label items in the labels array
type LabelItem = {
  id?: string;
  key: string;
  value?: string;
};

// Base fallback locale for labels
const BASE_LABELS_LOCALE = "en";

/**
 * Transforms labels array to key-value object
 */
const transformLabelsArray = (
  labelsArray: LabelItem[]
): Record<string, string> => {
  return labelsArray.reduce<Record<string, string>>((acc, item) => {
    if (item.key) {
      acc[item.key] = item.value ?? "";
    }
    return acc;
  }, {});
};

/**
 * Fetches standard labels for a specific Contentful locale (internal helper)
 */
const fetchLabelsForLocale = async (
  client: ReturnType<typeof getContentfulClient>,
  locale: string,
  pageType?: "Main Website" | "Shared Homepage"
): Promise<{ labels: Record<string, string>; entryId?: string }> => {
  const entriesResult =
    await client.withoutUnresolvableLinks.getEntries<TypeStandardLabelsSkeleton>(
      {
        content_type: CONTENT_TYPE_IDS.STANDARD_LABELS,
        locale,
        ...(pageType && { "fields.pageType": pageType }),
        limit: 1,
      }
    );

  if (entriesResult.items.length > 0) {
    const entry = entriesResult.items[0];
    const labelsArray = entry.fields.labels as LabelItem[] | undefined;

    if (Array.isArray(labelsArray)) {
      return {
        labels: transformLabelsArray(labelsArray),
        entryId: entry.sys.id,
      };
    }

    if (
      typeof entry.fields.labels === "object" &&
      entry.fields.labels !== null
    ) {
      return {
        labels: entry.fields.labels as Record<string, string>,
        entryId: entry.sys.id,
      };
    }
  }

  return { labels: {} };
};

/**
 * Fetches standard labels (translations) from Contentful
 * Merges base "en" labels with locale-specific labels
 * Empty locale-specific values fall back to "en" values
 *
 * @param options - Locale and preview options
 * @param pageType - Optional page type filter ("Main Website" or "Shared Homepage")
 * @returns The labels as a key-value object
 */
export const getStandardLabels = async (
  options?: QueryOptions,
  pageType?: "Main Website" | "Shared Homepage"
): Promise<Record<string, string>> => {
  "use cache";
  const client = getContentfulClient(options?.preview);
  const contentfulLocale = options?.locale
    ? getContentfulLocale(options.locale)
    : BASE_LABELS_LOCALE;

  // If requesting base locale, just return it directly
  if (contentfulLocale === BASE_LABELS_LOCALE) {
    const { labels, entryId } = await fetchLabelsForLocale(
      client,
      BASE_LABELS_LOCALE,
      pageType
    );
    if (entryId) cacheTag(entryId);
    return labels;
  }

  // Fetch both base "en" labels and locale-specific labels in parallel
  const [baseResult, localeResult] = await Promise.all([
    fetchLabelsForLocale(client, BASE_LABELS_LOCALE, pageType),
    fetchLabelsForLocale(client, contentfulLocale, pageType),
  ]);

  // Cache tags for both entries
  if (baseResult.entryId) cacheTag(baseResult.entryId);
  if (localeResult.entryId) cacheTag(localeResult.entryId);

  const baseLabels = baseResult.labels;
  const localeLabels = localeResult.labels;

  // Merge: start with base, override with locale-specific (but keep base if locale value is empty)
  const mergedLabels: Record<string, string> = { ...baseLabels };

  for (const [key, value] of Object.entries(localeLabels)) {
    // Only override if locale-specific value is not empty
    if (value && value.trim() !== "") {
      mergedLabels[key] = value;
    }
    // If value is empty, keep the base "en" value (already in mergedLabels)
  }

  return mergedLabels;
};

/**
 * Fetches translations for next-intl
 * Returns a messages object compatible with next-intl
 * @param locale - URL locale
 * @returns Messages object for next-intl
 */
export const getTranslations = async (
  locale: UrlLocale
): Promise<Record<string, string>> => {
  "use cache";
  const labels = await getStandardLabels({ locale });
  return labels;
};
