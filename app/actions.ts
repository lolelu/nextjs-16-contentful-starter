"use server";

import { redis } from "@/lib/redis";

export async function incrementViews(slug: string) {
  await redis.incr(`views:${slug}`);
}
