import type { SocialPlatform } from "@/types";

interface SocialIconProps {
  platform: SocialPlatform;
  className?: string;
}

/**
 * Simple line icon for the social networks we link to (drawn inline because the icon
 * library does not ship brand logos). It is decorative: the surrounding link carries the label.
 */
export function SocialIcon({ platform, className = "h-5 w-5" }: SocialIconProps) {
  // Only Instagram exists today; `platform` keeps the API ready for more networks.
  void platform;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
