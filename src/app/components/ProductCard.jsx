import React from "react";
import { bookdata } from "../data.js";
import Link from "next/link.js";
import BookCard from "./BookCard.jsx";

const ProductCard = () => {
  const data = bookdata;
  return (
    <>
      <section className="text-gray-600  body-font">
        <div className="container px-5 py-12 mx-auto w-[90%]">
          <div className="text-center text-orange-500 text-4xl font-bold mb-6">
            Our Products
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:auto-cols-auto grid-cols-1 justify-center items-start place-items-center -m-4">
            {/* <div className="flex flex-wrap md:flex-col lg:flex-row -m-4 lg:justify-between items-center"> */}
            {data.map((e) => (
              <div key={e.id}>
                <Link href={`/products/${e.slug}`}>
                  <BookCard
                    bookname={e.bookname}
                    price={e.price}
                    rating={e.rating}
                    review={e.review}
                    image={e.image}
                    description={e.description}
                    id={e.id}
                  />
                </Link>
                {/* <motion.div
                key={e.id}
                className="p-4 m-2 flex lg:min-w-[340x] transform transition duration-500 hover:scale-105"
              >
                <Link href={`/products/${e.slug}`}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 flex flex-col rounded-lg">
                    <div className="flex items-center justify-center rounded-lg relative">
                      {e.image ? (
                        <Image
                          className="object-cover relative rounded-lg w-80 h-96"
                          src={e.image[0]}
                          width={1240}
                          height={1754}
                          layout="responsive"
                          alt={e.bookname}
                        />
                      ) : (
                        <Image
                          src="/Heroimg.png"
                          height={840}
                          width={640}
                          alt={e.bookname}
                        />
                      )}
                    </div>
                    <div className="p-6 flex-col justify-between">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Book
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-2">
                        {e.bookname}
                      </h1>
                      <p className="leading-relaxed mb-3 line-clamp-2">
                        {e.description}
                      </p>

                      <div className="flex justify-between items-center ">
                        <div className="flex items-center text-indigo-500 gap-2 md:mb-2 lg:mb-0">
                          <div>Learn More</div>
                          <FaArrowRight />
                        </div>

                        <div className="flex justify-center items-center gap-1">
                          <FaRegStar className="text-lg text-orange-500" />
                          <div className="text-center inline-block align-baseline">
                            {e.rating}
                          </div>
                          <div className="text-gray-400 inline-block align-baseline">
                            ({e.review})
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
