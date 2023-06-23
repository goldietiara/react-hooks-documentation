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
      <Link href={"/"}>
        <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
          BACK
        </div>
      </Link>
      <div className=" text-center flex flex-col gap-5">
        <button
          className=" bg-pink-100 px-5 py-3 hover:bg-pink-200"
          onClick={count}
        >
          hello
        </button>
        <h4>{data}</h4>
        <h4>id: {num}</h4>
        <div>
          <button
            className=" bg-pink-100 px-5 py-3 hover:bg-pink-200"
            onClick={back}
          >
            back
          </button>{" "}
          <button
            className=" bg-pink-100 px-5 py-3 hover:bg-pink-200"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExUseEffect;
