import { Shield, Cpu, BatteryCharging } from "lucide-react";

export function FeatureRow() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-2xl border border-neutral-200 p-8 md:p-10 bg-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Shield className="h-6 w-6 text-neutral-900" />
              <h3 className="mt-3 text-xl font-semibold">Secure by design</h3>
              <p className="mt-2 text-neutral-700">
                Hardware-backed security and simple device management. Your SOC
                team sleeps again.
              </p>
            </div>
            <div>
              <Cpu className="h-6 w-6 text-neutral-900" />
              <h3 className="mt-3 text-xl font-semibold">Power that lasts</h3>
              <p className="mt-2 text-neutral-700">
                M-series efficiency keeps performance high and heat low. Laptops
                stop impersonating space heaters.
              </p>
            </div>
            <div>
              <BatteryCharging className="h-6 w-6 text-neutral-900" />
              <h3 className="mt-3 text-xl font-semibold">Lower total cost</h3>
              <p className="mt-2 text-neutral-700">
                Longer lifecycles and higher resale value. Finance nods. IT
                smiles. Users productive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
