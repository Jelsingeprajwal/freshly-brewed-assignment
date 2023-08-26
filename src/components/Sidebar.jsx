import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import Close from "../assets/x-solid.svg";

const Sidebar = () => {
  const handleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("hidden");
  };
  return (
    <section
      id="sidebar"
      className=" w-[240px] px-3  absolute lg:static lg:block hidden bg-white  flex-col items-center border-r-2 min-h-[100vh] border-gray-300  shadow-lg z-50"
    >
      <div className="font-semibold text-[32px] text-center ">
        <span>Leap</span>
        <span className="text-primaryBlue">Prep</span>
      </div>
      <div className="flex flex-col mt-16 gap-11 items-center  ">
        <NavLink
          to={"/"}
          className="w-[208px] rounded-[100px]  text-2xl font-medium h-12  flex justify-center items-center "
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/schedule"}
          className="w-[208px] rounded-[100px]  text-2xl font-medium h-12  flex justify-center items-center "
        >
          Schedule
        </NavLink>
        <NavLink
          to={"/preparation"}
          className="w-[208px] rounded-[100px]  text-2xl font-medium h-12  flex justify-center items-center "
        >
          Preparation
        </NavLink>
        <NavLink
          to={"/playback"}
          className="w-[208px] rounded-[100px]  text-2xl font-medium h-12  flex justify-center items-center "
        >
          Playback
        </NavLink>
        <NavLink
          to={"account"}
          className="w-[208px] rounded-[100px]  text-2xl font-medium h-12  flex justify-center items-center "
        >
          Account
        </NavLink>
      </div>
      <button
        onClick={handleSidebar}
        className="absolute top-4 -right-7 w-6 h-6  border border-black bg-white p-1 lg:hidden"
      >
        <img src={Close} alt="" />
      </button>
    </section>
  );
};

export default Sidebar;
