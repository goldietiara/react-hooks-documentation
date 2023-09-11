"use client";
import Link from "next/link";
import React, { useRef } from "react";
import ImpHandle from "@/components/impHandle/ImpHandle";

const ExUseImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div
      className=" w-10/12 h-fit flex flex-col gap-5 m-5
      text-md
      md:text-2xl"
    >
      <section className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">
          Example of useImperativeHandle
        </h4>
      </section>
      <section className=" w-full h-fit flex justify-center">
        <div className=" grid grid-col-2 w-fit h-fit gap-5 text-center">
          <h5 className=" row-span-1 col-start-1 col-end-2">parent button</h5>
          <h5 className=" row-span-1 col-start-2 col-end-3">child component</h5>
          <div className="col-start-1 col-end-2 p-5 bg-pink-50 w-fit flex flex-col">
            <button
              onClick={() => {
                buttonRef.current.gif();
              }}
              className=" h-fit bg-pink-100 px-5 py-3 hover:bg-pink-200 border-b-2 border-pink-200"
            >
              summon chiyo dad
            </button>
            <button
              onClick={() => {
                buttonRef.current.stopGif();
              }}
              className=" h-fit bg-pink-100 px-5 py-3 hover:bg-pink-200"
            >
              bye chiyo dad
            </button>
          </div>

          <div className=" row-span-2 col-start-2 col-end-3 p-5 bg-pink-50">
            <ImpHandle ref={buttonRef}></ImpHandle>
          </div>
        </div>
      </section>

      <section className=" relative mt-10 p-5 w-full self-center bg-pink-50 border-2 border-pink-200">
        <ol
          className=" grid gap-5 
          md:text-lg
          text-sm"
        >
          <li>
            <span className=" text-pink-500 font-semibold">
              useImperativeHandle
            </span>{" "}
            used to control the child function form parent with a reference from
            child
          </li>
        </ol>
      </section>
    </div>
  );
};

export default ExUseImperativeHandle;
