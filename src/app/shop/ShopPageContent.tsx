"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { useMemo, useCallback } from "react";
import { products as productsData } from "@/components/Products";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import Link from "next/link";
import Image from "next/image";

const PAGE_SIZE = 6;

function fetchProducts(page: number, sort: string, category: string) {
  let list = [...productsData];

  if (category !== "all") {
    list = list.filter((p) => p.category === category);
  }

  if (sort === "price-low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    list.sort((a, b) => b.price - a.price);
  }

  const total = list.length;
  const start = (page - 1) * PAGE_SIZE;
  const products = list.slice(start, start + PAGE_SIZE);

  return { products, total };
}

export function ShopPageContent() {
  const params = useSearchParams();
  const router = useRouter();

  const page = Number(params.get("page")) || 1;
  const sort = params.get("sort") || "default";
  const category = params.get("category") || "all";

  const [data, setData] = React.useState<{
    products: typeof productsData;
    total: number;
  } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Memoize data to prevent unnecessary recalculations
  const memoizedData = useMemo(() => {
    return fetchProducts(page, sort, category);
  }, [page, sort, category]);

  React.useEffect(() => {
    setIsLoading(true);
    // Simulate minimal delay for smooth UX
    const timer = setTimeout(() => {
      setData(memoizedData);
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [memoizedData]);

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 1;

  const changePage = useCallback(
    (p: number) => {
      router.push(`/shop?page=${p}&sort=${sort}&category=${category}`);
    },
    [sort, category, router]
  );

  const handleSortChange = useCallback(
    (newSort: string) => {
      router.push(`/shop?page=1&sort=${newSort}&category=${category}`);
    },
    [category, router, sort] // include sort
  );

  return (
    <section className="relative bg-gradient-to-b from-[#faf8f6] via-[#f8f4f1] to-[#f3ebe8] overflow-hidden">
      <FloatingSidebar />

      {/* Premium vignette - enhanced */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,75,71,0.04),transparent_60%)] opacity-100" />

      {/* Luxury texture layer - enhanced */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(122, 75, 71, 0.1), transparent 50%)",
        }}
      />

      {/* Premium decorative blob elements */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#f9ece9] to-[#f5dcd5] rounded-full blur-3xl opacity-25" />
      <div className="pointer-events-none absolute bottom-0 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-[#e8d4cc] to-[#f0dcd8] rounded-full blur-3xl opacity-20" />

      {/* Hero Section - Enhanced */}
      <div
        className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center relative flex justify-center items-center text-center rounded-b-[40px] overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5e7e2]/35 via-[#f0dcd8]/50 to-[#ebe5e0]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5"
          >
            <p className="text-xs md:text-sm tracking-[0.15em] font-light text-[#7a4b47] uppercase">
              ✨ Premium Collection
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-6xl md:text-8xl font-light text-[#2f2423] leading-tight tracking-tight mb-6"
          >
            Curated Essentials
          </motion.h1>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d8c4c0]" />
            <span className="text-[#7a4b47]/40 text-lg">•</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d8c4c0]" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-[#5b4b49] leading-relaxed font-light max-w-2xl mx-auto"
          >
            Thoughtfully selected rituals designed to elevate your everyday
            moments with premium craftsmanship and timeless elegance.
          </motion.p>
        </div>
      </div>

      {/* Premium divider section */}
      <div className="w-full flex justify-center mt-32 mb-28">
        <div className="relative flex items-center gap-5 w-56">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d8c4c0] to-transparent opacity-60" />
          <span className="text-[#7a4b47]/50 font-light text-lg tracking-wider">
            ✨
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#d8c4c0] to-transparent opacity-60" />
        </div>
      </div>

      <div className="container-page relative px-4 md:px-8 max-w-7xl mx-auto">
        {/* Premium atmospheric glow */}
        <div className="absolute -inset-x-20 top-0 h-80 bg-[radial-gradient(ellipse_150%_100%_at_center_top,rgba(245,228,223,0.4),transparent)] opacity-50 pointer-events-none blur-3xl" />

        <div className="relative z-10 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-5"
          >
            <p className="text-xs tracking-[0.15em] font-light text-[#7a4b47]/80 uppercase">
              Discover
            </p>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-light text-[#2f2423] mb-8 tracking-tight text-center">
            The Collection
          </h2>

          <p className="text-center text-[#6a5854] max-w-3xl mx-auto mb-16 text-lg font-light leading-relaxed">
            Meticulously curated essentials designed to elevate your daily
            rituals with premium craftsmanship and timeless elegance.
          </p>

          {/* Sort Controls - Enhanced */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => handleSortChange("default")}
              className={`px-6 py-2.5 rounded-full text-sm font-light transition duration-300 ${
                sort === "default"
                  ? "bg-gradient-to-r from-[#7a4b47] to-[#6a3f3b] text-white shadow-lg shadow-[#7a4b47]/40"
                  : "bg-white text-[#3f2f2d] border border-[#e6d9d5] hover:border-[#d8c4c0] hover:shadow-md"
              }`}
            >
              Featured
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => handleSortChange("price-low")}
              className={`px-6 py-2.5 rounded-full text-sm font-light transition duration-300 ${
                sort === "price-low"
                  ? "bg-gradient-to-r from-[#7a4b47] to-[#6a3f3b] text-white shadow-lg shadow-[#7a4b47]/40"
                  : "bg-white text-[#3f2f2d] border border-[#e6d9d5] hover:border-[#d8c4c0] hover:shadow-md"
              }`}
            >
              Price: Low → High
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => handleSortChange("price-high")}
              className={`px-6 py-2.5 rounded-full text-sm font-light transition duration-300 ${
                sort === "price-high"
                  ? "bg-gradient-to-r from-[#7a4b47] to-[#6a3f3b] text-white shadow-lg shadow-[#7a4b47]/40"
                  : "bg-white text-[#3f2f2d] border border-[#e6d9d5] hover:border-[#d8c4c0] hover:shadow-md"
              }`}
            >
              Price: High → Low
            </motion.button>
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div
                key={i}
                className="rounded-[38px] overflow-hidden bg-white shadow-lg border border-[#e6d9d5] animate-pulse"
              >
                <div className="w-full h-80 bg-neutral-200" />
                <div className="p-9 space-y-4">
                  <div className="h-6 bg-neutral-200 rounded-full w-3/4" />
                  <div className="h-4 bg-neutral-200 rounded-full w-full" />
                  <div className="h-4 bg-neutral-200 rounded-full w-2/3" />
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-5 bg-neutral-200 rounded-full w-1/4" />
                    <div className="h-9 bg-neutral-200 rounded-full w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data?.products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative group h-full rounded-3xl overflow-hidden bg-white border border-[#e6d9d5] hover:border-[#d8c4c0] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-700 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-96 bg-gradient-to-br from-[#f9ece9] to-[#f0dcd8]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Premium badge indicator */}
                  <div className="mb-4 h-1 w-8 bg-gradient-to-r from-[#7a4b47] to-[#d8c4c0] rounded-full" />

                  {/* Title */}
                  <h3 className="text-lg text-[#2f2423] font-light leading-snug tracking-tight line-clamp-2 mb-2">
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#715f5b] leading-relaxed line-clamp-2 flex-grow mb-6 font-light">
                    {p.blurb}
                  </p>

                  {/* Premium divider */}
                  <div className="h-[1px] bg-gradient-to-r from-[#e8dcd7] via-[#e8dcd7] to-transparent mb-6" />

                  {/* Price & Button */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-[#6a5854] font-light tracking-wide mb-1 uppercase">
                        Price
                      </p>
                      <p className="text-2xl text-[#3c302e] font-light tracking-tight">
                        ${p.price}
                      </p>
                    </div>

                    <Link
                      href={`/product/${p.id}`}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7a4b47] to-[#6a3f3b] text-[#f9ece9] shadow-lg shadow-[#7a4b47]/40 hover:shadow-xl hover:shadow-[#7a4b47]/50 text-sm font-medium transition-all duration-300 whitespace-nowrap uppercase tracking-wide"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Content Features Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 py-20 px-6 bg-gradient-to-br from-[#f9ece9]/30 to-[#f0dcd8]/20 rounded-3xl border border-[#e8dcd7]/40">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-[#f9ece9]">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <h4 className="text-lg font-light text-[#2f2423] mb-3">
              Handpicked
            </h4>
            <p className="text-sm text-[#6a5854] font-light leading-relaxed">
              Every item thoughtfully curated for quality and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-[#f9ece9]">
                <span className="text-2xl">🌿</span>
              </div>
            </div>
            <h4 className="text-lg font-light text-[#2f2423] mb-3">
              Sustainable
            </h4>
            <p className="text-sm text-[#6a5854] font-light leading-relaxed">
              Ethically sourced with commitment to the environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-[#f9ece9]">
                <span className="text-2xl">💝</span>
              </div>
            </div>
            <h4 className="text-lg font-light text-[#2f2423] mb-3">
              Beautifully Packaged
            </h4>
            <p className="text-sm text-[#6a5854] font-light leading-relaxed">
              Premium presentation for an unforgettable unboxing.
            </p>
          </motion.div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-24 flex-wrap">
          {/* Previous Button */}
          <button
            onClick={() => changePage(Math.max(1, page - 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              page === 1
                ? "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed"
                : "bg-white text-[#3f2f2d] border-[#eadfdb] hover:bg-[#f0d7d2]"
            }`}
          >
            ← Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, i) => {
            const num = i + 1;
            const active = num === page;
            const isVisible =
              Math.abs(num - page) <= 1 || num === 1 || num === totalPages;

            if (!isVisible) return null;
            if (Math.abs(num - page) === 2) {
              return (
                <span key={`dots-${i}`} className="px-2 py-2 text-[#6a5854]">
                  ...
                </span>
              );
            }

            return (
              <button
                key={num}
                onClick={() => changePage(num)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                  active
                    ? "bg-[#7a4b47] text-white border-[#7a4b47] shadow-md shadow-[#7a4b47]/30"
                    : "bg-white text-[#3f2f2d] border-[#eadfdb] hover:bg-[#f0d7d2]"
                }`}
              >
                {num}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => changePage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              page === totalPages
                ? "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed"
                : "bg-white text-[#3f2f2d] border-[#eadfdb] hover:bg-[#f0d7d2]"
            }`}
          >
            Next →
          </button>
        </div>

        {/* Results Info */}
        <p className="text-center text-[#6a5854] text-sm mt-12 font-light tracking-wide">
          Showing {(page - 1) * PAGE_SIZE + 1} to{" "}
          {Math.min(page * PAGE_SIZE, data?.total || 0)} of {data?.total || 0}{" "}
          curated pieces
        </p>

        {/* Premium divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d8c4c0] to-transparent mx-auto mt-8 mb-8" />

        {/* Premium footer note */}
        <div className="text-center mt-6 mb-20">
          <p className="text-xs text-[#7a4b47]/70 font-light tracking-[0.2em] uppercase">
            Crafted with intention • Delivered with care
          </p>
        </div>
      </div>
    </section>
  );
}
