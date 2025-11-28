import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
