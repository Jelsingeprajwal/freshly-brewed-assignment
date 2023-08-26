import React from "react";
import "../index.css";
import Bell from "../assets/bell.svg";
const Header = () => {
  return (
    <header className="h-16 p-1 flex justify-end items-center gap-9 shadow-lg border-b-2 border-gray-300">
      <div className="cursor-pointer">
        <img src={Bell} alt="Bell" />
      </div>
      <button className="w-[182px] u-btn  bg-black text-white rounded-[100px] flex items-center justify-end gap-3">
        User Profile
        <div className="w-11 h-11 rounded-full m-1 bg-gray-500"> </div>
      </button>
    </header>
  );
};

export default Header;
