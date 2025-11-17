"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function NavBar() {
  const pathname = usePathname();
  const mainNav = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-[#e6dcd7]">
      <div className="container-page h-16 flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-xl md:text-2xl font-light tracking-tight text-[#2f2423] hover:text-[#7a4b47] transition"
          >
            LLC <span className="text-[#7a4b47]">Market</span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 md:gap-2">
          {mainNav.map((item, index) => {
            const active = pathname === item.href;

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`
                    px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-light transition-all duration-300
                    ${
                      active
                        ? "bg-[#7a4b47] text-white shadow-md shadow-[#7a4b47]/20"
                        : "text-[#5c4a47] hover:bg-[#f9ece9] hover:text-[#7a4b47]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Right Section: Contact & Cart */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <Link
              href="/contact"
              className="px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-light bg-[#7a4b47] text-white hover:bg-[#6a3f3b] shadow-md shadow-[#7a4b47]/20 hover:shadow-lg transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>

          {/* Cart Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.18 }}
          >
            <Link
              href="/cart"
              aria-label="Cart"
              title="Shopping Cart"
              className="inline-flex items-center justify-center p-2 md:p-2.5 rounded-full text-[#7a4b47] hover:bg-[#f9ece9] transition-all duration-300 group relative overflow-visible"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 transform-gpu origin-center transition-transform"
                style={{ willChange: "transform" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M3 11h18l-1 9a2 2 0 01-2 2H6a2 2 0 01-2-2l-1-9z"
                />
              </svg>
              <span className="sr-only">Cart</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
