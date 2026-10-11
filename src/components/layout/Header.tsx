"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

/** Removes a trailing slash so "/gallery/" (static export) matches "/gallery". */
function normalizePath(path: string): string {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

/** True when the current page is the link's page or one of its sub-pages (e.g. a work detail). */
function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Sticky top bar: brand logo on the left; navigation, theme switch and (on small screens)
 * the hamburger button on the right.
 */
export function Header() {
  const pathname = normalizePath(usePathname());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const linkClasses = (href: string) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
      isActive(pathname, href) ? "bg-brand-soft text-brand-ink" : "text-muted hover:text-brand",
    );

  return (
    <header className="border-line bg-surface/90 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label={`${siteConfig.name} ana sayfa`} onClick={closeMenu}>
          <BrandLogo />
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop navigation */}
          <nav aria-label="Ana menü" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          {/* Hamburger button, visible only on small screens */}
          <button
            type="button"
            className="text-title rounded-lg p-2 md:hidden"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {isMenuOpen ? (
        <nav id="mobile-menu" aria-label="Mobil menü" className="border-line bg-surface border-t md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
