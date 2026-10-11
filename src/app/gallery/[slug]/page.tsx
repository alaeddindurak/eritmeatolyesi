import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkCredit } from "@/components/sections/WorkCredit";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { WorkViewer } from "@/components/sections/WorkViewer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { categoryLabels, getWork, works } from "@/data/works";
import { withBasePath } from "@/lib/base-path";

// With a static export every page must be known at build time; unknown slugs return 404.
export const dynamicParams = false;

/** Tells Next.js which detail pages to generate: one per work. */
export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata(props: PageProps<"/gallery/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const work = getWork(slug);
  return work ? { title: work.title, description: work.summary } : {};
}

/** Detail page of one work: 3D viewer (or cover photo), description, specs and extra photos. */
export default async function WorkPage(props: PageProps<"/gallery/[slug]">) {
  const { slug } = await props.params;
  const work = getWork(slug);
  if (!work) notFound();

  const instagram = siteConfig.social.find((link) => link.platform === "instagram");
  const specs = [
    { label: "Malzeme", value: work.material },
    { label: "Boyut", value: work.size },
  ].filter((spec) => spec.value);
  // The cover photo is already shown on the left when there is no 3D model; list the rest below.
  const extraPhotos = work.model ? work.photos : work.photos.slice(1);

  return (
    <Container className="py-12">
      <Link href="/gallery" className="text-muted hover:text-brand inline-flex items-center gap-2 text-sm">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Vitrine dön
      </Link>

      <div className="mt-6 grid items-start gap-10 md:grid-cols-2">
        {work.model ? (
          <WorkViewer src={work.model} alt={`${work.title} için etkileşimli 3D model`} />
        ) : (
          <div className="overflow-hidden rounded-3xl">
            <WorkPreview work={work} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        )}

        <div>
          <Badge tone="brand">{categoryLabels[work.category]}</Badge>
          <h1 className="text-title mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{work.title}</h1>
          <p className="text-muted mt-4 leading-relaxed">{work.description}</p>

          {specs.length > 0 ? (
            <dl className="border-line mt-6 grid grid-cols-2 gap-4 border-t pt-6">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-muted text-sm">{spec.label}</dt>
                  <dd className="text-title font-semibold">{spec.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {instagram ? (
            <Button href={instagram.url} target="_blank" rel="noopener noreferrer" className="mt-8">
              Instagram&apos;dan Bize Ulaşın
            </Button>
          ) : null}

          {work.credit ? <WorkCredit credit={work.credit} isImageFromSource={work.imageKind === "render"} /> : null}
        </div>
      </div>

      {extraPhotos.length > 0 ? (
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extraPhotos.map((photo) => (
            <li key={photo} className="border-line relative aspect-square overflow-hidden rounded-2xl border">
              <Image
                src={withBasePath(photo)}
                alt={`${work.title} fotoğrafı`}
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
}
