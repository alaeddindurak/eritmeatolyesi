import { ArrowUpRight, Mail, Phone, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/data/site";

/** One clickable contact card. */
interface ContactItem {
  key: string;
  label: string;
  value: string;
  href: string;
  /** Opens in a new tab when true (external sites). */
  external: boolean;
  icon: ReactNode;
}

/** Builds the list of contact cards from the site config; only the details that are set are shown. */
function getContactItems(): ContactItem[] {
  const { contact, social } = siteConfig;
  const items: ContactItem[] = social.map((link) => ({
    key: link.platform,
    label: link.label,
    value: link.handle,
    href: link.url,
    external: true,
    icon: <SocialIcon platform={link.platform} className="h-6 w-6" />,
  }));

  const iconFor = (Icon: LucideIcon) => <Icon className="h-6 w-6" aria-hidden="true" />;

  if (contact.email) {
    items.push({
      key: "email",
      label: "E-posta",
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: iconFor(Mail),
    });
  }
  if (contact.phone && contact.phoneHref) {
    items.push({
      key: "phone",
      label: "Telefon",
      value: contact.phone,
      href: `tel:${contact.phoneHref}`,
      external: false,
      icon: iconFor(Phone),
    });
  }
  return items;
}

/** Contact cards: Instagram always, e-mail and phone when they are set in `siteConfig.contact`. */
export function ContactCards() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {getContactItems().map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            className="group block h-full"
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Card className="flex h-full items-center gap-4 transition-shadow group-hover:shadow-md">
              <span className="bg-brand-soft text-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                {item.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="text-muted block text-sm">{item.label}</span>
                <span className="text-title block font-semibold break-words">{item.value}</span>
              </span>
              {item.external ? (
                <ArrowUpRight
                  className="text-muted group-hover:text-brand h-5 w-5 transition-colors"
                  aria-hidden="true"
                />
              ) : null}
            </Card>
          </a>
        </li>
      ))}
    </ul>
  );
}
