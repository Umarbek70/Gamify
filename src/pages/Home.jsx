import { useSelector } from "react-redux";
import { FaStar, FaTasks, FaChartLine } from "react-icons/fa";
import PurpleLineChart from "../charts/LineChart";
import React from "react";
import PurpleBarChart from "../charts/BarChart";
import { lineData, barData } from "../charts/chartData";

const Home = () => {
  const projects = useSelector((state) => state.projects.list);

  return (
    <div className="w-full h-full p-6 text-purple-200">

      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-[#1c1327] border border-purple-800 p-5 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-purple-700/20 rounded-lg">
            <FaTasks size={24} className="text-purple-300" />
          </div>
          <div>
            <p className="text-sm text-purple-400">Total Projects</p>
            <h3 className="text-xl font-semibold">{projects.length}</h3>
          </div>
        </div>

        <div className="bg-[#1c1327] border border-purple-800 p-5 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-purple-700/20 rounded-lg">
            <FaStar size={24} className="text-purple-300" />
          </div>
          <div>
            <p className="text-sm text-purple-400">Completed Tasks</p>
            <h3 className="text-xl font-semibold">42</h3>
          </div>
        </div>

        <div className="bg-[#1c1327] border border-purple-800 p-5 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-purple-700/20 rounded-lg">
            <FaChartLine size={24} className="text-purple-300" />
          </div>
          <div>
            <p className="text-sm text-purple-400">Total XP</p>
            <h3 className="text-xl font-semibold">950 XP</h3>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <PurpleLineChart data={lineData} />
        <PurpleBarChart data={barData} />
      </div>

      {/* Recent Projects */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Recent Projects</h2>

        {projects.length === 0 ? (
          <p className="text-purple-400">Hozircha project yo‘q.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="bg-[#1d1528] border border-purple-800 rounded-xl p-4"
              >
                <h3 className="text-purple-200 font-semibold text-lg">{p.title}</h3>
                <p className="text-purple-400 text-sm mt-1">{p.description}</p>
                <div className="flex justify-between text-xs text-purple-400 mt-4">
                  <span>Tasks: {p.tasks}</span>
                  <span>XP: {p.xp}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
