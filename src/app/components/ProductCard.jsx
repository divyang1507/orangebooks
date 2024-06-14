import React from "react";
import { bookdata } from "../data.js";
import Image from "next/image.js";
import { FaRegStar, FaArrowRight } from "react-icons/fa6";

const ProductCard = () => {
  // console.log(bookdata);
  const data = bookdata;
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto w-[90%]">
          <div className="flex flex-wrap -m-4 justify-between">
            {data.map((e) => (
              <div key={e.id} className="p-4 flex w-[380px]">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {/* <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  /> */}
           <div className="flex items-center justify-center p-4 pb-0 rounded-lg overflow-hidden">
           {e.image ? (
                    <Image className="rounded-lg"
                      src={e.image}
                      height={439}
                      width={320}
                      alt={e.bookname}
                    />
                  ) : (
                    <Image
                      src="/Heroimg.png"
                      height={740}
                      width={540}
                      alt={e.bookname}
                    />
                  )}
           </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Book
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {e.bookname}
                    </h1>
                    <p className="leading-relaxed mb-3 line-clamp-2">{e.Description}</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex gap-2 justify-center items-center md:mb-2 lg:mb-0">
                        Learn More
                        <FaArrowRight />
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 justify-center">
                        <span className="text-lg text-orange-500">
                          {" "}
                          <FaRegStar />
                        </span>
                        <span> {e.rating}</span>
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        {e.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
