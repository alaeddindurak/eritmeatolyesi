import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Shown for any URL that does not match a route. */
export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-brand text-sm font-semibold tracking-widest uppercase">404</p>
      <h1 className="text-title mt-3 text-3xl font-bold sm:text-4xl">Sayfa bulunamadı</h1>
      <p className="text-muted mt-4">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <Button href="/" className="mt-8">
        Ana Sayfaya Dön
      </Button>
    </Container>
  );
}
