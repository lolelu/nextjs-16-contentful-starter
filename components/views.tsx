import { getViews } from "@/lib/redis";

type ViewsProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function ViewsSkeleton() {
  return (
    <span className="inline-block h-4 w-16 animate-pulse rounded-sm bg-black/10" />
  );
}

export async function Views({ params }: ViewsProps) {
  const resolvedParams = await params;
  const views = await getViews(resolvedParams.slug);

  return (
    <span className="tabular-nums text-black/50">
      {views.toLocaleString()} views
    </span>
  );
}
