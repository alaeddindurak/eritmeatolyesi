/** Shared TypeScript types used by the content files in `src/data`. */

/** One entry of the main navigation. */
export interface NavItem {
  label: string;
  href: string;
}

/** Social networks that have an icon in `SocialIcon`. */
export type SocialPlatform = "instagram";

/** A link to one of the brand's social profiles. */
export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Visible handle, e.g. "@eritmeatolyesi". */
  handle: string;
  url: string;
}

/** "print" = a physically printed product, "model" = a 3D model or render. */
export type WorkCategory = "print" | "model";

/** Who designed a work and under which license it may be used. Required for third-party designs. */
export interface WorkCredit {
  designer: string;
  /** Name of the website the design comes from, e.g. "MakerWorld". */
  sourceName: string;
  sourceUrl: string;
  /** Short license name, e.g. "CC0 (Public Domain)". */
  license: string;
  /** Optional link to the license text. */
  licenseUrl?: string;
}

/** What the cover image shows: a computer-made render or a photo of a real print. */
export type ImageKind = "render" | "photo";

/** One showcase item (a 3D print or a 3D model). */
export interface Work {
  /** URL-safe id; the detail page lives at /gallery/<slug>. */
  slug: string;
  title: string;
  category: WorkCategory;
  /** One-sentence teaser shown on cards. */
  summary: string;
  /** Longer text shown on the detail page. */
  description: string;
  /** Photo paths inside `public/`, e.g. "/photos/dragon-1.jpg". The first one is the cover. */
  photos: string[];
  /** Optional: marks the cover image as a "3D önizleme" (render) so it is not mistaken for a print photo. */
  imageKind?: ImageKind;
  /** Required when the design was made by someone else. Shown on the detail page. */
  credit?: WorkCredit;
  /** Optional 3D model (.glb) inside `public/`, e.g. "/models/dragon.glb". */
  model?: string;
  /** Optional spec lines shown on the detail page. */
  material?: string;
  size?: string;
  /** Featured works appear on the home page. */
  featured?: boolean;
}

/** Contact details; every field is optional and only shown when set. */
export interface ContactInfo {
  email?: string;
  phone?: string;
  /** International form for the `tel:` link, e.g. "+905551234567". */
  phoneHref?: string;
}

/** Global site configuration. */
export interface SiteConfig {
  name: string;
  /** Short brand line shown in the hero. */
  tagline: string;
  /** Second brand line (from the Instagram bio). */
  subtitle: string;
  /** Page <title> default and meta description. */
  description: string;
  /** Path of the logo file inside `public/`. Leave empty to show a text logo. */
  logo: string;
  /** Paragraphs shown on the About page. */
  about: string[];
  contact: ContactInfo;
  social: SocialLink[];
  copyrightYear: number;
}
