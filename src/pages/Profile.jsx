import { Edit, Settings, LogOut, User } from "lucide-react";
import React from "react";

export default function Profile() {
  return (
    <div className="w-full min-h-screen p-6 text-white bg-[#0f0f0f]">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#181818] rounded-xl p-6 flex flex-col items-center shadow-lg">
          <img
            src="https://i.pravatar.cc/200"
            className="w-28 h-28 rounded-full border border-gray-700"
          />
          <h2 className="text-xl font-semibold mt-4">Umar Gamify</h2>
          <p className="text-gray-400 text-sm">Pro Player • Level 12</p>

          <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            <Edit size={18} />
            Edit Profile
          </button>
        </div>

        {/* MIDDLE CARD */}
        <div className="bg-[#181818] rounded-xl p-6 shadow-lg md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Stats Overview</h3>

          <div className="space-y-4">

            {/* XP */}
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>XP</span>
                <span>650 / 1000</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-full">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Achievements</span>
                <span>12 / 20</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-full">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>

            {/* Games Completed */}
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Games Completed</span>
                <span>8 / 12</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-full">
                <div className="bg-purple-500 h-3 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* SETTINGS SECTION */}
      <div className="bg-[#181818] rounded-xl p-6 mt-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-3 bg-[#222] rounded-lg hover:bg-[#2a2a2a] transition">
            <Settings size={20} />
            Account Settings
          </button>

          <button className="w-full flex items-center gap-3 p-3 bg-[#222] rounded-lg hover:bg-[#2a2a2a] transition">
            <User size={20} />
            Privacy
          </button>

          <button className="w-full flex items-center gap-3 p-3 bg-red-600 rounded-lg hover:bg-red-700 transition">
            <LogOut size={20} />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
