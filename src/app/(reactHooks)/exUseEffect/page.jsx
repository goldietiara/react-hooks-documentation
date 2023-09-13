"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImArrowLeft2 } from "react-icons/im";

const ExUseEffect = () => {
  const [data, setData] = useState("henlo everynyan!");
  const [num, setNum] = useState(0);

  const count = () => {
    setNum(num + 1);
  };
  const back = () => {
    setNum(num - 1);
  };
  const reset = () => {
    setNum(0);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[num].email);
      console.log(res.data[0].email);
    });
  }, [num]);

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
        <h4 className="w-10/12 font-bold px-5 text-center">useEffect</h4>
      </section>

      <div
        className=" bg-indigo-950 mb-64 rounded-3xl text-white 
      p-5 w-11/12
      md:p-10 md:w-9/12
      lg:w-7/12"
      >
        <section className=" grid grid-cols-3 h-fit bg-indigo-900/50">
          <h4 className=" row-span-1 col-start-1 col-end-3 py-3 px-5 w-full overflow-auto">
            {data}
          </h4>
          <h4 className=" row-span-1 col-start-3 col-end-4 py-3 px-5">
            id: {num}
          </h4>
          <button
            className=" px-5 py-3 hover:bg-indigo-900/80 border-[1px] border-indigo-900/80"
            onClick={count}
          >
            next
          </button>
          <button
            className={`  px-5 py-3 border-[1px] border-indigo-900/80 ${
              num === 0
                ? ` text-white/50 cursor-default`
                : `hover:bg-indigo-900/80 text-white`
            }`}
            onClick={back}
            disabled={num === 0}
          >
            back
          </button>
          <button
            className=" px-5 py-3 hover:bg-indigo-900/80 border-[1px] border-indigo-900/80"
            onClick={reset}
          >
            reset
          </button>
        </section>

        <section className=" relative mt-10 p-5 w-full self-center ">
          <ol
            className=" grid gap-5 
          md:text-lg
          text-sm"
          >
            <li>
              <span className=" text-pink-500 font-semibold">useEffect</span>{" "}
              used to replicate the component lifecycle on react functional,
              will re-render everytime the data inside useEffect changed
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ExUseEffect;
