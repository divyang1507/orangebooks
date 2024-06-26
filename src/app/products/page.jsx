import React from "react";
import ProductCard from "../components/ProductCard";
import { bookdata } from "../data.js";

export const metadata = {
  title: "Products | Orange Book Publication",
  description: "Orange Book Publication creates best books for your child",
};

const data = bookdata;

const page = () => {
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default page;
