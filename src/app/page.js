import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Features from "./components/Features";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCard />
      <Features />
      <Contact />
    </>
  );
}
