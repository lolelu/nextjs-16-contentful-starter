import { getRelativeTime } from "../utils";
import { getContentfulClient } from "./client";
import { ArticleQuery, ArticleSkeleton, CONTENT_TYPE_IDS } from "./types";
import { extractArticleFields } from "./utils";

export const getArticles = async (isDraft?: boolean, query?: ArticleQuery) => {
  const client = getContentfulClient(isDraft);
  const entriesResult =
    await client.withoutUnresolvableLinks.getEntries<ArticleSkeleton>({
      content_type: CONTENT_TYPE_IDS.KNOWLEDGE_ARTICLE,
      ...query,
    });
  const entries = extractArticleFields(entriesResult);

  return entries;
};

export async function getLastUpdated(props: {
  params: Promise<{ slug: string }>;
}): Promise<string | undefined> {
  const slug = await props.params;

  const article = await getArticles(undefined, {
    "fields.slug": slug.slug,
    limit: 1,
  });
  if (!article || article.length === 0) {
    return undefined;
  }
  const { updatedAt } = article[0];
  return getRelativeTime(updatedAt);
}
