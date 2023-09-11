"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      className=" w-10/12 h-fit flex flex-col gap-5 m-5
      text-md
      md:text-2xl"
    >
      <section>
        <div className="flex mb-10 w-full">
          <Link href={"/"}>
            <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
              BACK
            </div>
          </Link>
          <h4 className="text-center p-3 w-10/12">Example of useState</h4>
        </div>
      </section>

      <section className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid grid-cols-1 w-full h-fit">
          <div className="grid grid-cols-3">
            <p className=" text-left p-3 h-full w-full bg-pink-50">state:</p>
            <p className=" text-left p-3 h-full w-full bg-pink-50 col-span-2">
              {num}
            </p>
          </div>
          <div>
            <button
              onClick={countNum}
              className="bg-pink-100 w-full p-3 overflow-auto border-b-2 border-pink-200
              hover:bg-pink-200"
            >
              add one
            </button>
            <button
              onClick={resetNum}
              className="bg-pink-100 w-full p-3 overflow-auto 
              hover:bg-pink-200 "
            >
              reset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 w-full h-fit">
          <div className="grid grid-cols-3">
            <p className=" text-left p-3 h-full w-full bg-pink-50">state:</p>
            <p className=" text-left p-3 w-full bg-pink-50 overflow-auto col-span-2">
              {input}
            </p>
          </div>
          <input
            type="text"
            placeholder="type here to change state!"
            onChange={changeInput}
            className=" bg-pink-50 w-full p-3 border-t-2 border-pink-100 focus:outline-none 
            hover:bg-pink-200"
            ref={inputRef}
          ></input>
          <button
            onClick={resetInput}
            className=" bg-pink-100 w-full h-fit p-3 
            hover:bg-pink-200"
          >
            reset
          </button>
        </div>
      </section>

      <section className=" relative mt-10 p-5 w-full self-center bg-pink-50 border-2 border-pink-200">
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
            <span className=" text-pink-500 font-semibold">useState</span> used
            to manage data within a react component, that has initial value and
            build in function to manipulate the value.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default ExUseState;
