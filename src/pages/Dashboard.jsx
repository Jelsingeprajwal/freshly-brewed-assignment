import React from "react";
import DashboardBG from "../assets/dashboard.png";
import VideoCamera from "../assets/VideoCamera.svg";
const Dashboard = () => {
  return (
    <section className="flex flex-col  justify-between text-center items-center px-[120px] pt-16">
      <p className="font-semibold">
        Engage in mock interviews with our virtual interviewers, each designed
        to simulate the interviewing styles of HR managers, hiring managers, and
        industry professionals.
      </p>
      <img src={DashboardBG} alt="DashboardBG" className="w-[370px]" />
      <button
        className="w-[635px] h-[71px] bg-primaryBlue text-white flex justify-center items-center
       gap-4 rounded-[15px] text-2xl my-8"
      >
        {" "}
        Schedule Mock Interview{" "}
        <span>
          <img src={VideoCamera} alt="" />
        </span>
      </button>
      <p>
        Our virtual interviewers are trained to evaluate your performance
        objectively, providing constructive feedback to help you improve.
      </p>
    </section>
  );
};

export default Dashboard;
