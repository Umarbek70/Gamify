import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaCity, FaDragon, FaTree, FaMedkit, FaChartLine } from "react-icons/fa";

/**
 * Games.jsx
 * - Minimal, self-contained mini-demos for each gamification project.
 * - Requires: react, axios, recharts, react-icons, tailwindcss.
 *
 * Paste into: src/pages/Games.jsx
 */

const gamesMeta = [
  { id: "city", title: "City Builder", icon: <FaCity /> },
  { id: "rpg", title: "RPG Quest Manager", icon: <FaDragon /> },
  { id: "farm", title: "Farm Manager", icon: <FaTree /> },
  { id: "tama", title: "Tamagotchi", icon: <FaMedkit /> },
  { id: "stock", title: "Stock Trading Simulator", icon: <FaChartLine /> },
];

export default function Games() {
  const [active, setActive] = useState("city");

  return (
    <div className="p-6 text-purple-200 min-h-[80vh]">
      <h1 className="text-2xl font-bold mb-4">Mini Games Hub</h1>

      <div className="flex gap-6">
        {/* Sidebar tabs */}
        <aside className="w-56 space-y-3">
          {gamesMeta.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition ${
                active === g.id
                  ? "bg-purple-700/30 border border-purple-500"
                  : "hover:bg-white/5"
              }`}
            >
              <span className="text-xl">{g.icon}</span>
              <div>
                <div className="font-semibold">{g.title}</div>
                <div className="text-xs text-purple-300/80">Demo</div>
              </div>
            </button>
          ))}
        </aside>

        {/* Active panel */}
        <main className="flex-1">
          <div className="bg-[#170724]/80 border border-purple-800 rounded-2xl p-6 shadow-lg">
            {active === "city" && <CityBuilderDemo />}
            {active === "rpg" && <RPGDemo />}
            {active === "farm" && <FarmDemo />}
            {active === "tama" && <TamagotchiDemo />}
            {active === "stock" && <StockSimDemo />}
          </div>
        </main>
      </div>
    </div>
  );
}

/* --------------------- City Builder --------------------- */
function CityBuilderDemo() {
  const [buildings, setBuildings] = useState([
    { id: 1, name: "House", income: 5 },
    { id: 2, name: "Shop", income: 12 },
  ]);
  const [money, setMoney] = useState(100);
  const [name, setName] = useState("");
  const [income, setIncome] = useState(5);

  // passive money from buildings every 5s
  useEffect(() => {
    const t = setInterval(() => {
      const total = buildings.reduce((s, b) => s + b.income, 0);
      setMoney((m) => m + total);
    }, 5000);
    return () => clearInterval(t);
  }, [buildings]);

  const addBuilding = () => {
    if (!name) return;
    const id = Date.now();
    setBuildings((b) => [...b, { id, name, income: Number(income) }]);
    setName("");
    setIncome(5);
  };

  const removeBuilding = (id) => {
    setBuildings((b) => b.filter((x) => x.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">City Builder (mini)</h2>
      <p className="text-sm text-purple-300/80 mb-4">Buildings generate income passively.</p>

      <div className="flex gap-6">
        <div className="w-2/3">
          <div className="mb-3 text-purple-100">Money: <span className="font-bold">{money}</span> 💰</div>

          <div className="grid gap-3">
            {buildings.map((b) => (
              <div key={b.id} className="flex items-center justify-between bg-[#1b1225] p-3 rounded-lg border border-purple-800">
                <div>
                  <div className="font-semibold">{b.name}</div>
                  <div className="text-sm text-purple-300/80">Income: {b.income}/5s</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs rounded bg-white/6" onClick={() => setMoney(m => m + b.income)}>Collect</button>
                  <button className="px-3 py-1 text-xs rounded bg-red-600/40" onClick={() => removeBuilding(b.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/3">
          <div className="p-4 bg-[#1a1124] rounded-lg border border-purple-800">
            <h4 className="font-semibold mb-2">Add Building</h4>
            <input className="w-full p-2 mb-2 rounded bg-black/40" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input className="w-full p-2 mb-3 rounded bg-black/40" type="number" value={income} onChange={e => setIncome(e.target.value)} />
            <button onClick={addBuilding} className="w-full py-2 rounded bg-purple-600">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------- RPG Quest Manager --------------------- */
function RPGDemo() {
  const [inventory, setInventory] = useState(["Wooden Sword"]);
  const [item, setItem] = useState("");
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(20);
  const xpNeeded = level * 100;

  const addItem = () => {
    if (!item) return;
    setInventory((s) => [...s, item]);
    setItem("");
  };

  const gainXP = (amount) => {
    setXp((cur) => {
      const total = cur + amount;
      if (total >= xpNeeded) {
        setLevel((l) => l + 1);
        return total - xpNeeded;
      }
      return total;
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">RPG Quest Manager (mini)</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#1b1225] p-4 rounded-lg border border-purple-800">
          <div className="mb-3">
            <div className="text-sm text-purple-300">Level</div>
            <div className="text-2xl font-bold">{level}</div>
          </div>

          <div>
            <div className="text-sm text-purple-300">XP</div>
            <div className="w-full bg-black/30 h-3 rounded mt-2 overflow-hidden">
              <div style={{ width: `${(xp / xpNeeded) * 100}%` }} className="h-3 bg-purple-500"></div>
            </div>
            <div className="text-xs text-purple-300 mt-1">{xp} / {xpNeeded} XP</div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 rounded bg-purple-600" onClick={() => gainXP(30)}>Complete Quest (+30)</button>
              <button className="px-3 py-1 rounded bg-white/6" onClick={() => gainXP(10)}>Small Task (+10)</button>
            </div>
          </div>
        </div>

        <div className="bg-[#1b1225] p-4 rounded-lg border border-purple-800">
          <h4 className="font-semibold mb-2">Inventory</h4>
          <div className="mb-3">
            {inventory.map((it, i) => (
              <div key={i} className="text-sm text-purple-200/90">{it}</div>
            ))}
          </div>

          <div className="flex gap-2">
            <input value={item} onChange={e => setItem(e.target.value)} className="flex-1 p-2 rounded bg-black/30" placeholder="New item" />
            <button onClick={addItem} className="px-3 rounded bg-purple-600">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------- Farm Manager --------------------- */
function FarmDemo() {
  const [plots, setPlots] = useState([
    // each plot: {id, seed, stage 0..3, plantedAt}
    { id: 1, seed: null, stage: 0, plantedAt: null },
    { id: 2, seed: null, stage: 0, plantedAt: null },
    { id: 3, seed: null, stage: 0, plantedAt: null },
  ]);
  const growthInterval = 4000; // 4s per stage in demo

  useEffect(() => {
    const t = setInterval(() => {
      setPlots((ps) =>
        ps.map((p) => {
          if (!p.seed) return p;
          if (p.stage >= 3) return p;
          const elapsed = Date.now() - p.plantedAt;
          const stage = Math.min(3, Math.floor(elapsed / growthInterval));
          return { ...p, stage };
        })
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const plantSeed = (id, seed) => {
    setPlots((ps) => ps.map((p) => (p.id === id ? { ...p, seed, stage: 0, plantedAt: Date.now() } : p)));
  };

  const harvest = (id) => {
    setPlots((ps) => ps.map((p) => (p.id === id ? { id: p.id, seed: null, stage: 0, plantedAt: null } : p)));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Farm Manager (mini)</h2>
      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-3">
          {plots.map((p) => (
            <div key={p.id} className="bg-[#1b1225] rounded-lg p-3 border border-purple-800 text-center">
              <div className="font-semibold">Plot #{p.id}</div>
              <div className="text-sm text-purple-300 mt-2">
                {p.seed ? `${p.seed} (stage ${p.stage})` : "Empty"}
              </div>

              <div className="mt-3 flex gap-2 justify-center">
                {!p.seed ? (
                  <>
                    <button onClick={() => plantSeed(p.id, "Wheat")} className="px-3 py-1 rounded bg-purple-600 text-xs">Plant Wheat</button>
                    <button onClick={() => plantSeed(p.id, "Corn")} className="px-3 py-1 rounded bg-white/6 text-xs">Plant Corn</button>
                  </>
                ) : p.stage >= 3 ? (
                  <button onClick={() => harvest(p.id)} className="px-3 py-1 rounded bg-yellow-500 text-xs">Harvest</button>
                ) : (
                  <div className="text-xs text-purple-300">Growing...</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm text-purple-300">Tip: In this demo each stage advances every ~4s.</div>
      </div>
    </div>
  );
}

/* --------------------- Tamagotchi --------------------- */
function TamagotchiDemo() {
  const [pet, setPet] = useState({ hunger: 50, happiness: 60, health: 80, energy: 70 });
  const tickRef = useRef();

  useEffect(() => {
    tickRef.current = setInterval(() => {
      setPet((p) => {
        let { hunger, happiness, health, energy } = p;
        hunger = Math.min(100, hunger + 2); // gets hungrier
        happiness = Math.max(0, happiness - 1);
        energy = Math.max(0, energy - 1);
        if (hunger > 80) health = Math.max(0, health - 2);
        return { hunger, happiness, health, energy };
      });
    }, 3000);
    return () => clearInterval(tickRef.current);
  }, []);

  const feed = () => setPet((p) => ({ ...p, hunger: Math.max(0, p.hunger - 20), happiness: Math.min(100, p.happiness + 5) }));
  const play = () => setPet((p) => ({ ...p, happiness: Math.min(100, p.happiness + 15), energy: Math.max(0, p.energy - 10) }));
  const heal = () => setPet((p) => ({ ...p, health: Math.min(100, p.health + 20) }));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Tamagotchi (mini)</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#1b1225] p-4 rounded-lg border border-purple-800">
          <div className="text-sm text-purple-300">Hunger</div>
          <Progress val={pet.hunger} color="bg-yellow-400" />
          <div className="text-sm text-purple-300 mt-2">Happiness</div>
          <Progress val={pet.happiness} color="bg-pink-500" />
          <div className="text-sm text-purple-300 mt-2">Health</div>
          <Progress val={pet.health} color="bg-green-400" />
          <div className="text-sm text-purple-300 mt-2">Energy</div>
          <Progress val={pet.energy} color="bg-blue-400" />
        </div>

        <div className="bg-[#1b1225] p-4 rounded-lg border border-purple-800 flex flex-col gap-3">
          <div className="font-semibold">Actions</div>
          <div className="flex gap-2">
            <button onClick={feed} className="px-3 py-2 rounded bg-yellow-500">Feed</button>
            <button onClick={play} className="px-3 py-2 rounded bg-pink-500">Play</button>
            <button onClick={heal} className="px-3 py-2 rounded bg-green-500">Heal</button>
          </div>
          <div className="text-xs text-purple-300 mt-3">Tip: Pet stats change over time. Keep it healthy!</div>
        </div>
      </div>
    </div>
  );
}
function Progress({ val = 0, color = "bg-purple-500" }) {
  return (
    <div className="w-full bg-black/30 rounded h-4 mt-1 overflow-hidden">
      <div style={{ width: `${val}%` }} className={`h-4 ${color}`}></div>
    </div>
  );
}

/* --------------------- Stock Simulator --------------------- */
function StockSimDemo() {
  const [data, setData] = useState([
    { name: "T1", value: 100 },
    { name: "T2", value: 102 },
    { name: "T3", value: 101 },
    { name: "T4", value: 110 },
    { name: "T5", value: 108 },
  ]);
  const [symbol, setSymbol] = useState("AAPL");
  const [loading, setLoading] = useState(false);

  // mock: small random walk tick every 3s
  useEffect(() => {
    const t = setInterval(() => {
      setData((d) => {
        const last = d[d.length - 1].value;
        const next = Math.max(1, Math.round((last + (Math.random() - 0.5) * 4) * 100) / 100);
        const name = `T${d.length + 1}`;
        const nd = [...d.slice(-20), { name, value: next }];
        return nd;
      });
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const fetchLive = async () => {
    setLoading(true);
    try {
      // Example: you'd replace this with a real endpoint (Yahoo Finance / Alpha Vantage / Finnhub)
      // const res = await axios.get(`https://api.example.com/price?symbol=${symbol}`);
      // parse and setData(...)
      // For demo we just push a new random point
      setTimeout(() => {
        setData((d) => [...d, { name: `T${d.length + 1}`, value: Math.round((100 + Math.random() * 50) * 100) / 100 }]);
        setLoading(false);
      }, 800);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Stock Trading Simulator (demo)</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#1b1225] p-4 rounded-lg border border-purple-800">
          <div className="mb-3 text-sm text-purple-300">Symbol</div>
          <div className="flex gap-2">
            <input value={symbol} onChange={e => setSymbol(e.target.value.toUpperCase())} className="flex-1 p-2 rounded bg-black/30" />
            <button onClick={fetchLive} className="px-3 rounded bg-purple-600" disabled={loading}>{loading ? "..." : "Fetch live"}</button>
          </div>

          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#2b1b3a" />
                <XAxis dataKey="name" tick={{ fill: "#d6bcfa" }} />
                <YAxis tick={{ fill: "#d6bcfa" }} />
                <Tooltip contentStyle={{ background: "#120417", border: "1px solid rgba(255,255,255,0.04)" }} />
                <Line type="monotone" dataKey="value" stroke="#c084fc" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1b1225] p-4 rounded-lg border border-purple-800">
          <h4 className="font-semibold mb-2">Portfolio (demo)</h4>
          <div className="text-sm text-purple-300">Cash: <span className="font-semibold">10,000</span></div>
          <div className="text-sm text-purple-300 mt-2">Positions:</div>
          <ul className="mt-2 space-y-2 text-purple-200/90">
            <li>AAPL — 10 shares — avg 120.00</li>
            <li>TSLA — 3 shares — avg 210.50</li>
          </ul>
          <div className="mt-4 text-xs text-purple-300">Note: For real prices, integrate a finance API (Alpha Vantage, Yahoo Finance unofficial, Finnhub, etc.)</div>
        </div>
      </div>
    </div>
  );
}
