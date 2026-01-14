import { createClient } from "redis";

const redis = await createClient({
  url: process.env.REDIS_URL,
}).connect();

export async function getViews(slug: string): Promise<number> {
  const views = await redis.get(`views:${slug}`);
  return views ? parseInt(views, 10) : 0;
}

export async function incrementViews(slug: string): Promise<number> {
  const views = await redis.incr(`views:${slug}`);
  return views;
}
