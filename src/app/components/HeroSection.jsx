import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto lg:flex-row px-5 py-5 pt-8 flex flex-col-reverse items-center w-[90%]">
          <div className="lg:flex-grow md:w-[90%] md:justify-center lg:items-start lg:pr-24 md:pr-0 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
              Nurturing Curious Minds,
              <br /> One Page at a Time
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
              Welcome to Orange Book Publication Where Imagination Blossoms! We
              are one-stop solution htmlFor your child. We provide best colorful
              books with pictures which helps chlidren to learn new things
              easily
            </p>

            <div className="flex flex-col gap-2 item-center justify-center lg:items-start">
              <div className="flex gap-3 items-center border-2 border-orange-500 p-1 pr-6 rounded-lg ">
                <Image
                  src="/BestSellerBadge.png"
                  height={41}
                  width={96}
                  alt="badge"
                />
                <div className="font-semibold text-center">
                  81,000+ <br /> Copies Sold
                </div>
              </div>
              <div className="flex items-center justify-center">
                {" "}
                <button className="bg-orange-500 font-semibold text-white py-3 px-6 rounded-lg items-center hover:bg-orange-200 focus:outline-none">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="scale-x-[-1]"
              src="/Kids reading (1).gif"
              width={1000}
              height={1000}
              alt="OrangeBookHeroImage"
            />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
