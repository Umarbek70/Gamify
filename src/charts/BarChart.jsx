import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const PurpleBarChart = () => {
  const data = [
    { name: "Mon", uv: 30 },
    { name: "Tue", uv: 45 },
    { name: "Wed", uv: 28 },
    { name: "Thu", uv: 60 },
    { name: "Fri", uv: 38 },
  ];

  return (
    <div className="bg-[#1E1E2D] p-4 rounded-xl shadow-lg">
      <h2 className="text-white mb-4 font-semibold">Performance</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="uv" fill="#9b5cf6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PurpleBarChart;
