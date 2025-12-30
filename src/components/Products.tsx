export type Product = {
  id: string;
  name: string;
  blurb: string;
  img: string;
  price: number;
  link: string;
  category:
    | "beauty-self-care"
    | "home-kitchen"
    | "office-products"
    | "pet-supplies"
    | "toys-games";
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  // --- BEAUTY & SELF CARE (RENAME COSMETICS TO THIS ONE) ---
  {
    id: "1",
    name: "Chaun Legend Nail Polish",
    blurb:
      "Striking color with a mirror-gloss finish that refuses to fade. One swipe, and your nails look unapologetically expensive.",
    img: "/assets/images/nails.webp",
    price: 18,
    link: "/product/1",
    category: "beauty-self-care",
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
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 30,
  },
  {
    id: "3",
    name: "Fogg Perfume Gift Pack",
    blurb:
      "A bold, all-day signature scent that turns heads without trying. Warm, commanding, and unmistakably present.",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1080",
    price: 22,
    link: "/product/3",
    category: "beauty-self-care",
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
    category: "beauty-self-care",
    rating: 4.2,
    reviews: 22,
  },
  {
    id: "7",
    name: "Soft Bloom Body Mist",
    blurb:
      "Lightweight, airy, and intimate. A daily mist that feels like stepping into soft morning sun.",
    img: "/assets/images/mist.jpg",
    price: 19,
    link: "/product/7",
    category: "beauty-self-care",
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
    category: "beauty-self-care",
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
    category: "beauty-self-care",
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
    category: "beauty-self-care",
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
    category: "beauty-self-care",
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
    category: "beauty-self-care",
    rating: 4.3,
    reviews: 18,
  },
  {
    id: "23",
    name: "Lavender Pillow Mist",
    blurb:
      "A soft spritz before bed. Calming lavender that whispers you to sleep instantly.",
    img: "/assets/images/linen.webp",
    price: 16,
    link: "/product/23",
    category: "beauty-self-care",
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
    category: "beauty-self-care",
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
    category: "beauty-self-care",
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
    category: "beauty-self-care",
    rating: 4.1,
    reviews: 39,
  },
  {
    id: "31",
    name: "Signature Gold Perfume",
    blurb:
      "A rich, long-lasting fragrance with notes of amber and vanilla. Pure luxury in a bottle.",
    img: "/assets/images/perfume.png",
    price: 85,
    link: "/product/31",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 15,
  },
  {
    id: "38",
    name: "Honey & Oat Face Mask",
    blurb:
      "Deeply nourishing and gentle. The comfort food your skin has been craving.",
    img: "/assets/images/honey-oat-mask.png",
    price: 22,
    link: "/product/38",
    category: "beauty-self-care",
    rating: 4.7,
    reviews: 30,
  },
  {
    id: "46",
    name: "Charcoal Detox Scrub",
    blurb:
      "Activated charcoal that draws out impurities. A gritty, satisfying scrub for deep-cleaned skin.",
    img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&q=80&w=1080",
    price: 20,
    link: "/product/46",
    category: "beauty-self-care",
    rating: 4.4,
    reviews: 35,
  },
  {
    id: "49",
    name: "Vitamin C Radiance Serum",
    blurb:
      "A daily glow-up in a bottle. Brightens dark spots and evens skin tone with every drop.",
    img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=1080",
    price: 32,
    link: "/product/49",
    category: "beauty-self-care",
    rating: 4.5,
    reviews: 29,
  },
  {
    id: "52",
    name: "Hydro-Gel Face Mask Pack",
    blurb:
      "Instant hydration for tired skin. Cools on contact and leaves you looking dewy and rested.",
    img: "https://images.unsplash.com/photo-1605682681666-f4f47c6e4bb2?auto=format&fit=crop&q=80&w=1080",
    price: 18,
    link: "/product/52",
    category: "beauty-self-care",
    rating: 4.2,
    reviews: 40,
  },
  {
    id: "55",
    name: "Matte Black Lip Stain",
    blurb:
      "Bold, gothic elegance. A non-drying formula that stays pitch black all night long.",
    img: "https://images.unsplash.com/photo-1686831758227-1802d0ba5eda?auto=format&fit=crop&q=80&w=1080",
    price: 22,
    link: "/product/55",
    category: "beauty-self-care",
    rating: 4.1,
    reviews: 12,
  },
  {
    id: "60",
    name: "Retinol Night Cream",
    blurb:
      "Powerhouse anti-aging while you sleep. Wakes up plumper, smoother skin.",
    img: "https://images.unsplash.com/photo-1686831451322-8d8e234a51e1?auto=format&fit=crop&q=80&w=1080",
    price: 38,
    link: "/product/60",
    category: "beauty-self-care",
    rating: 4.5,
    reviews: 26,
  },
  {
    id: "64",
    name: "Rose Quartz Facial Roller",
    blurb:
      "Promote circulation and encourage skin rejuvenation with this cooling rose quartz tool.",
    img: "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?auto=format&fit=crop&q=80&w=1080",
    price: 28,
    link: "/product/64",
    category: "beauty-self-care",
    rating: 4.6,
    reviews: 52,
  },
  {
    id: "65",
    name: "Hydrating Mist Toner",
    blurb:
      "A burst of freshness with aloe and rosewater. Instantly revitalizes dry, tired skin.",
    img: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?auto=format&fit=crop&q=80&w=1080",
    price: 22,
    link: "/product/65",
    category: "beauty-self-care",
    rating: 4.4,
    reviews: 19,
  },
  {
    id: "66",
    name: "Golden Glow Body Oil",
    blurb:
      "Shimmering body oil that leaves a sun-kissed finish. Fast-absorbing and non-greasy.",
    img: "https://images.unsplash.com/photo-1702724122793-37ff49fee252?auto=format&fit=crop&q=80&w=1080",
    price: 34,
    link: "/product/66",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 63,
  },
  {
    id: "67",
    name: "Pro-Collagen Eye Cream",
    blurb:
      "Target fine lines and dark circles. A lightweight formula that smooths and brightens.",
    img: "https://images.unsplash.com/photo-1594813591867-02e797aa4581?auto=format&fit=crop&q=80&w=1080",
    price: 45,
    link: "/product/67",
    category: "beauty-self-care",
    rating: 4.7,
    reviews: 30,
  },
  {
    id: "68",
    name: "Silk Peptide Foundation",
    blurb:
      "Buildable coverage with a skin-like finish. Infused with silk peptides for a soft glow.",
    img: "https://images.unsplash.com/photo-1512207683547-2631a3798786?auto=format&fit=crop&q=80&w=1080",
    price: 38,
    link: "/product/68",
    category: "beauty-self-care",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: "84",
    name: "Vitamin E Face Oil",
    blurb:
      "Deeply restorative oil that repairs and glows. A few drops is all you need for radiance.",
    img: "https://images.unsplash.com/photo-1741896135512-084b251887f7?auto=format&fit=crop&q=80&w=1080",
    price: 32,
    link: "/product/84",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 24,
  },
  {
    id: "85",
    name: "Volcanic Ash Clay Mask",
    blurb:
      "Detoxify your pores with raw volcanic earth. Leaves skin feeling tight, clean, and renewed.",
    img: "https://images.unsplash.com/photo-1710693547912-db17dc079ed4?auto=format&fit=crop&q=80&w=1080",
    price: 26,
    link: "/product/85",
    category: "beauty-self-care",
    rating: 4.6,
    reviews: 31,
  },
  {
    id: "86",
    name: "Bamboo Toothbrush Set",
    blurb:
      "Sustainable oral care. Biodegradable bamboo handles with soft charcoal-infused bristles.",
    img: "https://images.unsplash.com/photo-1592372554345-22ced975691d?auto=format&fit=crop&q=80&w=1080",
    price: 14,
    link: "/product/86",
    category: "beauty-self-care",
    rating: 4.9,
    reviews: 50,
  },
  {
    id: "87",
    name: "Solid Perfume Balm",
    blurb:
      "A pocket-sized scent for touch-ups on the go. Subtle, waxy, and intimate.",
    img: "https://images.unsplash.com/photo-1656103743126-656ce0ed6291?auto=format&fit=crop&q=80&w=1080",
    price: 22,
    link: "/product/87",
    category: "beauty-self-care",
    rating: 4.4,
    reviews: 18,
  },
  {
    id: "88",
    name: "Coconut Milk Bath Soak",
    blurb:
      "Creamy, hydrating escape. Turns your bath water into a silky, moisturizing cloud.",
    img: "https://images.unsplash.com/photo-1724155593611-68a596dcc9ed?auto=format&fit=crop&q=80&w=1080",
    price: 28,
    link: "/product/88",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 42,
  },

  // --- HOME & KITCHEN ---
  {
    id: "101",
    name: "Artisan Espresso Machine",
    blurb:
      "Barista-quality coffee at home. Stainless steel finish with precision temperature control.",
    img: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=1080",
    price: 350,
    link: "/product/101",
    category: "home-kitchen",
    rating: 4.9,
    reviews: 56,
  },
  {
    id: "102",
    name: "Japanese Chef Knife Set",
    blurb:
      "Hand-forged Damascus steel. Razor-sharp precision for the culinary perfectionist.",
    img: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=1080",
    price: 129,
    link: "/product/102",
    category: "home-kitchen",
    rating: 4.8,
    reviews: 32,
  },
  {
    id: "103",
    name: "Smart Air Purifier",
    blurb:
      "Sleek, silent, and powerful. Clears allergens and smoke with HEPA filters while looking modern.",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=1080",
    price: 180,
    link: "/product/103",
    category: "home-kitchen",
    rating: 4.7,
    reviews: 44,
  },
  {
    id: "104",
    name: "Bamboo Steamer Basket",
    blurb:
      "Authentic steaming for dumplings and veggies. Brings an organic, healthy touch to your kitchen.",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=1080",
    price: 25,
    link: "/product/104",
    category: "home-kitchen",
    rating: 4.5,
    reviews: 18,
  },
  {
    id: "105",
    name: "Ceramic Non-Stick Pan",
    blurb:
      "Eco-friendly non-stick coating in a beautiful pastel hue. Cooking and cleaning made effortless.",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1080",
    price: 45,
    link: "/product/105",
    category: "home-kitchen",
    rating: 4.6,
    reviews: 29,
  },
  {
    id: "106",
    name: "Stand Mixer Pro",
    blurb:
      "Powerful 500W motor with 6 speeds. Stainless steel bowl and multiple attachments for baking perfection.",
    img: "/assets/images/stand_mixer_1767100863181.png",
    price: 220,
    link: "/product/106",
    category: "home-kitchen",
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "107",
    name: "Glass Storage Container Set",
    blurb:
      "BPA-free glass with bamboo lids. Stackable, airtight, and microwave-safe for organized meal prep.",
    img: "/assets/images/glass_containers_1767100885289.png",
    price: 42,
    link: "/product/107",
    category: "home-kitchen",
    rating: 4.7,
    reviews: 38,
  },
  {
    id: "108",
    name: "Electric Kettle with Temperature Control",
    blurb:
      "Precision brewing for tea and coffee. Digital display with 5 preset temperatures.",
    img: "/assets/images/electric_kettle_1767100900142.png",
    price: 68,
    link: "/product/108",
    category: "home-kitchen",
    rating: 4.8,
    reviews: 52,
  },
  {
    id: "109",
    name: "Cast Iron Dutch Oven",
    blurb:
      "Enameled cast iron for slow cooking perfection. Retains heat beautifully and goes from stovetop to oven.",
    img: "/assets/images/dutch_oven_1767100916099.png",
    price: 95,
    link: "/product/109",
    category: "home-kitchen",
    rating: 4.9,
    reviews: 41,
  },
  {
    id: "110",
    name: "High-Speed Blender",
    blurb:
      "1200W power for smoothies, soups, and nut butters. Glass pitcher with pulse function.",
    img: "/assets/images/blender_1767100933329.png",
    price: 135,
    link: "/product/110",
    category: "home-kitchen",
    rating: 4.6,
    reviews: 48,
  },

  // --- OFFICE PRODUCTS ---
  {
    id: "201",
    name: "Ergonomic Mesh Chair",
    blurb:
      "Breathable mesh with lumbar support. Designed for all-day comfort and posture health.",
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1080",
    price: 250,
    link: "/product/201",
    category: "office-products",
    rating: 4.8,
    reviews: 35,
  },
  {
    id: "202",
    name: "Mechanical Keyboard",
    blurb:
      "Tactile switches with subtle RGB backlighting. A satisfying typing experience for pros.",
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1080",
    price: 110,
    link: "/product/202",
    category: "office-products",
    rating: 4.9,
    reviews: 62,
  },
  {
    id: "203",
    name: "Leather Desk Pad",
    blurb:
      "Premium vegan leather. Protects your desk and provides a smooth surface for your mouse.",
    img: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=1080",
    price: 35,
    link: "/product/203",
    category: "office-products",
    rating: 4.7,
    reviews: 21,
  },
  {
    id: "204",
    name: "Vertical Laptop Stand",
    blurb:
      "Save space and declutter. Brushed aluminum stand that holds your laptop securely.",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1080",
    price: 28,
    link: "/product/204",
    category: "office-products",
    rating: 4.6,
    reviews: 15,
  },
  {
    id: "205",
    name: "Noise Cancelling Headset",
    blurb:
      "Focus anywhere. Superior sound isolation and crystal clear microphone for calls.",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1080",
    price: 180,
    link: "/product/205",
    category: "office-products",
    rating: 4.5,
    reviews: 40,
  },
  {
    id: "206",
    name: "LED Desk Lamp",
    blurb:
      "Adjustable brightness and color temperature. Eye-friendly lighting for late-night work sessions.",
    img: "/assets/images/desk_lamp_1767100948519.png",
    price: 48,
    link: "/product/206",
    category: "office-products",
    rating: 4.7,
    reviews: 31,
  },
  {
    id: "207",
    name: "Wireless Ergonomic Mouse",
    blurb:
      "Vertical design reduces wrist strain. Rechargeable battery with precision tracking.",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=1080",
    price: 55,
    link: "/product/207",
    category: "office-products",
    rating: 4.6,
    reviews: 44,
  },
  {
    id: "208",
    name: "Professional Portfolio Organizer",
    blurb:
      "Premium leather with multiple compartments. Includes notepad, card slots, and pen holder.",
    img: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?auto=format&fit=crop&q=80&w=1080",
    price: 72,
    link: "/product/208",
    category: "office-products",
    rating: 4.8,
    reviews: 26,
  },
  {
    id: "209",
    name: "Cable Management Box",
    blurb:
      "Hide messy cables in style. Sleek design with multiple openings for organized desk setup.",
    img: "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&q=80&w=1080",
    price: 28,
    link: "/product/209",
    category: "office-products",
    rating: 4.5,
    reviews: 19,
  },
  {
    id: "210",
    name: "Bamboo Monitor Stand",
    blurb:
      "Elevate your screen to eye level. Built-in storage drawer for desk essentials.",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1080",
    price: 45,
    link: "/product/210",
    category: "office-products",
    rating: 4.7,
    reviews: 37,
  },

  // --- PET SUPPLIES ---
  {
    id: "301",
    name: "Orthopedic Dog Bed",
    blurb:
      "Memory foam comfort for your best friend. Washable cover and non-slip bottom.",
    img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=1080",
    price: 85,
    link: "/product/301",
    category: "pet-supplies",
    rating: 4.9,
    reviews: 80,
  },
  {
    id: "302",
    name: "Smart Pet Feeder",
    blurb:
      "Schedule meals from your phone. Built-in camera to check only your furry companion.",
    img: "https://images.unsplash.com/photo-1765110278433-7b0d294a1104?auto=format&fit=crop&q=80&w=1080",
    price: 120,
    link: "/product/302",
    category: "pet-supplies",
    rating: 4.6,
    reviews: 33,
  },
  {
    id: "303",
    name: "Interactive Laser Toy",
    blurb:
      "Keep them entertained for hours. Automatic patterns to stimulate their hunting instincts.",
    img: "https://images.unsplash.com/photo-1678047141089-82478810603b?auto=format&fit=crop&q=80&w=1080",
    price: 24,
    link: "/product/303",
    category: "pet-supplies",
    rating: 4.4,
    reviews: 25,
  },
  {
    id: "304",
    name: "Cat Window Perch",
    blurb:
      "The best seat in the house. Strong suction cups hold up to 20kg for safe bird watching.",
    img: "https://images.unsplash.com/photo-1681741179058-e8a7a7cf77a9?auto=format&fit=crop&q=80&w=1080",
    price: 32,
    link: "/product/304",
    category: "pet-supplies",
    rating: 4.7,
    reviews: 19,
  },
  {
    id: "305",
    name: "Premium Leather Leash",
    blurb:
      "Durable and stylish. Hand-stitched leather that ages beautifully with time.",
    img: "https://images.unsplash.com/photo-1589667762466-68ce9ed3bbe8?auto=format&fit=crop&q=80&w=1080",
    price: 45,
    link: "/product/305",
    category: "pet-supplies",
    rating: 4.8,
    reviews: 12,
  },
  {
    id: "306",
    name: "Automatic Pet Water Fountain",
    blurb:
      "Circulating fresh water encourages drinking. Ultra-quiet pump with LED indicator.",
    img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=1080",
    price: 38,
    link: "/product/306",
    category: "pet-supplies",
    rating: 4.7,
    reviews: 54,
  },
  {
    id: "307",
    name: "Travel Pet Carrier Backpack",
    blurb:
      "Airline-approved with mesh windows. Comfortable for both you and your furry friend.",
    img: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=1080",
    price: 52,
    link: "/product/307",
    category: "pet-supplies",
    rating: 4.6,
    reviews: 28,
  },
  {
    id: "308",
    name: "Durable Rope Chew Toy",
    blurb:
      "Dental health meets playtime. Heavy-duty cotton rope for aggressive chewers.",
    img: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&q=80&w=1080",
    price: 16,
    link: "/product/308",
    category: "pet-supplies",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: "309",
    name: "Multi-Level Cat Tree Tower",
    blurb:
      "Scratching posts, perches, and a cozy hideaway. Everything your cat dreams about.",
    img: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=1080",
    price: 89,
    link: "/product/309",
    category: "pet-supplies",
    rating: 4.9,
    reviews: 63,
  },
  {
    id: "310",
    name: "Elevated Pet Bowl Set",
    blurb:
      "Stainless steel bowls on bamboo stand. Better posture for healthier digestion.",
    img: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?auto=format&fit=crop&q=80&w=1080",
    price: 42,
    link: "/product/310",
    category: "pet-supplies",
    rating: 4.7,
    reviews: 35,
  },

  // --- TOYS & GAMES ---
  {
    id: "401",
    name: "Wooden Building Blocks",
    blurb:
      "Timeless creative play. Natural finish beech wood blocks for budding architects.",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1080",
    price: 38,
    link: "/product/401",
    category: "toys-games",
    rating: 4.9,
    reviews: 45,
  },
  {
    id: "402",
    name: "RC Drone with Camera",
    blurb:
      "Explore the skies. HD camera and stable flight mode for beginners and pros.",
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1080",
    price: 150,
    link: "/product/402",
    category: "toys-games",
    rating: 4.6,
    reviews: 28,
  },
  {
    id: "403",
    name: "Strategy Board Game",
    blurb:
      "Civilization building for game night. Engaging mechanics and beautiful components.",
    img: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=1080",
    price: 55,
    link: "/product/403",
    category: "toys-games",
    rating: 4.8,
    reviews: 60,
  },
  {
    id: "404",
    name: "Plush Comfort Bear",
    blurb:
      "Ultra-soft and huggable. The perfect comforting companion for kids of all ages.",
    img: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?auto=format&fit=crop&q=80&w=1080",
    price: 25,
    link: "/product/404",
    category: "toys-games",
    rating: 5.0,
    reviews: 90,
  },
  {
    id: "405",
    name: "Educational Robot Kit",
    blurb:
      "Learn to code with fun. Easy-to-assemble robot that teaches STEM concepts.",
    img: "https://images.unsplash.com/photo-1705393928685-4dec061491dd?auto=format&fit=crop&q=80&w=1080",
    price: 89,
    link: "/product/405",
    category: "toys-games",
    rating: 4.7,
    reviews: 22,
  },
  {
    id: "406",
    name: "Magnetic Building Tiles",
    blurb:
      "Colorful 3D construction set. Develops spatial reasoning and creativity through play.",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=1080",
    price: 48,
    link: "/product/406",
    category: "toys-games",
    rating: 4.9,
    reviews: 76,
  },
  {
    id: "407",
    name: "1000-Piece Scenic Puzzle",
    blurb:
      "Challenging and relaxing. Premium quality pieces with vibrant landscape artwork.",
    img: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=1080",
    price: 24,
    link: "/product/407",
    category: "toys-games",
    rating: 4.6,
    reviews: 33,
  },
  {
    id: "408",
    name: "RC Racing Car",
    blurb:
      "High-speed remote control action. Durable design with responsive steering for indoor and outdoor fun.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1080",
    price: 65,
    link: "/product/408",
    category: "toys-games",
    rating: 4.5,
    reviews: 47,
  },
  {
    id: "409",
    name: "Deluxe Art Supplies Set",
    blurb:
      "Everything young artists need. 150+ pieces including markers, crayons, and colored pencils.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1080",
    price: 38,
    link: "/product/409",
    category: "toys-games",
    rating: 4.8,
    reviews: 58,
  },
  {
    id: "410",
    name: "Science Experiment Kit",
    blurb:
      "30+ hands-on experiments. Safe, educational fun that sparks curiosity about chemistry and physics.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1080",
    price: 44,
    link: "/product/410",
    category: "toys-games",
    rating: 4.7,
    reviews: 39,
  },
  // Add these to your products array

  // --- BEAUTY & SELF CARE ---
  {
    id: "91",
    name: "Matcha Detox Face Mask",
    blurb:
      "A creamy, antioxidant-rich clay mask that pulls toxins out and leaves a bright, velvety finish.",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1080",
    price: 24,
    link: "/product/91",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 52,
  },
  {
    id: "92",
    name: "Organic Beard Oil",
    blurb:
      "Cedarwood and sandalwood blend. Tames the wildest manes while hydrating the skin beneath.",
    img: "/assets/images/oil.png",
    price: 19,
    link: "/product/92",
    category: "beauty-self-care",
    rating: 4.6,
    reviews: 18,
  },

  {
    id: "113",
    name: "Ceramic Pour-Over Dripper",
    blurb:
      "The purist's way to brew. Heavy-duty ceramic that maintains heat for a perfect, slow extraction.",
    img: "/assets/images/cup.png",
    price: 32,
    link: "/product/113",
    category: "home-kitchen",
    rating: 4.9,
    reviews: 44,
  },
  {
    id: "114",
    name: "Nordic Wood Fruit Bowl",
    blurb:
      "Hand-carved acacia wood with a minimalist profile. A functional centerpiece for a modern kitchen.",
    img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1080",
    price: 48,
    link: "/product/114",
    category: "home-kitchen",
    rating: 4.7,
    reviews: 12,
  },

  // --- OFFICE PRODUCTS ---
  {
    id: "213",
    name: "Aluminum Monitor Riser",
    blurb:
      "Strong, sleek, and silver. Elevates your screen to eye level while hiding your keyboard underneath.",
    img: "/assets/images/stand.png",
    price: 55,
    link: "/product/213",
    category: "office-products",
    rating: 4.8,
    reviews: 31,
  },
  {
    id: "214",
    name: "Brass Rollerball Pen",
    blurb:
      "Weighted for precision and built to last a lifetime. Develops a beautiful patina with every use.",
    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=1080",
    price: 42,
    link: "/product/214",
    category: "office-products",
    rating: 5.0,
    reviews: 9,
  },

  // --- PET SUPPLIES ---
  {
    id: "313",
    name: "Ceramic Cat Feeding Bowl",
    blurb:
      "Whiskers-friendly shallow design. Heavy enough to stay put during the most enthusiastic meals.",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1080",
    price: 22,
    link: "/product/313",
    category: "pet-supplies",
    rating: 4.7,
    reviews: 65,
  },
  {
    id: "314",
    name: "Patterned Dog Bandana",
    blurb:
      "Hand-printed cotton with a simple slide-on design. For the dog that knows they're the main character.",
    img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&q=80&w=1080",
    price: 15,
    link: "/product/314",
    category: "pet-supplies",
    rating: 4.9,
    reviews: 120,
  },

  // --- TOYS & GAMES ---
  {
    id: "413",
    name: "Handcrafted Wooden Chess Set",
    blurb:
      "Walnut and maple board with weighted pieces. A classic game that doubles as sophisticated decor.",
    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1080",
    price: 85,
    link: "/product/413",
    category: "toys-games",
    rating: 4.9,
    reviews: 38,
  },
  {
    id: "414",
    name: "Tabletop Retro Arcade",
    blurb:
      "100+ classic games in one compact machine. Real joystick feel for that 80s nostalgia.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1080",
    price: 120,
    link: "/product/414",
    category: "toys-games",
    rating: 4.5,
    reviews: 22,
  },
];

export const dynamicCategories = Array.from(
  new Set(products.map((p) => p.category))
);

export const categoryLabels: Record<Product["category"], string> = {
  "beauty-self-care": "Beauty & Self Care",
  "home-kitchen": "Home & Kitchen",
  "office-products": "Office Products",
  "pet-supplies": "Pet Supplies",
  "toys-games": "Toys & Games",
};

/*
  DEPRECATED / COMMENTED OUT PRODUCTS (Previous Inventory)
  
  {
    id: "6",
    name: "Moonlit Linen Room Spray",
    blurb: "A calming, slow-burning fragrance that settles your space into a hushed, luxurious mood instantly.",
    img: "/assets/images/linen.webp",
    price: 24,
    link: "/product/6",
    category: "home-decor",
    rating: 4.7,
    reviews: 15,
  },
  {
    id: "13",
    name: "Marble Ceramic Vase",
    blurb: "A sculptural piece that holds flowers and moments in equal measure. Timeless elegance for any room.",
    img: "/assets/images/vase.avif",
    price: 45,
    link: "/product/13",
    category: "home-decor",
    rating: 4.8,
    reviews: 9,
  },
  // ... and others
*/
