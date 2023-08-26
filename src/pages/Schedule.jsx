import React from "react";
import DatePicker from "../components/DatePicker";
import Sun from "../assets/Sun.svg";
import SunHorizon from "../assets/SunHorizon.svg";
import Moon from "../assets/Moon.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Schedule = () => {
  return (
    <section className="p-7 font-sans">
      <form>
        <div className=" flex flex-col gap-9">
          <label htmlFor="" className="text-2xl text-[#616161] ">
            Pick an appropriate slot
          </label>
          <div>
            <DatePicker />
          </div>
          <div className="text-2xl text-[#616161] mt-10">
            <h1>
              Showing Slots for{" "}
              <span className="text-black">12th July, 2023</span>
            </h1>
          </div>
          <div>
            <div className="flex gap-1 text-[#616161] text-xs items-center">
              <img src={Sun} alt="" />
              <span>Morning</span>
              <span className="text-black">3 slots</span>
            </div>
            <div className="flex gap-5 mt-5">
              <Button value={"11:00 AM"} />
              <Button value={"11:15 AM"} />
              <Button value={"11:45 AM"} />
            </div>
          </div>
          <div>
            <div className="flex gap-1 text-[#616161] text-xs items-center">
              <img src={SunHorizon} alt="" />
              <span>Afternoon</span>
              <span className="text-black">6 slots</span>
            </div>
            <div className="flex gap-5 mt-5 flex-wrap w-[450px] ">
              <Button value={"12:30 PM"} />
              <Button value={"12:45 PM"} />
              <Button value={"11:45 AM"} />
              <Button value={"01:15 PM"} />
              <Button value={"01:30 PM"} />
              <Button value={"01:45 PM"} />
            </div>
          </div>
          <div>
            <div className="flex gap-1 text-[#616161] text-xs items-center">
              <img src={Moon} alt="Moon" />
              <span>Evening</span>
              <span className="text-black">3 slots</span>
            </div>
            <div className="flex gap-5 mt-5">
              <Button value={"07:15 PM"} />
              <Button value={"11:15 AM"} />
              <Button value={"11:45 AM"} />
            </div>
          </div>
          <h1 className="text-xl text-[#616161] ">
            Slot selected -{" "}
            <span className="text-black underline">
              12:45 PM 12th July, 2023
            </span>
          </h1>
          <Link
            to={"/scheduled"}
            className="w-[464px] text-xl flex justify-center items-center mb-10 h-9 bg-primaryBlue text-white rounded-lg"
          >
            Confirm
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Schedule;
