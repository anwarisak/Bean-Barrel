import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-95px] mx-auto h-screen justify-center items-center flex flex-col">
        <h1 className="uppercase md:text-3xl sm:text-lg my-2">
          More than <span className="text-[#E8D1C5]">coffee</span>  It’s a ritual.
        </h1>
        <span className="text-[#E8D1C5] md:text-2xl text-xs my-2 font-thin px-20 text-center">
          Small-batch roasted beans, crafted by baristas who actually care what
          ends up in your cup.
        </span>
        <ReactTyped
          className="uppercase md:text-2xl"
          strings={["Espresso", "steamed milk", "thick foam"]}
          typeSpeed={150}
          backSpeed={160}
          loop
        />
        <button className="bg-[#E8D1C5] my-5 md:px-20 px-8 py-3 rounded-lg text-[#452829] cursor-pointer hover:bg-[#57595B] hover:text-[#F3E8DF]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
