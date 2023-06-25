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
  });

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useEffect</h4>
      </div>
      <div className=" grid grid-cols-3 pt-5 h-fit">
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
          className=" bg-pink-100 px-5 py-3 hover:bg-pink-200 border-x-2 border-pink-200"
          onClick={back}
        >
          back
        </button>
        <button
          className=" bg-pink-100 px-5 py-3 hover:bg-pink-200"
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default ExUseEffect;
