export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  specs: Record<string, string>;
  reviews: {
    username: string;
    rating: number;
    comment: string;
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Naruto Shippuden Hoodie",
    price: 140,
    description: "Stay warm with this Naruto-themed hoodie featuring the iconic Hidden Leaf Village symbol.",
    images: ["/images/naruto-hoodie1.jpg", "/images/naruto-hoodie2.jpg", "/images/naruto-hoodie3.jpg"],
    category: "clothing",
    specs: {
      Material: "Cotton Blend",
      Sizes: "S, M, L, XL",
      Color: "Orange and Black",
    },
    reviews: [
      { username: "SasukeFan", rating: 5, comment: "Super comfortable and stylish!" },
      { username: "HinataLover", rating: 4, comment: "Great quality, but runs a bit small." },
      { username: "KakashiSensei", rating: 5, comment: "Perfect for any Naruto fan!" },
    ],
  },
  {
    id: "2",
    title: "Attack on Titan Scout Regiment Jacket",
    price: 200,
    description: "Join the Scout Regiment with this high-quality Attack on Titan jacket.",
    images: ["/images/aot-jacket1.jpg", "/images/aot-jacket2.jpg", "/images/aot-jacket3.jpg"],
    category: "clothing",
    specs: {
      Material: "Polyester",
      Sizes: "S, M, L, XL",
      Color: "Brown and White",
    },
    reviews: [
      { username: "ErenYeager", rating: 5, comment: "Feels like I'm part of the Scouts!" },
      { username: "MikasaFan", rating: 4, comment: "Great design, but a bit pricey." },
      { username: "LeviAckerman", rating: 5, comment: "Absolutely love it!" },
    ],
  },
  {
    id: "3",
    title: "Dragon Ball Z Goku Action Figure",
    price: 80,
    description: "A detailed action figure of Goku in his Super Saiyan form.",
    images: ["/images/goku-figure1.jpg", "/images/goku-figure2.jpg", "/images/goku-figure3.jpg"],
    category: "collectibles",
    specs: {
      Height: "12 inches",
      Material: "PVC",
      Weight: "500g",
    },
    reviews: [
      { username: "VegetaFan", rating: 5, comment: "Amazing detail and quality!" },
      { username: "Kamehameha", rating: 5, comment: "Perfect for my collection." },
      { username: "ChiChi", rating: 4, comment: "Great figure, but packaging was slightly damaged." },
    ],
  },
  {
    id: "4",
    title: "One Piece Straw Hat",
    price: 50,
    description: "Become the next Pirate King with this iconic Straw Hat from One Piece.",
    images: ["/images/onepiece-hat1.jpg", "/images/onepiece-hat2.jpg", "/images/onepiece-hat3.jpg"],
    category: "accessories",
    specs: {
      Material: "Straw",
      Size: "One Size Fits All",
      Weight: "200g",
    },
    reviews: [
      { username: "LuffyFan", rating: 5, comment: "Exactly what I wanted!" },
      { username: "Zoro", rating: 4, comment: "Good quality, but a bit fragile." },
      { username: "Nami", rating: 5, comment: "Perfect for cosplay!" },
    ],
  },
  {
    id: "5",
    title: "My Hero Academia Deku Backpack",
    price: 120,
    description: "Carry your hero gear in this stylish My Hero Academia backpack.",
    images: ["/images/mha-backpack1.jpg", "/images/mha-backpack2.jpg", "/images/mha-backpack3.jpg"],
    category: "accessories",
    specs: {
      Material: "Canvas",
      Capacity: "20L",
      Color: "Green and Black",
    },
    reviews: [
      { username: "AllMight", rating: 5, comment: "Plus Ultra quality!" },
      { username: "BakugoFan", rating: 4, comment: "Great design, but straps could be more comfortable." },
      { username: "Todoroki", rating: 5, comment: "Perfect for school or travel." },
    ],
  },
  {
    id: "6",
    title: "Demon Slayer Tanjiro Sword Replica",
    price: 300,
    description: "A high-quality replica of Tanjiro's sword from Demon Slayer.",
    images: ["/images/tanjiro-sword1.jpg", "/images/tanjiro-sword2.jpg", "/images/tanjiro-sword3.jpg"],
    category: "collectibles",
    specs: {
      Length: "40 inches",
      Material: "Steel",
      Weight: "1.5kg",
    },
    reviews: [
      { username: "Nezuko", rating: 5, comment: "Looks amazing on display!" },
      { username: "Zenitsu", rating: 4, comment: "Great quality, but a bit heavy." },
      { username: "Inosuke", rating: 5, comment: "Perfect for any Demon Slayer fan!" },
    ],
  },
  {
    id: "7",
    title: "Sailor Moon Crystal Necklace",
    price: 75,
    description: "A beautiful necklace inspired by Sailor Moon's transformation crystal.",
    images: ["/images/sailormoon-necklace1.jpg", "/images/sailormoon-necklace2.jpg", "/images/sailormoon-necklace3.jpg"],
    category: "jewelry",
    specs: {
      Material: "Sterling Silver",
      Length: "18 inches",
      Weight: "50g",
    },
    reviews: [
      { username: "MoonPrism", rating: 5, comment: "Absolutely stunning!" },
      { username: "SerenaFan", rating: 5, comment: "Perfect gift for Sailor Moon fans." },
      { username: "Luna", rating: 4, comment: "Beautiful, but chain could be sturdier." },
    ],
  },
  // Add more products here following the same structure...
];