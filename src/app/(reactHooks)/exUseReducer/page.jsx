"use client";
import ButtonFit from "@/components/buttonFit/ButtonFit";
import Image from "next/image";
import Link from "next/link";
import React, { useReducer, useState } from "react";
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
      className=" w-10/12 h-fit flex flex-col gap-5 m-5
      text-md
      md:text-2xl"
    >
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useReducer</h4>
      </div>

      <section className=" grid grid-cols-4 w-full">
        <div className=" row-span-1 col-start-1 col-end-5 text-center bg-pink-50 py-3">
          {state.num}
        </div>
        <div className=" row-span-2 col-start-1 col-end-5 text-center py-3 bg-pink-50 border-t-2 border-pink-100">
          {state.text ? "PEAK A" : "BOO!"}
        </div>

        <button
          onClick={() => {
            dispatch({ type: "PLUS" });
          }}
          className="bg-pink-100 w-full h-full p-3 hover:bg-pink-200 "
        >
          PLUS
        </button>
        <button
          onClick={() => {
            dispatch({ type: "SWITCHTEXT" });
          }}
          className="bg-pink-100 w-full h-full p-3 hover:bg-pink-200 border-x-2 border-pink-200"
        >
          SWITCH TEXT
        </button>
        <button
          onClick={() => {
            dispatch({ type: "BOTH" });
          }}
          className="bg-pink-100 w-full h-full p-3 hover:bg-pink-200"
        >
          BOTH
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
          className="bg-pink-100 w-full h-full p-3 hover:bg-pink-200 border-l-2 border-pink-200"
        >
          RESET
        </button>
      </section>
      <section className=" relative mt-10 p-5 w-full self-center bg-pink-50 border-2 border-pink-200">
        <ol
          className=" grid gap-5 
          md:text-lg
          text-sm"
        >
          <li>
            <span className=" text-pink-500 font-semibold">useReducer</span>{" "}
            used to manage a couple or more state within a react component, has
            a build in function that specifies how the state gets updated.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default ExUseReducer;
