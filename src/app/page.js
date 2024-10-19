'use client'
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Features from "./components/Features";
import Contact from "./components/Contact";

import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from "react";



export default   function Home() {
  

  async function getData() {
    try {
      const querySnapshot = await getDocs(collection(db, 'books'));
      if (!querySnapshot.empty) {
        console.log('Connection to Firestore is successful. Data fetched:', querySnapshot.docs.map(doc => doc.data()));
      } else {
        console.log('Connected to Firestore, but the collection is empty.');
      }
    } catch (error) {
      console.error('Error fetching data from Firestore: ', error);
    }
  }
  
  getData();




  
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
