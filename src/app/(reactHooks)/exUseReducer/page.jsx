"use client";
import ButtonFit from "@/components/buttonFit/ButtonFit";
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
    <div className=" w-10/12 h-20 flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useReducer</h4>
      </div>
      <div className=" grid grid-cols-4 w-full">
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
      </div>
    </div>
  );
};

export default ExUseReducer;
