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
import albums from "../assets/albums-10.jpg";

const Menu = () => {
  const menus = [
    { image: albums, name: "Espresso", category: "coffee", price: 2.5 },
    { image: albums, name: "Cappuccino", category: "coffee", price: 3.2 },
    { image: albums, name: "Latte", category: "coffee", price: 3.5 },
    { image: albums, name: "Orange Juice", category: "juice", price: 4.0 },
    { image: albums, name: "Mango Juice", category: "juice", price: 4.5 },
    { image: albums, name: "Pineapple Juice", category: "juice", price: 4.2 },
  ];

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-5xl md:text-4xl py-10 uppercase font-bold text-[#57595B]">
        Menu Lists
      </h1>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:grid-cols-4 gap-6">
        {menus.map((menu) => (
          <div className="px-3">
            <div className="w-full h-64 overfow-hidden rounded-lg">
              <img
                src={menu.image}
                alt="Cappuccino"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 flex justify-between">
              <span>{menu.name}</span>
              <span>$ {menu.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
