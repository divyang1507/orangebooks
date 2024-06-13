import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-black body-font w-[90%] mx-auto bg-orange-200 rounded-full mt-5">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0 hover:cursor-pointer">
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
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">Home</a>
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">
            Products
          </a>
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">
            Contact
          </a>
          <a className="mr-5 hover:text-gray-600 hover:cursor-pointer">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
