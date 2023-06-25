"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

const ExUseState = () => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState("hello everynyan!");
  const inputRef = useRef(null);

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
    inputRef.current.value = "";
  };

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useState</h4>
      </div>
      <div className="grid grid-cols-3 w-full h-20 bg-pink-50">
        <p className=" text-center pt-5 h-full w-full">{num}</p>
        <button
          onClick={countNum}
          className="bg-pink-100 w-full h-full p-3 hover:bg-pink-200 overflow-auto"
        >
          add one
        </button>
        <button
          onClick={resetNum}
          className="bg-pink-100 w-full h-full p-3 hover:bg-pink-200 overflow-auto"
        >
          reset
        </button>
      </div>
      <div className="grid grid-cols-2 w-full h-fit bg-pink-50">
        <p className="row-span-1 col-start-1 col-end-2 p-3 text-center px-5 h-fit">
          {input}
        </p>
        <input
          type="text"
          placeholder="type here!"
          onChange={changeInput}
          className=" relative row-span-1 col-start-2 col-end-3 bg-pink-50 w-full h-fit p-3 hover:bg-pink-200 border-l-2 border-pink-100"
          ref={inputRef}
        ></input>
        <button
          onClick={resetInput}
          className=" row-span-2 col-start-1 col-end-3 bg-pink-100 w-full h-fit p-3 hover:bg-pink-200"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default ExUseState;
