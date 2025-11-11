type Product = {
  name: string;
  blurb: string;
  img: string;
};

const products: Product[] = [
  {
    name: "MacBook Pro 14”",
    blurb:
      "M-series performance for devs, designers, and people who bully spreadsheets.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "iPhone 15 Pro",
    blurb:
      "Business-ready. Great battery. Your sales team stops ‘forgetting’ chargers.",
    img: "https://images.unsplash.com/photo-1603899122779-90b8f2a3f297?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Studio Display",
    blurb:
      "5K clarity that makes dashboards feel like art. Numbers have never looked so smug.",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "AirPods Pro",
    blurb:
      "Focus, minus the open-office noises and life choices of your coworkers.",
    img: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=1200&auto=format&fit=crop",
  },
];

export function ProductGrid() {
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          For teams that mean business
        </h2>
        <p className="mt-3 text-neutral-700 max-w-2xl">
          Curated Apple hardware for reliable rollouts, easy management, and
          longer lifecycles.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.name}
              className="group border border-neutral-200 rounded-2xl bg-white overflow-hidden hover:shadow-soft transition"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 to-white/0 group-hover:to-white/10 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-700">{p.blurb}</p>
                <div className="mt-4">
                  <button className="btn btn-outline">Learn more</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
