import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/data/site";

/** Page footer with the copyright line and quick social links. */
export function Footer() {
  return (
    <footer className="border-line bg-footer mt-auto border-t text-slate-300">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm">
          © {siteConfig.copyrightYear} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
        <ul className="flex items-center gap-3">
          {siteConfig.social.map((link) => (
            <li key={link.platform}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="hover:bg-brand hover:text-on-brand flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors"
              >
                <SocialIcon platform={link.platform} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
