import Image from "next/image";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/base-path";

interface BrandLogoProps {
  /** Height class of the logo image; the text version scales with the font size instead. */
  className?: string;
}

/**
 * The brand mark. Shows the logo file set in `siteConfig.logo`; until a file is provided it shows
 * a simple text logo ("S3D" badge + brand name) so the site never looks unfinished.
 */
export function BrandLogo({ className = "h-10 w-10" }: BrandLogoProps) {
  if (siteConfig.logo) {
    return (
      <Image
        src={withBasePath(siteConfig.logo)}
        alt={`${siteConfig.name} logosu`}
        width={160}
        height={160}
        className={`${className} rounded-full object-contain`}
      />
    );
  }

  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="border-brand text-brand flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-extrabold tracking-tight shadow-[0_0_12px_var(--color-brand)]"
      >
        S3D
      </span>
      <span className="text-title text-sm font-bold tracking-widest uppercase">{siteConfig.name}</span>
    </span>
  );
}
