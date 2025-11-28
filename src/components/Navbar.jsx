
import { FaBell, FaUser } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#150425] border-b border-purple-700 text-purple-200 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Gamify Dashboard</h1>

      <div className="flex items-center gap-6 text-xl">
        <FaBell className="cursor-pointer hover:text-white duration-150" />
        <FaUser className="cursor-pointer hover:text-white duration-150" />
      </div>
    </div>
  );
};

export default Navbar;
