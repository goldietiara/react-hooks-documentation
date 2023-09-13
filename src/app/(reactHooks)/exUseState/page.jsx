"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ImArrowLeft2 } from "react-icons/im";

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
    <div
      className="h-fit w-full flex flex-col gap-5 items-center
      text-md
      md:text-2xl"
    >
      <section className=" flex items-center bg-yellow-300/80 py-2 px-6 w-full border-b-2 border-indigo-950 mb-5">
        <Link href={"/"}>
          <div
            className="p-2  rounded-full outline outline-2 outline-indigo-950
            bg-indigo-950 text-white transition-all duration-100 ease-in-out
            hover:bg-pink-50 hover:text-indigo-950 "
          >
            <ImArrowLeft2
              className="
            text-sm
            md:text-lg"
            />
          </div>
        </Link>
        <h4 className="w-10/12 font-bold px-5 text-center">useState</h4>
      </section>

      <div
        className=" bg-indigo-950  mb-10 rounded-3xl text-white 
      p-5 w-11/12
      md:p-10 md:w-9/12
      lg:w-7/12"
      >
        <section className=" grid grid-cols-1 gap-5">
          <div className="grid grid-cols-1 w-full h-fit bg-indigo-900/50 ">
            <p className=" text-left p-3 h-full w-full border-indigo-900/80 border-[1px]">
              state: {num}
            </p>
            <div>
              <button
                onClick={countNum}
                className=" w-full p-3 overflow-auto border-indigo-900/80 border-[1px]
              hover:bg-indigo-900/40"
              >
                add one
              </button>
              <button
                onClick={resetNum}
                className=" w-full p-3 overflow-auto border-indigo-900/80 border-[1px] 
              hover:bg-indigo-900/40 "
              >
                reset
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full h-fit bg-indigo-900/50 ">
            <p className=" text-left p-3 w-full  overflow-auto border-indigo-900/80 border-[1px]">
              state: {input}
            </p>
            <input
              type="text"
              placeholder="type here to change state!"
              onChange={changeInput}
              className=" w-full p-3 focus:outline-none px-5 border-indigo-900/80 border-[1px]
              bg-indigo-900/20
              hover:bg-indigo-900/40"
              ref={inputRef}
            ></input>
            <button
              onClick={resetInput}
              className="  w-full h-fit p-3 border-indigo-900/80 border-[1px] 
            hover:bg-indigo-900/40"
            >
              reset
            </button>
          </div>
        </section>

        <section className="mt-10 p-5 w-full self-center ">
          <ol
            className=" grid gap-5 
          md:text-lg
          text-sm"
          >
            <li>
              <span className=" text-pink-500 font-semibold">State</span> is a
              value / data of within a component.
            </li>
            <li>
              <span className=" text-pink-500 font-semibold">useState</span>{" "}
              used to manage data within a react component, that has initial
              value and build in function to manipulate the value.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ExUseState;
