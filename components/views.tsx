import { getIncreasingRandom } from "@/lib/utils";

type ViewsProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function ViewsSkeleton() {
  return (
    <span className="inline-block h-4 w-16 animate-pulse rounded-sm bg-black/10" />
  );
}

async function getViews(): Promise<number> {
  // Simulated delay (in production, fetch views by slug from DB)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return getIncreasingRandom();
}

export async function Views({ params }: ViewsProps) {
  await params; // Await params to access slug when needed
  const views = await getViews();

  return (
    <span className="tabular-nums text-black/50">
      {Math.floor(views).toLocaleString()} views
    </span>
  );
}
