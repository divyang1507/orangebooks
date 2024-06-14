"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [active, setactive] = useState(false);
  const menu = () => {
    setactive((prevstate) => !prevstate);
  };

  console.log(active);
  return (
    <header className="text-black body-font relative w-[90%] mx-auto">
      <div className="container mx-auto flex  mt-5 bg-orange-200 rounded-full flex-wrap p-5 items-center justify-between">
        <a className="flex title-font font-medium items-center text-black  hover:cursor-pointer">
          <Image
            src="/LogoImage.png"
            width={56}
            height={56}
            alt="OrangeBookPublicationLogo"
          />
          <span className="ml-3 text-xl font-semibold">
            Orange Book <br /> Publication
          </span>
        </a>
        <nav className="md:ml-auto md:hidden hidden lg:flex lg:flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">Home</a>
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">
            Products
          </a>
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">
            Contact
          </a>
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">About</a>
        </nav>
        <div className="pr-4">
          <button
            className="flex items-center justify-center text-3xl lg:hidden"
            onClick={menu}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <nav
        className={`md:ml-auto absolute  w-full p-4 rounded-3xl lg:hidden flex-col items-center text-base justify-center gap-5 bg-orange-200 mx-auto mt-4 ${
          active ? "flex" : "hidden"
        }`}
      >
        <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">Home</a>
        <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">
          Products
        </a>
        <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">Contact</a>
        <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">About</a>
      </nav>
    </header>
  );
};

export default Navbar;
