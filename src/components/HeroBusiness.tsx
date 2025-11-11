import Link from "next/link";

export function HeroBusiness() {
  return (
    <section className="relative section">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(36%_50%_at_50%_-12%,rgba(0,0,0,0.06),transparent_65%)]" />
      <div className="container-page relative">
        <p className="text-sm tracking-wide text-neutral-500">
          Built for modern teams
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-neutral-900">
          Empower your business with Apple.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-700">
          Hardware your team loves, with management that doesn’t get in the way.
          Performance, security, and longevity—without the drama.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="btn btn-primary">
            Request a quote
          </Link>
          <Link href="/about" className="btn btn-outline">
            Learn more
          </Link>
        </div>

        <div className="mt-10 md:mt-14 card overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
            alt="Clean workspace with Apple devices"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
