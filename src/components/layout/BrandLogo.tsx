import Image from "next/image";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/base-path";

interface BrandLogoProps {
  /** Size classes of the round logo, e.g. "h-10 w-10". */
  className?: string;
  /** Show the brand name next to the logo. Turn it off when the logo is large enough to be read. */
  showName?: boolean;
}

/**
 * The brand mark. Shows the logo file set in `siteConfig.logo`; when no file is set it shows
 * a simple text logo ("S3D" badge + brand name) so the site never looks unfinished.
 */
export function BrandLogo({ className = "h-10 w-10", showName = true }: BrandLogoProps) {
  const name = <span className="text-title text-sm font-bold tracking-widest uppercase">{siteConfig.name}</span>;

  if (siteConfig.logo) {
    return (
      <span className="flex items-center gap-3">
        <Image
          src={withBasePath(siteConfig.logo)}
          alt={showName ? "" : `${siteConfig.name} logosu`}
          width={160}
          height={160}
          className={`${className} shrink-0 rounded-full object-cover`}
        />
        {showName ? name : null}
      </span>
    );
  }

  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`border-brand text-brand flex shrink-0 items-center justify-center rounded-full border-2 text-xs font-extrabold tracking-tight shadow-[0_0_12px_var(--color-brand)] ${className}`}
      >
        S3D
      </span>
      {name}
    </span>
  );
}
