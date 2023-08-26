import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Playback from "../pages/Playback";
import Schedule from "../pages/Schedule";
import Schedule2 from "../pages/Schedule2";
import Header from "./Header";
const MainSection = () => {
  return (
    <section className="w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/playback" element={<Playback />} />
        <Route path="/scheduled" element={<Schedule2 />} />
        <Route path="/preparation" element={<h1>Preperation</h1>} />
        <Route path="/account" element={<h1>account</h1>} />
      </Routes>
    </section>
  );
};

export default MainSection;
