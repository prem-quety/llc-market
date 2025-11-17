export type Product = {
  id: string;
  name: string;
  blurb: string;
  img: string;
  price: number;
  link: string; // added
};

export const products: Product[] = [
  {
    id: "1",
    name: "Chaun Legend Nail Polish",
    blurb:
      "Striking color with a mirror-gloss finish that refuses to fade. One swipe, and your nails look unapologetically expensive.",
    img: "/assets/images/nails.webp",
    price: 18,
    link: "/product/1",
  },
  {
    id: "2",
    name: "Swiss Miss Nail Polish Pack",
    blurb:
      "A power set of everyday shades built to elevate your hands instantly. Smooth, flawless, and effortlessly classy.",
    img: "/assets/images/swiss.webp",
    price: 28,
    link: "/product/2",
  },
  {
    id: "3",
    name: "Fogg Perfume Gift Pack",
    blurb:
      "A bold, all-day signature scent that turns heads without trying. Warm, commanding, and unmistakably present.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrRjNb8FIqHIf0twg9ATF8zlDs0_PDJ8ClQ&s",
    price: 22,
    link: "/product/3",
  },
  {
    id: "4",
    name: "Deep Clean Facewash",
    blurb:
      "A refreshing detox for your skin that wipes away dullness on contact. Clean, crisp, and instantly invigorating.",
    img: "/assets/images/421.jpg",
    price: 14,
    link: "/product/4",
  },

  {
    id: "6",
    name: "Moonlit Linen Room Spray",
    blurb:
      "A calming, slow-burning fragrance that settles your space into a hushed, luxurious mood instantly.",
    img: "/assets/images/linen.webp",
    price: 24,
    link: "/product/6",
  },

  {
    id: "7",
    name: "Soft Bloom Body Mist",
    blurb:
      "Lightweight, airy, and intimate. A daily mist that feels like stepping into soft morning sun.",
    img: "/assets/images/mist.jpg",
    price: 19,
    link: "/product/7",
  },
  {
    id: "8",
    name: "White Tea Calming Soap Bar",
    blurb:
      "Hand-pressed and cold-crafted. A clean, silky lather that leaves your skin quietly refreshed.",
    img: "/assets/images/soap.webp",
    price: 9,
    link: "/product/8",
  },

  {
    id: "9",
    name: "Almond Milk Body Lotion",
    blurb:
      "Deeply hydrating with a soft, sweet finish. The kind of lotion that makes you touch your arm twice.",
    img: "/assets/images/lotion.webp",
    price: 21,
    link: "/product/9",
  },
  {
    id: "10",
    name: "Silk Comfort Scrub",
    blurb:
      "A velvety micro-scrub that gently renews your skin without scratching its peace.",
    img: "/assets/images/scrub.webp",
    price: 17,
    link: "/product/10",
  },
  {
    id: "11",
    name: "Rosewater Glow Toner",
    blurb:
      "A cool, hydrating splash that resets your skin and restores a soft, natural brightness.",
    img: "/assets/images/toner.webp",
    price: 20,
    link: "/product/11",
  },
  {
    id: "12",
    name: "Coconut Silk Hair Serum",
    blurb:
      "Smooths, softens, and adds that quiet, expensive gloss your hair never shuts up about.",
    img: "/assets/images/serum.webp",
    price: 26,
    link: "/product/12",
  },
];
