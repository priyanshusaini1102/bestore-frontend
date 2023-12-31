import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import ProductCards from "@/components/productCards";

type Product = {
  title: string;
  img: string;
  price: number;
};

const listData: Product[] = [
  {
    title: "Orange",
    img: "https://picsum.photos/800/800",
    price: 5.5,
  },
  {
    title: "Tangerine",
    img: "https://picsum.photos/800/800",
    price: 3.0,
  },
  {
    title: "Raspberry",
    img: "https://picsum.photos/800/800",
    price: 10.0,
  },
  {
    title: "Lemon",
    img: "https://picsum.photos/800/800",
    price: 5.3,
  },
  {
    title: "Avocado",
    img: "https://picsum.photos/800/800",
    price: 15.7,
  },
  {
    title: "Lemon 2",
    img: "https://picsum.photos/800/800",
    price: 8.0,
  },
  {
    title: "Banana",
    img: "https://picsum.photos/800/800",
    price: 7.5,
  },
  {
    title: "Watermelon",
    img: "https://picsum.photos/800/800",
    price: 2.2,
  },
  {
    title: "Lemon 2",
    img: "https://picsum.photos/800/800",
    price: 8.0,
  },
  {
    title: "Banana",
    img: "https://picsum.photos/800/800",
    price: 7.5,
  },
  {
    title: "Watermelon",
    img: "https://picsum.photos/800/800",
    price: 2.2,
  },
  {
    title: "Lemon 2",
    img: "https://picsum.photos/800/800",
    price: 8.0,
  },
  {
    title: "Banana",
    img: "https://picsum.photos/800/800",
    price: 7.5,
  },
  {
    title: "Watermelon",
    img: "https://picsum.photos/800/800",
    price: 2.2,
  },
  {
    title: "Lemon 2",
    img: "https://picsum.photos/800/800",
    price: 8.0,
  },
  {
    title: "Banana",
    img: "https://picsum.photos/800/800",
    price: 7.5,
  },
  {
    title: "Watermelon",
    img: "https://picsum.photos/800/800",
    price: 2.2,
  },
  {
    title: "Lemon 2",
    img: "https://picsum.photos/800/800",
    price: 8.0,
  },
  {
    title: "Banana",
    img: "https://picsum.photos/800/800",
    price: 7.5,
  },
  {
    title: "Watermelon",
    img: "https://picsum.photos/800/800",
    price: 2.2,
  },
  {
    title: "Lemon 2",
    img: "https://picsum.photos/800/800",
    price: 8.0,
  },
  {
    title: "Banana",
    img: "https://picsum.photos/800/800",
    price: 7.5,
  },
  {
    title: "Watermelon",
    img: "https://picsum.photos/800/800",
    price: 2.2,
  },
  {
    title: "Lemon 2",
    img: "https://picsum.photos/800/800",
    price: 8.0,
  },
  {
    title: "Banana",
    img: "https://picsum.photos/800/800",
    price: 7.5,
  },
  {
    title: "Watermelon",
    img: "https://picsum.photos/800/800",
    price: 2.2,
  },
];

export default function Products() {
  const [list, setList] = useState<Product[]>(listData);

  const handleSortButton = () => {
    setList([...list].sort((a: Product, b: Product) => a.price - b.price));
  };

  return (
    
    <div className="flex gap-4">
    <div className="sticky z-10 left-0 top-16 h-48 w-24 flex items-center justify-center">
      Hi
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <ProductCards list={list} />
    </div>
  </div>
  
  );
}
