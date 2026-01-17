import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { getTranslationsForNextIntl } from "@/lib/contentful/queries";
import type { UrlLocale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  // Fetch translations from Contentful (converted to nested structure)
  const messages = await getTranslationsForNextIntl(locale as UrlLocale);

  return {
    locale,
    messages,
  };
});
