export type Product = {
  id: string;
  name: string;
  blurb: string;
  img: string;
  price: number;
  link: string; // added
  category: "cosmetics" | "home-decor" | "water-bottles" | "aesthetic";
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
    category: "cosmetics",
  },
  {
    id: "2",
    name: "Swiss Miss Nail Polish Pack",
    blurb:
      "A power set of everyday shades built to elevate your hands instantly. Smooth, flawless, and effortlessly classy.",
    img: "/assets/images/swiss.webp",
    price: 28,
    link: "/product/2",
    category: "cosmetics",
  },
  {
    id: "3",
    name: "Fogg Perfume Gift Pack",
    blurb:
      "A bold, all-day signature scent that turns heads without trying. Warm, commanding, and unmistakably present.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrRjNb8FIqHIf0twg9ATF8zlDs0_PDJ8ClQ&s",
    price: 22,
    link: "/product/3",
    category: "cosmetics",
  },
  {
    id: "4",
    name: "Deep Clean Facewash",
    blurb:
      "A refreshing detox for your skin that wipes away dullness on contact. Clean, crisp, and instantly invigorating.",
    img: "/assets/images/421.jpg",
    price: 14,
    link: "/product/4",
    category: "cosmetics",
  },

  {
    id: "6",
    name: "Moonlit Linen Room Spray",
    blurb:
      "A calming, slow-burning fragrance that settles your space into a hushed, luxurious mood instantly.",
    img: "/assets/images/linen.webp",
    price: 24,
    link: "/product/6",
    category: "home-decor",
  },

  {
    id: "7",
    name: "Soft Bloom Body Mist",
    blurb:
      "Lightweight, airy, and intimate. A daily mist that feels like stepping into soft morning sun.",
    img: "/assets/images/mist.jpg",
    price: 19,
    link: "/product/7",
    category: "cosmetics",
  },
  {
    id: "8",
    name: "White Tea Calming Soap Bar",
    blurb:
      "Hand-pressed and cold-crafted. A clean, silky lather that leaves your skin quietly refreshed.",
    img: "/assets/images/soap.webp",
    price: 9,
    link: "/product/8",
    category: "cosmetics",
  },

  {
    id: "9",
    name: "Almond Milk Body Lotion",
    blurb:
      "Deeply hydrating with a soft, sweet finish. The kind of lotion that makes you touch your arm twice.",
    img: "/assets/images/lotion.webp",
    price: 21,
    link: "/product/9",
    category: "cosmetics",
  },
  {
    id: "10",
    name: "Silk Comfort Scrub",
    blurb:
      "A velvety micro-scrub that gently renews your skin without scratching its peace.",
    img: "/assets/images/scrub.webp",
    price: 17,
    link: "/product/10",
    category: "cosmetics",
  },
  {
    id: "11",
    name: "Rosewater Glow Toner",
    blurb:
      "A cool, hydrating splash that resets your skin and restores a soft, natural brightness.",
    img: "/assets/images/toner.webp",
    price: 20,
    link: "/product/11",
    category: "cosmetics",
  },
  {
    id: "12",
    name: "Coconut Silk Hair Serum",
    blurb:
      "Smooths, softens, and adds that quiet, expensive gloss your hair never shuts up about.",
    img: "/assets/images/serum.webp",
    price: 26,
    link: "/product/12",
    category: "cosmetics",
  },
  {
    id: "13",
    name: "Marble Ceramic Vase",
    blurb:
      "A sculptural piece that holds flowers and moments in equal measure. Timeless elegance for any room.",
    img: "/assets/images/vase.avif",
    price: 45,
    link: "/product/13",
    category: "home-decor",
  },
  {
    id: "14",
    name: "Gold Brass Candle Holder",
    blurb:
      "Minimalist design that catches candlelight just right. A quiet statement piece for your space.",
    img: "/assets/images/candle.jpg",
    price: 32,
    link: "/product/14",
    category: "home-decor",
  },
  {
    id: "15",
    name: "Woven Rattan Wall Hanging",
    blurb:
      "Handcrafted texture that brings warmth to any wall. Boho-inspired, forever fresh.",
    img: "/assets/images/ratan.avif",
    price: 38,
    link: "/product/15",
    category: "home-decor",
  },
  {
    id: "16",
    name: "Minimalist Stainless Steel Water Bottle",
    blurb:
      "Keeps your drink at the perfect temperature for 24 hours. Sleek design, serious performance.",
    img: "/assets/images/water.webp",
    price: 35,
    link: "/product/16",
    category: "water-bottles",
  },
  {
    id: "17",
    name: "Pastel Ombre Water Bottle",
    blurb:
      "A gradient dream that looks as good as it hydrates. Double-walled insulation, endless style.",
    img: "/assets/images/pastel.webp",
    price: 28,
    link: "/product/17",
    category: "water-bottles",
  },
  {
    id: "18",
    name: "Vintage Glass Water Bottle with Cork",
    blurb:
      "Eco-conscious elegance. Borosilicate glass that feels timeless in your hand.",
    img: "/assets/images/cork.webp",
    price: 24,
    link: "/product/18",
    category: "water-bottles",
  },
  {
    id: "19",
    name: "Botanical Dried Flower Frame",
    blurb:
      "Pressed blooms preserved in a light wood frame. Nature's art, frozen in time.",
    img: "/assets/images/frame.jpg",
    price: 42,
    link: "/product/19",
    category: "aesthetic",
  },
  {
    id: "20",
    name: "Curved Ceramic Planter",
    blurb:
      "Soft, organic shapes that cradle your plants like sculptures. Blush pink glaze on cream clay.",
    img: "/assets/images/planter.webp",
    price: 29,
    link: "/product/20",
    category: "aesthetic",
  },
  {
    id: "21",
    name: "Silk Eye Mask Sleep Set",
    blurb:
      "Luxe sleep ritual. Pure mulberry silk that glides against your skin and keeps you cool.",
    img: "/assets/images/eye.jpg",
    price: 33,
    link: "/product/21",
    category: "aesthetic",
  },
  {
    id: "22",
    name: "Beaded Infinity Scarf",
    blurb:
      "Handwoven with tiny beads that catch light softly. A timeless accessory for any season.",
    img: "/assets/images/scarf.webp",
    price: 31,
    link: "/product/22",
    category: "aesthetic",
  },
  {
    id: "23",
    name: "Lavender Pillow Mist",
    blurb:
      "A soft spritz before bed. Calming lavender that whispers you to sleep instantly.",
    img: "/assets/images/linen.webp",
    price: 16,
    link: "/product/23",
    category: "cosmetics",
  },
  {
    id: "24",
    name: "Rose Quartz Facial Roller",
    blurb:
      "Cool stone that depuffs and sculpts. A morning ritual that feels like spa day.",
    img: "/assets/images/roller.webp",
    price: 19,
    link: "/product/24",
    category: "cosmetics",
  },
];
export const dynamicCategories = Array.from(
  new Set(products.map((p) => p.category))
);

export const categoryLabels: Record<Product["category"], string> = {
  cosmetics: "Cosmetics",
  "home-decor": "Home Decor",
  "water-bottles": "Water Bottles",
  aesthetic: "Aesthetic",
};
