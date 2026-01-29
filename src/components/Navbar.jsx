import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdRestaurantMenu } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";

const Navbar = () => {
  const [open, SetOpen] = useState(false);

  const changemenu = (e) => {
    e.preventDefault();
    SetOpen(!open);
  };
  return (
    <div className="flex items-center border-b border-gray-300 justify-between max-w-[1240px] mx-auto h-24 px-6 lg:px-12">
      <SiCoffeescript color='#57595B' size={30} className=""/>

      {/* <h1 className="text-2xl text-[#57595B] uppercase">Bean & Barrel</h1> */}
      <ul className="hidden md:flex uppercase cursor-pointer">
        <li className="p-4 text-[#57595B]">Home</li>
        <li className="p-4 text-[#57595B]">Menu</li>
        <li className="p-4 text-[#57595B]">About</li>
        <li className="p-4 text-[#57595B]">Contact</li>
      </ul>
      <div onClick={changemenu} className="block md:hidden">
        {open ? (
          <MdRestaurantMenu color="#452829" size={25} />
        ) : (
          <FiMenu color="#452829" size={25} />
        )}
      </div>
      <div
        className={`
          fixed top-0 left-0 h-full w-[70%] bg-[#000300] border-r border-gray-800 transform transition-transform ease-in-out duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="w-full uppercase mt-20 cursor-pointer">
          <li className="py-2 px-4 text-[#57595B] border-b border-gray-400">
            Home
          </li>
          <li className="py-2 px-4 text-[#57595B] border-b border-gray-400">
            Menu
          </li>
          <li className="py-2 px-4 text-[#57595B] border-b border-gray-400">
            About
          </li>
          <li className="py-2 px-4 text-[#57595B]">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
