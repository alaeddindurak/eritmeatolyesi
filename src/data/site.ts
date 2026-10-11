import type { SiteConfig } from "@/types";

/**
 * Brand information shown across the site. This is the main file to edit when details change.
 * Visitor-facing text is Turkish on purpose; code and comments stay English.
 */
export const siteConfig: SiteConfig = {
  name: "Eritme Atölyesi",

  // Both lines come from the Instagram bio.
  tagline: "Katman katman yükselen fikirler.",
  subtitle: "3D Tasarım & Yeni Nesil Üretim",

  description: "Eritme Atölyesi: 3D tasarım ve yeni nesil üretim. İşlevsel parçalar, özel üretimler ve 3D modeller.",

  // TODO: put the original logo file into /public (e.g. "/logo.png") and set the path here.
  // While empty, a text logo is shown.
  logo: "",

  // TODO: replace with the real story of the workshop. Each item renders as one paragraph.
  about: [
    "Eritme Atölyesi, 3D tasarım ve yeni nesil üretim odaklı bir atölyedir.",
    "Katman katman yükselen fikirleri; işlevsel parçalara ve özel üretimlere dönüştürüyoruz.",
  ],

  // Optional: add `email` and/or `phone` + `phoneHref` to show them on the contact page.
  contact: {},

  social: [
    {
      platform: "instagram",
      label: "Instagram",
      handle: "@eritmeatolyesi",
      url: "https://www.instagram.com/eritmeatolyesi/",
    },
  ],

  copyrightYear: 2026,
};
