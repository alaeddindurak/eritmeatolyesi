"use client";

import { useState } from "react";
import { WorkCard } from "@/components/sections/WorkCard";
import { categoryLabels } from "@/data/works";
import { cn } from "@/lib/cn";
import type { Work, WorkCategory } from "@/types";

type Filter = "all" | WorkCategory;

interface GalleryGridProps {
  works: Work[];
}

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "print", label: categoryLabels.print },
  { value: "model", label: categoryLabels.model },
];

/** Gallery page body: category filter buttons and a responsive grid of work cards. */
export function GalleryGrid({ works }: GalleryGridProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleWorks = filter === "all" ? works : works.filter((work) => work.category === filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Kategori filtresi">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === item.value
                ? "border-brand bg-brand text-on-brand"
                : "border-line bg-card text-muted hover:border-brand hover:text-brand",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {visibleWorks.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleWorks.map((work) => (
            <li key={work.slug}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">Bu kategoride henüz bir iş yok.</p>
      )}
    </>
  );
}
