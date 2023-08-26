import React from "react";
import DashboardBG from "../assets/dashboard.png";
import VideoCamera from "../assets/VideoCamera.svg";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <section className="flex flex-col  justify-between text-center items-center lg:px-[120px] pt-16 sm:px-8 ">
      <p className="font-semibold">
        Engage in mock interviews with our virtual interviewers, each designed
        to simulate the interviewing styles of HR managers, hiring managers, and
        industry professionals.
      </p>
      <img src={DashboardBG} alt="DashboardBG" className="w-[370px]" />
      <Link
        to={"/schedule"}
        className="lg:w-[635px] w-[370px] md:w-full h-[71px] bg-primaryBlue text-white flex justify-center items-center
       gap-4 rounded-[15px] md:text-2xl my-8"
      >
        {" "}
        Schedule Mock Interview{" "}
        <span>
          <img src={VideoCamera} alt="" />
        </span>
      </Link>
      <p>
        Our virtual interviewers are trained to evaluate your performance
        objectively, providing constructive feedback to help you improve.
      </p>
    </section>
  );
};

export default Dashboard;
