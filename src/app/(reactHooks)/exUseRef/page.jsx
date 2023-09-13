"use client";
import React, { useReducer, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImArrowLeft2 } from "react-icons/im";

const ExUseRef = () => {
  const [text, setText] = useState("Bird");
  const [opacity, setOpacity] = useState("opacity-0");
  const inputRef = useRef(null);

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
        <h4 className="w-10/12 font-bold px-5 text-center">useRef</h4>
      </section>

      <div
        className=" bg-indigo-950  mb-40 rounded-3xl text-white 
      p-5 w-11/12
      md:p-10 md:w-9/12
      lg:w-7/12"
      >
        <section className=" text-center grid grid-cols-1 w-full ">
          <div className="grid grid-cols-4 bg-indigo-900/50">
            <input
              className="relative row-span-1 col-start-1 col-end-3 w-full h-full py-3 px-5 bg-indigo-900/60 hover:bg-indigo-900/80 border-[1px] border-indigo-900/80 focus:outline-none"
              type="text"
              placeholder="Type Here!"
              ref={inputRef}
            />
            <button
              className=" row-span-1 col-start-3 col-end-4 w-full h-full p-3 hover:bg-indigo-900/80  border-[1px] border-indigo-900/80"
              onClick={() => {
                inputRef.current.focus();
                setText(inputRef.current.value);
                inputRef.current.value = "";
                setOpacity("opacity-0");
              }}
            >
              send
            </button>
            <button
              className=" row-span-1 col-start-4 col-end-5 w-full h-full p-3 hover:bg-indigo-900/80"
              onClick={() => {
                setText("Bird");
                inputRef.current.value = "";
                setOpacity("opacity-100");
              }}
            >
              reset
            </button>
          </div>
          <p className=" w-full h-full py-3 px-5  bg-indigo-900/50 border-[1px] border-indigo-900/80">
            Hello Everynyan!
          </p>
          <p className=" w-full h-full py-3 px-5  bg-indigo-900/50 border-[1px] border-indigo-900/80">
            How are you? I&apos;m fine Thank You
          </p>
          <p className=" w-full h-full py-3 px-5  bg-indigo-900/50 border-[1px] border-indigo-900/80">
            I wish I were a
            <span className=" font-medium text-pink-600"> {text}</span>
          </p>
        </section>

        <Image
          src={"/chiyo-otosan.PNG"}
          alt="chiyo father"
          height={200}
          width={200}
          onLoad={() => {
            setOpacity("opacity-100");
          }}
          className={`fixed bottom-0 right-0 transform transition-all duration-1000 ease-in-out z-30 ${opacity}
        hidden
        md:flex`}
        ></Image>
        <section className=" relative mt-10 p-5 w-full self-center ">
          <ol
            className=" grid gap-5 
          md:text-lg
          text-sm"
          >
            <li>
              <span className=" text-pink-500 font-semibold">useRef</span> used
              to reference a value of an element. won't re-render when the state
              changed
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ExUseRef;
