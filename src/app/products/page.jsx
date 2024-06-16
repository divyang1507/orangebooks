import React from "react";
import ProductCard from "../components/ProductCard";

export const metadata = {
  title: "Products | Orange Book Publication",
  description: "Orange Book Publication creates best books for your child",
};


const page = () => {
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default page;
