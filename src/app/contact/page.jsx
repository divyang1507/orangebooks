import React from "react";
import Contact from "../components/Contact";
import { Metadata } from 'next'

export const metadata  = {
  title: "Contact | Orange Book Publication",
  description: "Orange Book Publication creates best books for your child",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
