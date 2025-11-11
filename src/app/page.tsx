import { HeroBusiness } from "@/components/HeroBusiness";
import { ProductGrid } from "@/components/ProductGrid";
import { FeatureRow } from "@/components/FeatureRow";
import { CTASection } from "@/components/CTASection";

export default function Page() {
  return (
    <div className="space-y-24 md:space-y-28">
      <HeroBusiness />
      <ProductGrid />
      <FeatureRow />
      <CTASection />
    </div>
  );
}
