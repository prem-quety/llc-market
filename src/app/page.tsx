import { HeroBusiness } from "@/components/HeroBusiness";
import { ProductGrid } from "@/components/ProductGrid";
import { RitualSection } from "@/components/FeatureRow";
import { Footer } from "@/components/CTASection";
import { AuraShowcase } from "@/components/AuraShowcase";
import CatalogPromo from "@/components/CatalogPromoNew";

export default function Page() {
  return (
    <div
      className="bg-no-repeat bg-bottom"
      style={{
        backgroundImage: `url('/assets/images/beige.webp')`,
        backgroundSize: "100%",
      }}
    >
      <HeroBusiness />
      <AuraShowcase />
      <ProductGrid />
      <CatalogPromo />
      <RitualSection />
      <Footer />
    </div>
  );
}
