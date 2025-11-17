import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/CTASection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LLC Market — Demo Corporate Storefront",
  description:
    "A premium demo storefront for LLCs. Built with Next.js + Tailwind.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "LLC Market",
    description: "A premium demo storefront for LLCs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLC Market",
    description: "A premium demo storefront for LLCs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
