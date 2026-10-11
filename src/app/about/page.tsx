import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Hakkında" };

/** About page: the story of the workshop. */
export default function AboutPage() {
  return (
    <Container className="py-16">
      <SectionTitle title="Hakkında" subtitle={siteConfig.subtitle} />
      <Card className="p-8 sm:p-10">
        <div className="text-muted space-y-4 leading-relaxed">
          {siteConfig.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Card>
    </Container>
  );
}
