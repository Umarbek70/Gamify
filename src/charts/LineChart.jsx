import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const PurpleLineChart = () => {
  const data = [
    { name: "Mon", uv: 40 },
    { name: "Tue", uv: 32 },
    { name: "Wed", uv: 45 },
    { name: "Thu", uv: 50 },
    { name: "Fri", uv: 38 },
  ];

  return (
    <div className="bg-[#1E1E2D] p-4 rounded-xl shadow-lg">
      <h2 className="text-white mb-4 font-semibold">Weekly Stats</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#9b5cf6"
            strokeWidth={3}
            dot={{ fill: "#9b5cf6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PurpleLineChart;
