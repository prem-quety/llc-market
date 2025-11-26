import Image from "next/image";
import { products } from "./Products";

export function ProductGrid() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Soft ambient pink-beige wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff8f6] via-[#fefafa] to-[#f7efed]" />

      <div className="container-page relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#3f2f2d] mb-4">
          For your everyday beauty ritual
        </h2>

        <p className="text-[#5c4a47] max-w-2xl font-normal leading-relaxed">
          Essentials crafted to nourish, restore, and elevate your natural glow.
          Beauty that feels comforting, intentional, and effortless.
        </p>

        {/* Product Grid (show first 6) - server-rendered, minimal client JS */}
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 relative">
          {products.slice(0, 6).map((p) => (
            <article
              key={p.name}
              className="group relative bg-[#fcf9f8] rounded-3xl border border-[#eadfdb] shadow-[0_4px_18px_rgba(0,0,0,0.05)] overflow-hidden transition-all"
            >
              {/* Subtle static ambient card overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10 pointer-events-none" />

              {/* Decorative blob (static - reduced motion cost) */}
              <svg
                className="absolute -top-12 -right-10 w-[180px] opacity-20 text-[#f3e6e2] pointer-events-none"
                viewBox="0 0 200 200"
              >
                <path
                  fill="currentColor"
                  d="M39.8,-60.3C52.3,-53.7,62,-43.5,68.5,-31.5C74.9,-19.6,78.1,-5.9,74.4,5.4C70.7,16.7,60,25.4,50.3,35C40.5,44.6,31.7,55,20.2,59C8.6,63,-5.6,60.6,-18.4,55.6C-31.1,50.7,-42.3,43.2,-51.5,33.2C-60.7,23.3,-67.9,11.7,-70.2,-1.3C-72.5,-14.2,-69.8,-28.3,-61.4,-38.4C-53,-48.6,-38.8,-54.7,-25.1,-60.9C-11.4,-67.1,1.8,-73.5,14.8,-73.7C27.9,-74,39.8,-60.3,39.8,-60.3Z"
                  transform="translate(100 100)"
                />
              </svg>

              {/* Image - lazy loaded; use next/image for local assets */}
              <div className="relative z-10 h-64 w-full overflow-hidden">
                {p.img.startsWith("http") ? (
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={400}
                    height={400}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={false}
                  />
                ) : (
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={1200}
                    height={800}
                    className="h-64 w-full object-cover block transition duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={false}
                  />
                )}
              </div>

              {/* Text */}
              <div className="relative z-10 p-7">
                <h3 className="text-lg font-medium text-[#3f2f2d] tracking-tight">
                  {p.name}
                </h3>

                <p className="mt-3 text-sm text-[#6a5854] leading-relaxed font-normal">
                  {p.blurb}
                </p>

                <a
                  href={p.link}
                  className="mt-6 inline-block px-6 py-2.5 rounded-full border border-[#cfc5c2] bg-white text-[#3f2f2d] hover:bg-[#f5f2f1] transition font-medium text-sm"
                >
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to full catalogue */}
        <div className="mt-10 flex justify-center">
          <a
            href="/shop"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#7a4b47] text-[#f9ece9] font-medium shadow-lg hover:bg-[#673d3a] transition"
            aria-label="View full collection"
          >
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}
