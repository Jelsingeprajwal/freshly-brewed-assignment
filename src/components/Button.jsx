import React from "react";

const Button = ({ value }) => {
  const handleButton = (event) => {
    event.preventDefault();
    // alert("Sorry!!!! It does't work right now ");
  };
  return (
    <button
      onClick={handleButton}
      value={"11:00 AM"}
      className="btn w-[84px] h-9 border border-[#000000] focus:bg-black focus:text-white  rounded-lg mr-2"
    >
      {value}
    </button>
  );
};

export default Button;
