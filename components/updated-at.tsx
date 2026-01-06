import { getArticles } from "@/lib/contentful/queries";
import { Suspense } from "react";

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return `${seconds} seconds ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

export async function UpdatedAt(props: { params: Promise<{ slug: string }> }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-black/60 bg-black/5 rounded-full">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
      <p>Last updated: </p>
      <Suspense
        fallback={
          <div className="w-20 h-4 bg-black/5 rounded-full animate-pulse"></div>
        }
      >
        <p>{relativeTime(props)}</p>
      </Suspense>
    </span>
  );
}

export async function relativeTime(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await props.params;

  const article = await getArticles(undefined, {
    "fields.slug": slug.slug,
    limit: 1,
  });
  if (!article || article.length === 0) {
    return null;
  }
  const { updatedAt } = article[0];
  return getRelativeTime(updatedAt);
}
