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
    title: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "electronics",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "2",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "3",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "4",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "5",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "6",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "7",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "8",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "9",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "10",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "11",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "12",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "13",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "14",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "15",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },

  {
    id: "16",
    title: "Naruto Hoodie",
    price: 140,
    description: "High-quality wireless headphones with noise cancellation.",
    images: ["/images/image.png", "/images/headphones2.jpg"],
    category: "clothing",
    specs: {
      Battery: "20h",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
    reviews: [
      {
        username: "JaneDoe",
        rating: 5,
        comment: "Amazing sound and battery life!",
      },
    ],
  },
];
