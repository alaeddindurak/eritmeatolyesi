import { Box } from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import type { Work } from "@/types";

interface WorkPreviewProps {
  work: Work;
  /** Image `sizes` hint so the browser downloads a suitable size. */
  sizes?: string;
}

/**
 * Square cover of a work: its first photo, or a neutral placeholder tile while no photo exists.
 * The parent decides the size; this fills it and keeps a 1:1 aspect ratio.
 */
export function WorkPreview({
  work,
  sizes = "(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw",
}: WorkPreviewProps) {
  const cover = work.photos[0];

  return (
    <div className="bg-chip relative aspect-square w-full overflow-hidden">
      {cover ? (
        <Image src={withBasePath(cover)} alt={work.title} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="text-brand flex h-full w-full items-center justify-center bg-linear-to-br from-[var(--color-brand-soft)] to-[var(--color-chip)]">
          <Box className="h-16 w-16 opacity-70" aria-hidden="true" />
          <span className="sr-only">{`${work.title} için görsel henüz eklenmedi`}</span>
        </div>
      )}
    </div>
  );
}
