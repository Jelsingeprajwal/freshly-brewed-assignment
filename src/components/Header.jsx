import React from "react";
import "../index.css";
import Bell from "../assets/bell.svg";
import Menu from "../assets/bars-solid.svg";
const Header = () => {
  const handleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("hidden");
  };
  return (
    <header className="h-16 p-1 flex justify-between lg:justify-end items-center  shadow-lg border-b-2 border-gray-300 relative">
      <button className="w-6 lg:hidden " onClick={handleSidebar}>
        <img src={Menu} alt="" />
      </button>
      <div className="flex justify-between items-center gap-9">
        <div className="cursor-pointer">
          <img src={Bell} alt="Bell" />
        </div>
        <button className="w-[182px] u-btn  bg-black text-white rounded-[100px] flex items-center justify-end gap-3">
          User Profile
          <div className="w-11 h-11 rounded-full m-1 bg-gray-500"> </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
