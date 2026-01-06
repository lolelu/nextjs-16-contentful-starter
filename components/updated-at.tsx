import { getLastUpdated } from "@/lib/contentful/queries";
import { cn } from "@/lib/utils";

export async function LastUpdated(props: {
  params: Promise<{ slug: string }>;
}) {
  const lastUpdated = await getLastUpdated(props);
  return (
    <span className="inline-flex w-[205px] items-center gap-1.5 px-2.5 py-1 text-xs text-black/60 bg-black/5 rounded-full">
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          lastUpdated ? "bg-green-500" : "bg-black/10"
        )}
      />
      <p className="whitespace-nowrap truncate">
        Last updated: {lastUpdated || "Unknown"}
      </p>
    </span>
  );
}

export function LastUpdatedSkeleton() {
  return (
    <span className="inline-flex w-[205px] items-center gap-1.5 px-2.5 py-1 text-xs text-black/60 bg-black/5 rounded-full">
      <span className="w-1.5 h-1.5 bg-black/10 rounded-full animate-pulse" />
      <p className="whitespace-nowrap">
        Last updated:{" "}
        <span className="inline-block w-[88px] h-[1em] bg-black/10 animate-pulse rounded align-middle" />
      </p>
    </span>
  );
}
