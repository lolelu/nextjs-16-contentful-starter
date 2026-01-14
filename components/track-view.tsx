import { after } from "next/server";
import { incrementViews } from "@/lib/redis";

export async function TrackView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  after(() => {
    incrementViews(slug);
  });

  return null;
}
