import { cacheTag } from "next/cache";
import { getContentfulClient } from "./client";
import { ArticleQuery, ArticleSkeleton, CONTENT_TYPE_IDS } from "./types";
import { extractArticleFields } from "./utils";

export const getArticles = async (isDraft?: boolean, query?: ArticleQuery) => {
  "use cache";
  const client = getContentfulClient(isDraft);
  const entriesResult =
    await client.withoutUnresolvableLinks.getEntries<ArticleSkeleton>({
      content_type: CONTENT_TYPE_IDS.KNOWLEDGE_ARTICLE,
      ...query,
    });
  cacheTag(...entriesResult.items.map((item) => item.sys.id));
  const entries = extractArticleFields(entriesResult);
  return entries;
};
