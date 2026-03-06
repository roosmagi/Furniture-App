export type Product = {
  id: number;
  title: string;
  image: string | number;
  images?: Array<string | number>;
  category: number;
  price: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Minimal Stand",
    image: require('@/assets/images/minimal-stand.png'),
    category: 2,
    price: "$ 25.00",
    description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. .",
  },
  {
    id: 2,
    title: "Coffee Chair",
    image: require('@/assets/images/coffee-chair.png'),
    category: 1,
    price: "$ 20.00",
    description: "A modern and comfortable coffee chair designed for cozy living spaces. Perfect for coffee breaks or relaxing moments with its ergonomic design and durable construction. Compact and easy to maintain.",
  },
  {
    id: 3,
    title: "Black Simple Lamp",
    image: require('@/assets/images/black-simple-lamp.png'),
    category: 5,
    price: "$ 12.00",
    description: "A sleek and minimalist black lamp perfect for any room. Features a simple yet elegant design that complements modern and contemporary interiors. Provides warm lighting and is easy to install and maintain.",
  },
  {
    id: 4,
    title: "Cozy Armchair",
    image: "https://cdn.shopify.com/s/files/1/0079/2539/9616/products/myakka-chairs-jalkamal-block-print-footstool-28730051264703_2000x.jpg?v=1629217511",
    category: 3,
    price: "$ 80.00",
    description: "An ultra-comfortable armchair for relaxing. Classic design with modern comfort. Ideal for reading or unwinding.",
  },
  {
    id: 5,
    title: "Simple Desk",
    image: require('@/assets/images/simple-desk.png'),
    images: [
      require('@/assets/images/simple-desk.png'),
      require('@/assets/images/simple-desk.png'),
    ],
    category: 2,
    price: "$ 50.00",
    description: "A simple and functional desk perfect for any workspace. Features a clean design and durable construction for long-lasting use.",
  },
];
