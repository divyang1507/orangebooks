import React from "react";
import { bookdata } from "../../data.js";
import { FaRegStar, FaArrowRight } from "react-icons/fa6";
import Image from "next/image.js";

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

  return (
    <section className="text-gray-600 body-font overflow-hidden w-[90%] mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex itme-center justify-center flex-wrap">
          <div className="flex gap-5">
            <div className="flex flex-col justify-between items-center">
              <div>
                <Image
                  className="rounded"
                  src={book.image}
                  height={100}
                  width={80}
                  alt={book.name}
                />
              </div>
              <div>
                <Image
                  className="rounded"
                  src={book.image}
                  height={100}
                  width={80}
                  alt={book.name}
                />
              </div>
              <div>
                <Image
                  className="rounded"
                  src={book.image}
                  height={100}
                  width={80}
                  alt={book.name}
                />
              </div>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src={book.image}
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
              {book.bookname}
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
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{book.description}</p>

            <div className="flex">
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
