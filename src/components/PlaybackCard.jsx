import React from "react";
import Play from "../assets/play.svg";
import Trash from "../assets/Trash.svg";
const PlaybackCard = () => {
  return (
    <div className="rounded-[10px] border border-[#A5A5A5] py-6 pl-2 pr-8 flex gap-5 ">
      <div
        className="w-[182px] h-[94px] bg-black cursor-pointer
      relative text-white rounded-xl flex justify-center items-center"
      >
        <img src={Play} alt="Play" />
        <span className="text-sm  font-semibold absolute bottom-1  right-3">
          20:20
        </span>
      </div>
      <div className="flex justify-between items-start w-full ">
        <div>
          <h1 className="text-2xl">Recorded Interview 1</h1>
          <h1 className="text-xl text-gray-500 mt-10">21-12-23 19:18</h1>
        </div>
        <button>
          <img src={Trash} alt="Trash" />
        </button>
      </div>
    </div>
  );
};

export default PlaybackCard;
