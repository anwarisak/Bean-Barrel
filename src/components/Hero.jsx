import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-[#452829]">
      <div className="max-w-[800px] mt-[-0px] mx-auto h-screen justify-center items-center flex flex-col">
        <h1 className="uppercase md:text-5xl sm:text-3xl text-4xl font-bold text-center px-2">
          More than <span className="text-[#57595B]">coffee</span>  It’s a ritual.
        </h1>
        <span className="text-[#57595B] md:text-2xl text-3xl my-5 font-thin px-10 text-center">
          Small-batch roasted beans, crafted by baristas who actually care what
          ends up in your cup.
        </span>
        <ReactTyped
          className="uppercase md:text-2xl text-2xl"
          strings={["Espresso", "steamed milk", "thick foam"]}
          typeSpeed={200}
          backSpeed={160}
          loop
        />
        <button className="bg-[#E8D1C5] my-10 md:px-20 px-25 py-3 rounded-3xl text-[#452829] cursor-pointer hover:bg-[#57595B] hover:text-[#F3E8DF] uppercase">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
