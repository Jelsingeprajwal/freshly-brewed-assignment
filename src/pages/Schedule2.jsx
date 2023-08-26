import React from "react";

const Schedule2 = () => {
  return (
    <section className="font-sans p-7">
      <p className="text-4xl">
        Your interview session has been booked with LeanPrep!{" "}
      </p>
      <div className="flex flex-col-reverse lg:flex-row  gap-14 mt-10 text-[#616161]">
        <div className=" lg:w-[599px]">
          <div className="">
            <h1 className="underline">Details</h1>
            <p>
              Interview code - 0000006578 <br /> Slot - 12:45 PM <br /> Date -
              12th July, 2023
            </p>
          </div>
          <div className="mt-[56px]">
            <p>
              Meeting Link - <br />
              <a href="" className="text-blue-400 underline">
                {" "}
                http://auigfuahfoaofhiafalkjfjkaffjk
              </a>
            </p>
          </div>
          <button className="w-full text-xl flex justify-center items-center mb-6 h-9 bg-primaryBlue text-white rounded-lg mt-12">
            Go to Preparation
          </button>
          <button className="w-full text-xl flex justify-center border border-[#616161] items-center mb-10 h-9 rounded-lg">
            Cancel Interview
          </button>
          <p className="text-black">
            Remember, the goal of this mock online interview session is to
            improve your interview skills. Approach it with a positive mindset
            and take advantage of the opportunity to enhance your performance.
            Good luck!
          </p>
        </div>
        <div className="lg:w-[360px] text-xl px-4 pt-1 pb-4 border border-[#616161] ">
          <h1 className="underline">Instructions</h1>
          <ul className="list-inside list-disc">
            <li>
              Test your equipment: Ensure that your computer, webcam,
              microphone, and internet connection are working properly. Check
              for any updates or software requirements beforehand.{" "}
            </li>
            <li>
              Choose an appropriate location: Find a quiet, well-lit space where
              you won't be interrupted during the interview. Ensure that the
              background is professional and free from distractions.
            </li>
            <li>
              Dress professionally: Wear appropriate attire as if you were
              attending an in-person interview. Dressing professionally will
              help you get into the right mindset.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule2;
