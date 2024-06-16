"use client";
import React, { useState } from "react";

import { bookdata } from "../../data.js";
import { FaRegStar, FaArrowRight, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image.js";
import Link from "next/link.js";

const page = ({ params }) => {
  const slug = params.slug;
  const alldata = bookdata;
  const book = alldata
    .filter((data) => data.slug == slug)
    .map((data) => ({
      id: data.id,
      name: data.bookname,
      description: data.description,
      rating: data.rating,
      review: data.review,
      image: data.image,
      price: data.price,
    }))
    .reduce((book, data) => {
      book = data;
      return book;
    }, {});

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeImage, setActiveImage] = useState(book.image[0]);

  return (
    <section className="text-gray-600 body-font overflow-hidden w-[90%] mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex itme-center justify-center flex-wrap">
          <div className="flex flex-col-reverse lg:flex-row gap-5">
            <div className="flex lg:flex-col md:flex justify-between items-center">
              {book.image.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={80}
                  height={100}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${
                    activeImage === image
                      ? "active border-2 border-solid border-black"
                      : "opacity-70"
                  } rounded-sm hover:cursor-pointer`}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={activeImage}
                height={439}
                width={320}
                alt={book.name}
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Book
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {book.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center justify-center">
                <span className="flex items-center justify-center">
                  <FaRegStar />
                </span>
                <span className="text-gray-600 ml-2 flex ">
                  {book.rating} ({`${book.review}`} Reviews){" "}
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s text-xl gap-3">
                <FaFacebook />
                <FaXTwitter  />
              <Link href={'https://www.youtube.com/@orangebookpublication9051'}>
               <FaYoutube />
              </Link> 
              </span>
            </div>
            <ul className="leading-relaxed space-y-3">
              <li>Features of the book:</li>
              {book.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>

            <div className="flex mt-8">
              <span className="title-font font-medium text-2xl text-gray-900">
                Rs. {book.price}
              </span>
              <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export async function getStaticPaths() {
// const data = bookdata;

// const paths = data.map((book) => ({
//     params: { slug: book.slug },
//   }));

//   return { paths, fallback: true };
//    console.log(paths)
// }

// export async function getStaticProps({ params }) {

export default page;
