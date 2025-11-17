"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative pt-40 pb-20 text-center">
      {/* CTA inside footer */}
      <section className="mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-semibold text-[#3c2f2d] leading-tight"
        >
          Let your ritual begin.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-4 max-w-xl mx-auto text-lg text-[#5d4e4a] leading-relaxed"
        >
          A moment crafted for you, intentional and softly luxurious. Step into
          a routine that feels like clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="
              px-10 py-4 rounded-full
              bg-[#7a4b47] text-[#f9ece9]
              text-lg font-medium
              shadow-md shadow-[#7a4b47]/40
              hover:bg-[#6a3f3b]
              transition
            "
          >
            Begin your ritual
          </Link>
        </motion.div>
      </section>

      {/* Divider line */}
      <div className="w-full h-px bg-[#d9c6c2]/60 mb-10" />

      {/* Footer bottom nav */}
      <div className="text-[#6b5a57] text-sm flex flex-col md:flex-row items-center justify-center gap-6">
        <Link href="/about" className="hover:text-[#3c2f2d] transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#3c2f2d] transition">
          Contact
        </Link>
        <Link href="/shop" className="hover:text-[#3c2f2d] transition">
          View our Shop
        </Link>
      </div>

      <p className="mt-6 text-[#8a7673] text-xs">
        © {new Date().getFullYear()} LLC Market. Crafted with intention.
      </p>
    </footer>
  );
}
