import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [open, SetOpen] = useState(false);

  const changemenu = (e) => {
    e.preventDefault();
    SetOpen(!open);
  };
  return (
    <div className="flex items-center justify-between max-w-[1240px] mx-auto h-24 px-4 lg:px-8">
      <h1 className="text-2xl text-[#E8D1C5] uppercase">Bean & Barrel</h1>
      <ul className="hidden md:flex uppercase cursor-pointer">
        <li className="p-4 text-[#E8D1C5]">Home</li>
        <li className="p-4 text-[#E8D1C5]">Menu</li>
        <li className="p-4 text-[#E8D1C5]">About</li>
        <li className="p-4 text-[#E8D1C5]">Contact</li>
      </ul>
      <div onClick={changemenu} className="block md:hidden">
        {open ? (
          <MdRestaurantMenu color="white" size={25} />
        ) : (
          <FiMenu color="white" size={25} />
        )}
      </div>
      <div
        className={`
          fixed top-0 left-0 h-full w-[50%] bg-[#000300] border-r border-gray-800 transform transition-transform ease-in-out duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="w-full uppercase mt-20 cursor-pointer">
          <li className="py-2 px-4 text-[#E8D1C5] border-b border-gray-400">
            Home
          </li>
          <li className="py-2 px-4 text-[#E8D1C5] border-b border-gray-400">
            Menu
          </li>
          <li className="py-2 px-4 text-[#E8D1C5] border-b border-gray-400">
            About
          </li>
          <li className="py-2 px-4 text-[#E8D1C5]">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
