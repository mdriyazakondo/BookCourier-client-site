import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaCoins } from "react-icons/fa";

const topAssets = [
  {
    name: "Ethereum (ETH)",
    reward: "13.62%",
    change: "+0.25%",
    color: "purple",
  },
  { name: "BNB Chain", reward: "12.72%", change: "+5.67%", color: "yellow" },
  { name: "Polygon (Matic)", reward: "6.29%", change: "-1.89%", color: "pink" },
];

const chartData = [
  { name: "Jan", value: 3000 },
  { name: "Feb", value: 2500 },
  { name: "Mar", value: 2800 },
  { name: "Apr", value: 3200 },
  { name: "May", value: 2900 },
  { name: "Jun", value: 3500 },
  { name: "Jul", value: 4000 },
];

const Dashboard = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div
      className={
        darkTheme
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-gray-900 min-h-screen"
      }
    >
      <div className="p-6">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="mb-6 px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer"
        >
          {darkTheme ? "Switch to Light" : "Switch to Dark"}
        </button>

        {/* Top Staking Assets */}
        <h2 className="text-xl font-bold mb-4">Top Staking Assets</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {topAssets.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg border ${
                darkTheme
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{item.name}</span>
                <FaCoins />
              </div>
              <p className="text-2xl font-bold">{item.reward}</p>
              <p
                className={`mt-1 ${
                  item.change.includes("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {item.change}
              </p>
            </div>
          ))}
        </div>

        {/* Active Staking */}
        <div
          className={`p-6 rounded-lg shadow-lg border mb-8 ${
            darkTheme
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
          }`}
        >
          <h2 className="text-lg font-bold mb-2">Stake Avalance (AVAX)</h2>
          <p className="text-3xl font-bold mb-2">31.39686</p>
          <div className="flex gap-4 mb-4">
            <button className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 text-white cursor-pointer">
              Upgrade
            </button>
            <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-500 text-white cursor-pointer">
              Unstake
            </button>
          </div>

          {/* Chart */}
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={darkTheme ? "#555" : "#ccc"}
                />
                <XAxis dataKey="name" stroke={darkTheme ? "#fff" : "#000"} />
                <YAxis stroke={darkTheme ? "#fff" : "#000"} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
