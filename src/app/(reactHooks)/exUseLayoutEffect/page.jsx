"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import NotFound from "next/navigation";

const ExUseLayoutEffect = () => {
  const [data, setData] = useState(["nyan"]);
  const [data2, setData2] = useState(["nyan"]);

  useLayoutEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw NotFound();
      }
      const data1 = await res.json();
      setData(data1);
    };
    getData();
  }, []);
  console.log(data);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw NotFound();
      }
      const data3 = await res.json();
      setData2(data3);
    };
    getData();
  }, []);
  console.log(data2);

  return (
    <div
      className=" w-10/12 h-fit flex flex-col gap-5 m-5
      text-md
      md:text-2xl"
    >
      <section className="flex mb-10 w-full ">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useLayoutEffect</h4>
      </section>
      <section className=" w-full h-fit grid grid-cols-4 text-center gap-5 ">
        <div className=" row-span-1 col-start-1 col-end-3 w-full h-fit py-3">
          useEffect
        </div>
        <div className=" row-span-1 col-start-3 col-end-5 w-full h-fit py-3">
          useLayoutEffect
        </div>
        <div className=" row-span-2 col-start-1 col-end-3 w-full h-96 bg-pink-50 p-3 text-left">
          <div className=" w-full h-full overflow-auto">
            {data2.map((v, i, a) => {
              return (
                <div
                  key={i}
                  className="bg-pink-100 w-full h-fit px-5 py-3 text-left overflow-auto hover:bg-pink-200 mt-3 "
                >
                  {v.email}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" row-span-2 col-start-3 col-end-5 w-full h-96 bg-pink-50 p-3 text-left">
          <div className=" w-full h-full overflow-auto">
            {data.map((v, i, a) => {
              return (
                <div
                  key={i}
                  className="bg-pink-100 w-full h-fit px-5 py-3 text-left overflow-auto hover:bg-pink-200 mt-3 "
                >
                  {v.email}
                </div>
              );
            })}
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
              useLayoutEffect
            </span>{" "}
            used to replicate the component lifecycle on react functional, will
            render the UI first then render the data inside useLayoutEffect
          </li>
        </ol>
      </section>
    </div>
  );
};

export default ExUseLayoutEffect;
