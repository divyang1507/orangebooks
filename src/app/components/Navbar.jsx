"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [active, setactive] = useState(false);
  const menu = () => {
    setactive((prevstate) => !prevstate);
  };

  return (
    <header className="text-black body-font pt-5 w-[90%] mx-auto sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex  pt-5 bg-orange-200 rounded-full flex-wrap p-5 items-center justify-between">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-black  hover:cursor-pointer"
        >
          <Image
            src="/LogoImage.png"
            width={56}
            height={56}
            alt="OrangeBookPublicationLogo"
          />
          <span className="ml-3 text-xl font-semibold">
            Orange Book <br /> Publication
          </span>
        </Link>
        <nav className="md:ml-auto md:hidden hidden lg:flex lg:flex-wrap font-semibold items-center text-base justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-black hover:drop-shadow hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="mr-5 hover:text-black hover:drop-shadow hover:cursor-pointer"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="mr-5 hover:text-black hover:drop-shadow hover:cursor-pointer"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="mr-5 hover:text-black hover:drop-shadow hover:cursor-pointer"
          >
            About
          </Link>
        </nav>
        <div className="pr-4">
          <motion.button
            className="flex items-center justify-center text-3xl lg:hidden"
            onClick={menu}
          >
            {!active ? (
              <motion.div
              initial={false}
              animate={{ rotate: !active ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaBars />
              </motion.div>
            ) : (
              <MdClose />
            )}
          </motion.button>
        </div>
      </div>
      <motion.nav
        initial={false}
        animate={{ opacity: active ? 1 : 0, x: active ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`md:ml-auto absolute z-10 w-full p-4 rounded-3xl lg:hidden flex-col items-center text-base justify-center gap-5 bg-orange-200 mx-auto mt-4 ${
          active ? "flex" : "hidden"
        }`}
      >
        <Link
          href="/"
          className="mr-5 hover:text-gray-600 hover:cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="mr-5 hover:text-gray-600 hover:cursor-pointer"
        >
          Products
        </Link>
        <Link
          href="/contact"
          className="mr-5 hover:text-gray-600 hover:cursor-pointer"
        >
          Contact
        </Link>
        {/* <Link
          href="/about"
          className="mr-5 hover:text-gray-600 hover:cursor-pointer"
        >
          About
        </Link> */}
      </motion.nav>
    </header>
  );
};

export default Navbar;
