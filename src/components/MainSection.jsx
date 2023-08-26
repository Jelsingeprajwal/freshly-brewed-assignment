import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Playback from "../pages/Playback";
import Schedule from "../pages/Schedule";
import Schedule2 from "../pages/Schedule2";
import Header from "./Header";
const MainSection = () => {
  return (
    <section className="w-full ml-[240px] z-10">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/playback" element={<Playback />} />
        <Route path="/scheduled" element={<Schedule2 />} />
      </Routes>
    </section>
  );
};

export default MainSection;
