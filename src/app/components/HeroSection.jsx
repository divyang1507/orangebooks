"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from 'react';


const HeroSection = () => {



  return (
    <>
      <section className="text-gray-600 body-font">
        <motion.div
          initial={{ opacity: 0 , y: 20}}
          whileInView={{ opacity: 1 }}
          className="container mx-auto lg:flex-row px-5 py-5 pt-8 flex flex-col-reverse items-center w-[90%]"
        >
          <div className=" md:w-[90%] md:justify-center lg:items-start lg:pr-24 md:pr-0 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-gray-900 text-2xl">Welcome to</div>
            <div className="lg:text-5xl text-3xl mb-4 tracking-wider font-extrabold text-orange-500">
              Orange Book Publication
            </div>
            <div className="lg:text-5xl text-3xl leading-4 font-semibold tracking-wider">
              Learn Forever
            </div>
            <p className="mb-8 mt-8 text-lg leading-relaxed">
              We are one-stop solution for your child. We provide best colorful
              books with pictures which helps chlidren to learn new things
              easily
            </p>

            <div className="flex flex-col gap-2 item-center justify-center lg:items-start">
              <div className="flex gap-3 items-center border-2 border-orange-500 p-1 pr-6 rounded-lg ">
                <Image
                  src="/BestSellerBadge.png"
                  height={87 * 0.75}
                  width={149 * 0.75}
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
              src="/KidsReading.gif"
              width={800}
              height={800}
              layout="responsive"
              alt="OrangeBookHeroImage"
              unoptimized
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
