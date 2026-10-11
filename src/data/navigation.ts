import type { NavItem } from "@/types";

/** Main navigation, used by both the header and the mobile menu. */
export const navigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Vitrin", href: "/gallery" },
  { label: "Hakkında", href: "/about" },
  { label: "İletişim", href: "/contact" },
];
