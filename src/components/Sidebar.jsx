import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Gamepad2, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-6">Gamify</h1>

      <NavLink
        to="/"
        className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
      >
        <Home size={20} /> Home
      </NavLink>

      <NavLink
        to="/games"
        className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
      >
        <Gamepad2 size={20} /> Games
      </NavLink>

      <NavLink
        to="/profile"
        className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
      >
        <User size={20} /> Profile
      </NavLink>
    </div>
  );
};

export default Sidebar;
