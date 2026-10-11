import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WorkCard } from "@/components/sections/WorkCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { works } from "@/data/works";

/** Home page block: the works marked as `featured`, with a link to the full gallery. */
export function FeaturedWorks() {
  const featured = works.filter((work) => work.featured);

  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="featured-title" className="pb-20">
      <Container>
        <SectionHeading id="featured-title" title="Öne Çıkan İşler" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((work) => (
            <li key={work.slug}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
        <Link
          href="/gallery"
          className="text-brand hover:text-brand-hover mt-6 inline-flex items-center gap-2 text-sm font-semibold"
        >
          Tüm vitrini gör
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
