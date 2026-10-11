import type { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { works } from "@/data/works";

export const metadata: Metadata = { title: "Vitrin" };

/** Gallery page: every work as a card, with a category filter. */
export default function GalleryPage() {
  return (
    <Container className="py-16">
      <SectionTitle title="Vitrin" subtitle="3D baskı ürünlerimiz ve 3D modellerimiz. Detay için bir karta tıklayın." />
      <GalleryGrid works={works} />
    </Container>
  );
}
