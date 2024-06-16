import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto w-[90%] flex flex-col items-center justify-center gap-7 my-12">
      <div>
        <Image
          src={"/Add to Cart.png"}
          height={350}
          width={350}
          alt="addtocart"
        />
      </div>
      <div className="text-4xl font-bold text-center">
        Add to cart and Buying Features <br/> are coming soon...
      </div>
    </div>
  );
};

export default page;
