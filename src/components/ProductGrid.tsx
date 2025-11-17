"use client";

import { motion } from "framer-motion";
import { products } from "./Products";

export function ProductGrid() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Soft ambient pink-beige wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff8f6] via-[#fefafa] to-[#f7efed]" />

      {/* Slowly drifting abstract shape (luxury aesthetic) */}
      <motion.svg
        className="absolute -top-32 -left-40 w-[480px] opacity-[0.18] text-[#f0d7d2]"
        viewBox="0 0 200 200"
        animate={{ y: ["0%", "4%", "0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="currentColor"
          d="M37.8,-59C49.4,-52.2,57.6,-41.4,63.9,-29.8C70.2,-18.2,74.6,-5.9,72.2,5.6C69.8,17.1,60.6,27.9,51.1,38.2C41.7,48.5,31.9,58.4,19.5,63.7C7.1,69.1,-7.8,70,-21.6,65.9C-35.4,61.7,-48,52.5,-57.3,41.2C-66.7,29.9,-73,16.5,-74.2,2.4C-75.4,-11.6,-71.4,-26.3,-62.8,-36.9C-54.2,-47.6,-41,-54.1,-28.2,-59.7C-15.3,-65.3,-7.6,-70.1,3.1,-75.1C13.7,-80.1,27.3,-85.7,37.8,-59Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      <div className="container-page relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium tracking-tight text-[#3f2f2d] mb-4"
        >
          For your everyday beauty ritual
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#5c4a47] max-w-2xl font-normal leading-relaxed"
        >
          Essentials crafted to nourish, restore, and elevate your natural glow.
          Beauty that feels comforting, intentional, and effortless.
        </motion.p>

        {/* Product Grid (show first 6) */}
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 relative">
          {products.slice(0, 6).map((p) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: [0, -0.6, 0.6, 0],
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.75,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className="
        group relative bg-[#fcf9f8] rounded-3xl 
        border border-[#eadfdb]
        shadow-[0_4px_18px_rgba(0,0,0,0.05)]
        overflow-hidden transition-all
      "
            >
              {/* Ambient card glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10 pointer-events-none"
              />

              {/* Floating blob */}
              <motion.svg
                className="absolute -top-12 -right-10 w-[180px] opacity-20 text-[#f3e6e2]"
                viewBox="0 0 200 200"
                animate={{ rotate: ["0deg", "6deg", "0deg"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  fill="currentColor"
                  d="M39.8,-60.3C52.3,-53.7,62,-43.5,68.5,-31.5C74.9,-19.6,78.1,-5.9,74.4,5.4C70.7,16.7,60,25.4,50.3,35C40.5,44.6,31.7,55,20.2,59C8.6,63,-5.6,60.6,-18.4,55.6C-31.1,50.7,-42.3,43.2,-51.5,33.2C-60.7,23.3,-67.9,11.7,-70.2,-1.3C-72.5,-14.2,-69.8,-28.3,-61.4,-38.4C-53,-48.6,-38.8,-54.7,-25.1,-60.9C-11.4,-67.1,1.8,-73.5,14.8,-73.7C27.9,-74,39.8,-60.3,39.8,-60.3Z"
                  transform="translate(100 100)"
                />
              </motion.svg>

              {/* Image with soft drift */}
              <motion.img
                src={p.img}
                alt={p.name}
                className="relative z-10 h-64 w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                animate={{ y: ["0%", "-3%", "0%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Text */}
              <div className="relative z-10 p-7">
                <h3 className="text-lg font-medium text-[#3f2f2d] tracking-tight">
                  {p.name}
                </h3>

                <p className="mt-3 text-sm text-[#6a5854] leading-relaxed font-normal">
                  {p.blurb}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="
            mt-6 px-6 py-2.5 rounded-full
            border border-[#cfc5c2]
            bg-white text-[#3f2f2d]
            hover:bg-[#f5f2f1] transition
            font-medium text-sm
          "
                >
                  Learn more
                </motion.button>
              </div>
            </motion.article>
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

        {/* Promotional banner removed — use CatalogPromo component instead */}
      </div>
    </section>
  );
}
