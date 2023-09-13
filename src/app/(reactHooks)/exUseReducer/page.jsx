"use client";
import ButtonFit from "@/components/buttonFit/ButtonFit";
import Image from "next/image";
import Link from "next/link";
import React, { useReducer, useState } from "react";
import { ImArrowLeft2 } from "react-icons/im";
Link;

const odi = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return { num: state.num + 1, text: state.text };
      break;
    case "SWITCHTEXT":
      return { num: state.num, text: !state.text };
      break;
    case "BOTH":
      return { num: state.num + 1, text: !state.text };
      break;
    case "RESET":
      return { num: (state.num = 0), text: (state.text = true) };
      break;

    default:
      break;
  }
};

const ExUseReducer = () => {
  const [state, dispatch] = useReducer(odi, { num: 0, text: true });

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
        <h4 className="w-10/12 font-bold px-5 text-center">useReducer</h4>
      </section>

      <div
        className=" bg-indigo-950  mb-48 rounded-3xl text-white 
      p-5 w-11/12
      md:p-10 md:w-9/12
      lg:w-7/12"
      >
        <section className=" grid grid-cols-4 w-full">
          <div className=" row-span-1 col-start-1 col-end-5 text-center  py-3 bg-indigo-900/50 border-[1px] border-indigo-900/80">
            {state.num}
          </div>
          <div className=" row-span-2 col-start-1 col-end-5 text-center py-3 bg-indigo-900/50 border-[1px] border-indigo-900/80">
            {state.text ? "PEAK A" : "BOO!"}
          </div>

          <button
            onClick={() => {
              dispatch({ type: "PLUS" });
            }}
            className=" w-full h-full p-3 hover:bg-indigo-900/80  bg-indigo-900/50 border-[1px] border-indigo-900/80"
          >
            PLUS
          </button>
          <button
            onClick={() => {
              dispatch({ type: "SWITCHTEXT" });
            }}
            className=" w-full h-full p-3 hover:bg-indigo-900/80  bg-indigo-900/50 border-[1px] border-indigo-900/80"
          >
            SWITCH TEXT
          </button>
          <button
            onClick={() => {
              dispatch({ type: "BOTH" });
            }}
            className=" w-full h-full p-3 hover:bg-indigo-900/80 bg-indigo-900/50 border-[1px] border-indigo-900/80"
          >
            BOTH
          </button>
          <button
            onClick={() => {
              dispatch({ type: "RESET" });
            }}
            className=" w-full h-full p-3 hover:bg-indigo-900/80  bg-indigo-900/50 border-[1px] border-indigo-900/80"
          >
            RESET
          </button>
        </section>
        <section className=" relative mt-10 p-5 w-full self-center  ">
          <ol
            className=" grid gap-5 
          md:text-lg
          text-sm"
          >
            <li>
              <span className=" text-pink-500 font-semibold">useReducer</span>{" "}
              used to manage a couple or more state within a react component,
              has a build in function that specifies how the state gets updated.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ExUseReducer;
