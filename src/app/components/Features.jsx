import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdColorLens, MdVerified } from "react-icons/md";

const Features = () => {
  return (
    <>
      <section className="text-gray-600 body-font  w-[90%] mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-orange-500 mb-4">
              Why Choose us?
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              At Orange Book Publication, we believe that every child deserves
              captivating stories that ignite their creativity, broaden their
              horizons, and spark a lifelong love for reading.
              {/* Our team of
              passionate authors, illustrators, and designers work tirelessly to
              craft enchanting tales that transport young readers to magical
              worlds, teach valuable lessons, and inspire wonder. */}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex sm:-m-4 gap-4 lg:flex-row flex-col -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center ">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                <FaCrown className="text-4xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Trusted Legacy:
                </h2>
                <p className="leading-relaxed text-base">
                  With several years of experience, we are India’s most trusted
                  children’s book publisher. Authors seeking to self-publish
                  their vibrant stories find a home with us.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center ">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                <MdColorLens className="text-4xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Colorful Creations
                </h2>
                <p className="leading-relaxed text-base">
                  Children are drawn to color and imagery. Our team of talented
                  illustrators and designers ensures that your book’s cover
                  design and interior illustrations come alive with vivid hues
                  and playful characters.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 flex flex-col text-center items-center ">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                <MdVerified className="text-4xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Quality Assurance
                </h2>
                <p className="leading-relaxed text-base">
                  Before printing, our meticulous reviewers proofread your
                  manuscript, ensuring a flawless final copy. We take pride in
                  nurturing emerging authors and helping them establish
                  themselves in the world of children’s literature.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </>
  );
};

export default Features;
