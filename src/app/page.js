import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Features from "./components/Features";
import Contact from "./components/Contact";




export default function Home() {

  return (
    <>
      <div className="overflow-hidden">
        <HeroSection/>
        <ProductCard />
        <Features />
        <Contact  />
      </div>
    </>
  );
}
