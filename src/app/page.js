"use client";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Features from "./components/Features";
import Contact from "./components/Contact";

import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const { book, setBook, getbook } = useContext(AppContext);

  useEffect(() => {
    const fetchbook = async () => {
      if (book.length == 0) {
        const data = await getbook();
        setBook(data);
      }
    };

    fetchbook();
  }, []);

  console.log("this is book", book);

  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <ProductCard />
        <Features />
        <Contact />
      </div>
    </>
  );
}
