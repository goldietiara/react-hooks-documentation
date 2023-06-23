"use client";
import React, { useState } from "react";
import Link from "next/link";

const ExUseRef = () => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState("hello everynyan!");

  const countNum = () => {
    setNum(num + 1);
  };
  const resetNum = () => {
    setNum(0);
  };

  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const resetInput = () => {
    setInput("hello everynyan!");
  };

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <Link href={"/"}>
        <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
          BACK
        </div>
      </Link>
      <h3 className="text-center">Example of UseState</h3>
      <div className="grid grid-cols-3 w-full h-fit bg-pink-50">
        <p className="p-3 text-center px-5">{num}</p>
        <button
          onClick={countNum}
          className="bg-pink-100 w-full h-fit p-3 hover:bg-pink-200 overflow-auto"
        >
          add one
        </button>
        <button
          onClick={resetNum}
          className="bg-pink-100 w-full h-fit p-3 hover:bg-pink-200 overflow-auto"
        >
          reset
        </button>
      </div>
      <div className="grid grid-cols-2 w-full h-fit bg-pink-50">
        <p className="p-3 text-center px-5">{input}</p>
        <input
          type="text"
          placeholder="type here!"
          onChange={changeInput}
          className="bg-pink-50 w-full h-fit p-3 hover:bg-pink-200 overflow-auto border-l-2 border-pink-100"
        ></input>
        <button
          onClick={resetInput}
          className=" row-span-2 col-start-1 col-end-3 bg-emerald-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default ExUseRef;
