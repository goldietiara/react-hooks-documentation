"use client";
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
    <div className="text-3xl text-center flex flex-col gap-5">
      <Link href={"/"}>
        <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
          BACK
        </div>
      </Link>
      <div>{state.num}</div>
      <div>{state.text ? "PEAK A" : "BOO!"}</div>
      <div className="flex gap-5 justify-center">
        <button
          onClick={() => {
            dispatch({ type: "PLUS" });
          }}
          className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200"
        >
          PLUS
        </button>
        <button
          onClick={() => {
            dispatch({ type: "SWITCHTEXT" });
          }}
          className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200"
        >
          SWITCH TEXT
        </button>
        <button
          onClick={() => {
            dispatch({ type: "BOTH" });
          }}
          className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200"
        >
          BOTH
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
          className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default ExUseReducer;
