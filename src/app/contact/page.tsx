import type { Metadata } from "next";
import { ContactCards } from "@/components/sections/ContactCards";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = { title: "İletişim" };

/** Contact page: Instagram plus any e-mail / phone configured in `src/data/site.ts`. */
export default function ContactPage() {
  return (
    <Container className="py-16">
      <SectionTitle title="İletişim" subtitle="Bize aşağıdaki kanallardan ulaşabilirsiniz." />
      <ContactCards />
    </Container>
  );
}
