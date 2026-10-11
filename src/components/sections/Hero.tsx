import { BrandLogo } from "@/components/layout/BrandLogo";
import { WorkViewer } from "@/components/sections/WorkViewer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { works } from "@/data/works";

/** Home page intro: brand line, buttons and (when a model exists) a spinning 3D piece. */
export function Hero() {
  const instagram = siteConfig.social.find((link) => link.platform === "instagram");
  // The first featured work that has a 3D model is shown on the right.
  const heroWork = works.find((work) => work.featured && work.model);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Decorative soft glows behind the content (hidden from assistive technology). */}
      <div
        aria-hidden="true"
        className="bg-brand/20 pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-brand/10 pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl"
      />

      <Container className="relative grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-6">
            <BrandLogo className="h-24 w-24" showName={false} />
          </div>
          <p className="text-brand text-sm font-semibold tracking-widest uppercase">{siteConfig.subtitle}</p>
          <h1 className="text-title mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-muted mt-4 max-w-xl text-lg">İşlevsel parçalar, özel üretimler ve 3D modeller.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/gallery">Vitrini Gez</Button>
            {instagram ? (
              <Button href={instagram.url} variant="outline" target="_blank" rel="noopener noreferrer">
                Instagram&apos;da Takip Et
              </Button>
            ) : null}
          </div>
        </div>

        {heroWork?.model ? (
          <div>
            <WorkViewer src={heroWork.model} alt={`${heroWork.title} için etkileşimli 3D model`} />
            <p className="text-muted mt-3 text-center text-xs">
              Döndürmek için sürükleyin, yakınlaştırmak için kaydırın.
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
