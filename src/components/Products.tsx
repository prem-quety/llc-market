export type Product = {
  id: string;
  name: string;
  blurb: string;
  img: string;
  price: number;
  link: string;
  category: "cosmetics" | "home-decor" | "water-bottles" | "aesthetic";
  rating: number;
  reviews: number;
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
    rating: 4.5,
    reviews: 12,
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
    rating: 4.8,
    reviews: 30,
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
    rating: 3.9,
    reviews: 8,
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
    rating: 4.2,
    reviews: 22,
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
    rating: 4.7,
    reviews: 15,
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
    rating: 5.0,
    reviews: 5,
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
    rating: 3.5,
    reviews: 40,
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
    rating: 4.6,
    reviews: 28,
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
    rating: 4.1,
    reviews: 10,
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
    rating: 4.9,
    reviews: 35,
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
    rating: 4.3,
    reviews: 18,
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
    rating: 4.8,
    reviews: 9,
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
    rating: 3.8,
    reviews: 14,
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
    rating: 4.4,
    reviews: 25,
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
    rating: 4.7,
    reviews: 32,
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
    rating: 4.0,
    reviews: 6,
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
    rating: 4.5,
    reviews: 20,
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
    rating: 4.9,
    reviews: 11,
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
    rating: 3.7,
    reviews: 7,
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
    rating: 4.6,
    reviews: 38,
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
    rating: 4.2,
    reviews: 16,
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
    rating: 4.8,
    reviews: 29,
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
    rating: 4.3,
    reviews: 13,
  },
  {
    id: "25",
    name: "Velvet Matte Lipstick Set",
    blurb:
      "A trio of deep reds and soft nudes with a finish that feels like cashmere.",
    img: "/assets/images/lipstick.png",
    price: 24,
    link: "/product/25",
    category: "cosmetics",
    rating: 4.5,
    reviews: 21,
  },
  {
    id: "26",
    name: "Golden Hour Shimmer Oil",
    blurb:
      "Infused with real gold flakes for a sun-kissed glow that lasts all day.",
    img: "/assets/images/shimmer-oil.png",
    price: 26,
    link: "/product/26",
    category: "cosmetics",
    rating: 4.1,
    reviews: 39,
  },
  {
    id: "27",
    name: "Abstract Geometric Art Print",
    blurb:
      "Modern lines meets soft pastels. A conversation starter for your gallery wall.",
    img: "/assets/images/art-print.png",
    price: 35,
    link: "/product/27",
    category: "aesthetic",
    rating: 4.7,
    reviews: 8,
  },
  {
    id: "28",
    name: "Terra Cotta Succulent Pot",
    blurb:
      "Hand-thrown clay with a raw, earthy texture. The perfect home for your green friends.",
    img: "/assets/images/succulent.png",
    price: 18,
    link: "/product/28",
    category: "home-decor",
    rating: 3.6,
    reviews: 19,
  },
  {
    id: "29",
    name: "Luxe Silk Pillowcase",
    blurb:
      "Wake up with smoother hair and skin. Champagne gold mulberry silk that feels like pure luxury.",
    img: "/assets/images/silk-pillowcase.png",
    price: 45,
    link: "/product/29",
    category: "aesthetic",
    rating: 4.9,
    reviews: 31,
  },
  {
    id: "30",
    name: "Crystal Infusion Water Bottle",
    blurb:
      "Charge your water with positive energy. Rose quartz infusion point in a sleek glass design.",
    img: "/assets/images/crystal-bottle.png",
    price: 38,
    link: "/product/30",
    category: "water-bottles",
    rating: 4.4,
    reviews: 24,
  },
  {
    id: "31",
    name: "Signature Gold Perfume",
    blurb:
      "A rich, long-lasting fragrance with notes of amber and vanilla. Pure luxury in a bottle.",
    img: "/assets/images/perfume.png",
    price: 85,
    link: "/product/31",
    category: "cosmetics",
    rating: 4.8,
    reviews: 15,
  },
  {
    id: "32",
    name: "Matte Steel Bottle",
    blurb:
      "Industrial strength hydration with a soft-touch finish. Keeps water cold for 12 hours.",
    img: "/assets/images/bottle.jpg",
    price: 40,
    link: "/product/32",
    category: "water-bottles",
    rating: 4.2,
    reviews: 27,
  },
  {
    id: "33",
    name: "French Lavender Bundle",
    blurb:
      "Real dried lavender from Provence. Adds a calming scent and rustic charm to any room.",
    img: "/assets/images/lavendar.jpg",
    price: 22,
    link: "/product/33",
    category: "home-decor",
    rating: 4.5,
    reviews: 10,
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
