import { Header } from "@/src/components/boty/header";
import { Hero } from "@/src/components/boty/hero";
import { TrustBadges } from "@/src/components/boty/trust-badges";
import { FeatureSection } from "@/src/components/boty/feature-section";
import { ProductGrid } from "@/src/components/boty/product-grid";
import { Testimonials } from "@/src/components/boty/testimonials";
import { CTABanner } from "@/src/components/boty/cta-banner";
import { Newsletter } from "@/src/components/boty/newsletter";
import { Footer } from "@/src/components/boty/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <ProductGrid />
      <FeatureSection />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </main>
  );
}
