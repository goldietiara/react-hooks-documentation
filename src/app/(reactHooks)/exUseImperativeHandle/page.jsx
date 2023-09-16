"use client";
import Link from "next/link";
import React, { useRef } from "react";
import ImpHandle from "@/components/impHandle/ImpHandle";
import { ImArrowLeft2 } from "react-icons/im";

const ExUseImperativeHandle = () => {
  const buttonRef = useRef(null);

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
        <h4 className="w-10/12 font-bold px-5 text-center">
          useImperativeHandle
        </h4>
      </section>

      <div
        className=" bg-indigo-950  mb-40 rounded-3xl text-white 
      p-5 w-11/12
      md:p-10 md:w-9/12
      lg:w-7/12"
      >
        <section className=" w-full h-fit flex justify-center">
          <div
            className=" grid w-fit h-fit gap-5 text-center 
          grid-cols-1
          md:grid-cols-2"
          >
            <div className=" pt-5 w-full h-fit flex flex-col bg-indigo-900/50 p-5">
              <h5 className="mb-5 py-3">parent component</h5>

              <button
                onClick={() => {
                  buttonRef.current.gif();
                }}
                className=" h-fit px-5 py-3 hover:bg-indigo-900/30 border-[2px] border-indigo-900/80"
              >
                show cat button
              </button>
            </div>

            <div className=" p-5 h-fit bg-indigo-900/50">
              <h5 className="mb-5 py-3">child component</h5>

              <ImpHandle ref={buttonRef}></ImpHandle>
            </div>
          </div>
        </section>

        <section className=" relative mt-10 p-5 w-full self-center">
          <ol
            className=" grid gap-5 
          md:text-lg
          text-sm"
          >
            <li>
              <span className=" text-pink-500 font-semibold">
                useImperativeHandle
              </span>{" "}
              lets a child component customize what the parent component can do
              with it through a ref.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ExUseImperativeHandle;
