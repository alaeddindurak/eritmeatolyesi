import { FeaturedWorks } from "@/components/sections/FeaturedWorks";
import { Hero } from "@/components/sections/Hero";

/** Home page: brand introduction followed by the featured works. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWorks />
    </>
  );
}
