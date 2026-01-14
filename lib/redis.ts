import { createClient } from "redis";

export const redis = await createClient({
  url: process.env.REDIS_URL,
}).connect();

export async function getViews(slug: string): Promise<number> {
  const views = await redis.get(`views:${slug}`);
  return views ? parseInt(views, 10) : 0;
}
