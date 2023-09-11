"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
        <h4 className="text-center p-3 w-10/12">Example of useEffect</h4>
      </section>
      <section className=" grid grid-cols-3 pt-5 h-fit">
        <h4 className=" row-span-1 col-start-1 col-end-3 bg-pink-50 py-3 px-5 w-full">
          {data}
        </h4>
        <h4 className=" row-span-1 col-start-3 col-end-4 bg-pink-50 border-l-2 border-pink-100 py-3 px-5">
          id: {num}
        </h4>
        <button
          className=" bg-pink-100 px-5 py-3 hover:bg-pink-200"
          onClick={count}
        >
          next
        </button>
        <button
          className={`  px-5 py-3 border-x-2 border-pink-200 bg-pink-100 ${
            num === 0
              ? ` text-black/50 cursor-default`
              : `hover:bg-pink-200 text-black`
          }`}
          onClick={back}
          disabled={num === 0}
        >
          back
        </button>
        <button
          className=" bg-pink-100 px-5 py-3 hover:bg-pink-200"
          onClick={reset}
        >
          reset
        </button>
      </section>

      <section className=" relative mt-10 p-5 w-full self-center bg-pink-50 border-2 border-pink-200">
        <ol
          className=" grid gap-5 
          md:text-lg
          text-sm"
        >
          <li>
            <span className=" text-pink-500 font-semibold">useEffect</span> used
            to replicate the component lifecycle on react functional, will
            re-render everytime the data inside useEffect changed
          </li>
        </ol>
      </section>
    </div>
  );
};

export default ExUseEffect;
