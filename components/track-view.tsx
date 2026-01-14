"use client";

import { useEffect } from "react";
import { incrementViews } from "@/app/actions";

export function TrackView({ slug }: { slug: string }) {
  useEffect(() => {
    incrementViews(slug);
  }, [slug]);

  return null;
}
