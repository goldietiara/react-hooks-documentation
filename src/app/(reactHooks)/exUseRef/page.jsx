"use client";
import React, { useReducer, useRef, useState } from "react";
import Link from "next/link";

const ExUseRef = () => {
  const [text, setText] = useState("Bird");
  const inputRef = useRef(null);

  const send = () => {
    inputRef.current.focus();
    setText(inputRef.current.value);
    inputRef.current.value = "";
  };
  const reset = () => {
    setText("Bird");
  };

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Exsample of useRef</h4>
      </div>
      <div className="text-center grid grid-cols-4 w-full h-20 bg-pink-50">
        <input
          className="relative row-span-1 col-start-1 col-end-3 w-full h-full py-3 px-5 bg-pink-50 hover:bg-pink-200"
          type="text"
          placeholder="Type Here!"
          ref={inputRef}
        />
        <button
          className=" row-span-1 col-start-3 col-end-4 bg-pink-100 w-full h-full py-3 px-5 hover:bg-pink-200 border-r-2 border-pink-200"
          onClick={send}
        >
          send
        </button>
        <button
          className=" row-span-1 col-start-4 col-end-5 bg-pink-100 w-full h-full py-3 px-5 hover:bg-pink-200"
          onClick={reset}
        >
          reset
        </button>
        <p className=" col-start-1 col-end-5 w-full h-full py-3 px-5 bg-pink-50">
          Hello Everynyan!
        </p>
        <p className=" col-start-1 col-end-5 w-full h-full py-3 px-5 bg-pink-50 border-y-2 border-pink-100">
          How are you? I'm fine Thank You
        </p>
        <p className=" col-start-1 col-end-5 w-full h-full py-3 px-5 bg-pink-50">
          I wish I were a{" "}
          <span className=" font-medium text-pink-600">{text}</span>
        </p>
      </div>
    </div>
  );
};

export default ExUseRef;
