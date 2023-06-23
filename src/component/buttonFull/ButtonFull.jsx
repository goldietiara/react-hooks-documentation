import React from "react";

const ButtonFull = ({ text }) => {
  return (
    <button className="bg-pink-100 w-full h-fit px-5 py-3 text-center text-lg md:text-xl lg:text-3xl overflow-auto hover:bg-pink-200">
      {text}
    </button>
  );
};

export default ButtonFull;
