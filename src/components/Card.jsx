import React from "react";
import cofee from "../assets/coffee.avif";
const Card = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-6 items-center">
      <div className="flex justify-center"> 
        <img className='size-100 rounded-2xl' src={cofee} alt="" />
      </div>

      <div className="flex flex-col justify-center px-0 py-6 border-gray-200 bg-gray-100rounded-1xl my-12">
        <p className="text-3xl uppercase p-4 text-[#57595B]">
          Thoughtful sourcing
        </p>
        <span className="text-1xl p-4 text-[#57595B] font-thin md:text-2xl">
          We started Ember & Bean because coffee shouldn’t be rushed or forgettable Every bean we serve is sourced from independent farms, roasted in small batches, and brewed with intention. No shortcuts. No burnt aftertaste. Just honest coffee, made the right way.
        </span>
      </div>
    </div>
  );
};

export default Card;
