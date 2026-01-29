import React from "react";
import coffee from "../assets/coffee.avif";
import cappauccino from "../assets/cappauccino1.jpg";
import juice1 from "../assets/juice1.jpg";
import juice2 from "../assets/juice2.jpg";
import juice3 from "../assets/juice3.jpg";
import juice4 from "../assets/juice4.jpg";
import juice5 from "../assets/juice5.jpg";
import juice6 from "../assets/juice6.jpg";
import juice7 from "../assets/juice7.jpg";

const Menu = () => {
  const juices = [
    { image: juice1, name: "juice1", price: 12.3 },
    { image: juice2, name: "juice2", price: 10 },
    { image: juice3, name: "juice3", price: 9.99 },
    { image: juice4, name: "juice4", price: 4.6 },
    { image: juice5, name: "juice5", price: 5 },
    { image: juice6, name: "juice6", price: 5.5 },
    { image: juice7, name: "juice7", price: 6.6 },
  ];
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-5xl md:text-4xl py-10 uppercase font-bold text-[#57595B]">
        Menu Lists
      </h1>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:grid-cols-3 gap-6">
        {juices.map((juice) => (
          <div className="px-3">
            <div className="w-full h-64 overfow-hidden rounded-lg">
              <img
                src={juice.image}
                alt="Cappuccino"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 flex justify-between">
              <span>Name: {juice.name}</span>
              <span>$ {juice.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
