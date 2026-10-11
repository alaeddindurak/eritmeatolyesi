import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";
import { themeInitScript } from "@/lib/theme";

// Loads the Geist font at build time and exposes it as a CSS variable used by the theme.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

// Default metadata; individual pages override the title through the template below.
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | 3D Tasarım & Yeni Nesil Üretim`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

/** Root layout: wraps every page with the shared header and footer. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the init script below sets data-theme before React loads.
    <html lang="tr" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
