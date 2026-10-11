import { Rotate3d } from "lucide-react";
import Link from "next/link";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { Badge } from "@/components/ui/Badge";
import { categoryLabels } from "@/data/works";
import type { Work } from "@/types";

interface WorkCardProps {
  work: Work;
}

/** A showcase card: cover image, category, title and teaser. The whole card links to the detail page. */
export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link
      href={`/gallery/${work.slug}`}
      className="group border-line bg-card block h-full overflow-hidden rounded-3xl border shadow-sm transition-shadow hover:shadow-lg"
    >
      <WorkPreview work={work} />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="brand">{categoryLabels[work.category]}</Badge>
          {work.model ? (
            <span className="text-muted flex items-center gap-1 text-xs">
              <Rotate3d className="h-4 w-4" aria-hidden="true" />
              3D görüntülenebilir
            </span>
          ) : null}
        </div>
        <h3 className="text-title group-hover:text-brand mt-3 text-lg font-semibold transition-colors">{work.title}</h3>
        <p className="text-muted mt-2 text-sm leading-relaxed">{work.summary}</p>
      </div>
    </Link>
  );
}
