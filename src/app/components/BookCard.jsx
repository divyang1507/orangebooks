"use client";
import React from "react";
import { bookdata } from "../data.js";
import { FaRegStar, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image.js";

const BookCard = ({
  id,
  image,
  bookname,
  description,
  rating,
  price,
  review,
}) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        key={id}
        className="p-4 m-2 flex h-full lg:min-w-[340x]"
      >
        <div className="h-full border-2 border-gray-200 border-opacity-60 flex flex-col rounded-lg">
          <div className="flex items-center justify-center rounded-lg relative">
            {image ? (
              <Image
                className="object-cover relative rounded-lg w-80 h-96"
                src={image[0]}
                width={1240}
                height={1754}
                layout="responsive"
                alt={bookname}
              />
            ) : (
              <Image
                src="/Heroimg.png"
                height={840}
                width={640}
                alt={bookname}
              />
            )}
          </div>
          <div className="p-6 flex-col justify-between">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Book
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-2">
              {bookname}
            </h1>
            <p className="leading-relaxed mb-3 line-clamp-2">{description}</p>

            <div className="flex justify-between items-center ">
              <div className="flex items-center text-indigo-500 gap-2 md:mb-2 lg:mb-0">
                <div>Learn More</div>
                <FaArrowRight />
              </div>

              <div className="flex justify-center items-center gap-1">
                <FaRegStar className="text-lg text-orange-500" />
                <div className="text-center inline-block align-baseline">
                  {rating}
                </div>
                <div className="text-gray-400 inline-block align-baseline">
                  ({review})
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BookCard;
