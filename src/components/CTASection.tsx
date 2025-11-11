import Link from "next/link";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-2xl border border-neutral-200 bg-[linear-gradient(180deg,#fff,rgba(0,0,0,0.04))] p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Deploy Apple at scale—without the hassle
          </h2>
          <p className="mt-3 text-neutral-700 max-w-2xl mx-auto">
            Procurement, provisioning, and support handled by adults. Your team
            just opens the box and works.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn btn-primary">
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
