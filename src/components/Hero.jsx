import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-[#452829]">
      <div className="max-w-[800px] mt-[-30px] mx-auto h-screen justify-center items-center flex flex-col">
        <a
          href="https://wa.me/254741291110"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-green-500 px-4 py-2 rounded-2xl text-center my-4 text-white inline-block"
        >
          Order WhatsApp
        </a>
        <h1 className="uppercase md:text-5xl sm:text-3xl text-4xl font-bold text-center px-2">
          More than <span className="text-[#57595B]">coffee</span> It’s a
          ritual.
        </h1>
        <span className="text-[#57595B] md:text-2xl text-3xl my-5 font-thin px-10 text-center">
          Small-batch roasted beans, crafted by baristas who actually care what
          ends up in your cup
        </span>
        <ReactTyped
          className="uppercase md:text-2xl text-2xl"
          strings={["Espresso", "steamed milk", "thick foam"]}
          typeSpeed={200}
          backSpeed={160}
          loop
        />
        <button className="bg-[#452829] my-10 w-[90%] md:w-[30%] py-4 rounded-lg text-[#ffff] cursor-pointer uppercase">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
