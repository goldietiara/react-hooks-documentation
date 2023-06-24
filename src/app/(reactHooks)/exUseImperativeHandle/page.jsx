"use client";
import Link from "next/link";
import React, { useRef } from "react";
import ImpHandle from "@/components/impHandle/ImpHandle";

const ExUseImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">
          Exsample of useImperativeHandle
        </h4>
      </div>
      <div className=" w-full h-fit flex justify-center">
        <div className=" grid grid-col-2 w-fit h-fit gap-5 text-center">
          <h5 className=" row-span-1 col-start-1 col-end-2">parent button</h5>
          <h5 className=" row-span-1 col-start-2 col-end-3">child component</h5>
          <div className="col-start-1 col-end-2 p-5 bg-pink-50 ">
            <button
              onClick={() => {
                buttonRef.current.gif();
              }}
              className="  w-full h-fit bg-pink-100 px-5 py-3 hover:bg-pink-200 border-b-2 border-pink-200"
            >
              summon chiyo dad
            </button>
            <button
              onClick={() => {
                buttonRef.current.stopGif();
              }}
              className="  w-full h-fit bg-pink-100 px-5 py-3 hover:bg-pink-200"
            >
              stop
            </button>
          </div>

          <div className=" row-span-2 col-start-2 col-end-3 p-5 bg-pink-50">
            <ImpHandle ref={buttonRef}></ImpHandle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExUseImperativeHandle;
