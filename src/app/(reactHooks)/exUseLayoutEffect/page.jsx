"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import NotFound from "next/navigation";
import { ImArrowLeft2 } from "react-icons/im";

const ExUseLayoutEffect = () => {
  const [data, setData] = useState(["nyan"]);
  const [data2, setData2] = useState(["nyan"]);

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
    console.log("useEffect");
  }, []);
  // console.log(data2);

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
    console.log("useLayoutEffect");
  }, []);
  // console.log(data);

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
        <h4 className="w-10/12 font-bold px-5 text-center">useLayoutEffect</h4>
      </section>

      <div
        className=" bg-indigo-950  mb-40 rounded-3xl text-white 
    p-5 w-11/12
    md:p-10 md:w-9/12
    lg:w-7/12"
      >
        <section
          className=" w-full h-fit grid text-center gap-5 
        grid-cols-1 
        md:grid-cols-2 "
        >
          <div className="  w-full h-fit">
            <p className=" py-3 mb-3">useEffect</p>
            <div className="  w-full h-96 p-3 text-left bg-indigo-900/50">
              <div className=" w-full h-full overflow-auto">
                {data2.map((v, i, a) => {
                  return (
                    <div
                      key={i}
                      className=" w-full h-fit px-5 py-3 text-left overflow-auto cursor-pointer hover:bg-indigo-950/50 mt-3 bg-indigo-900/80"
                    >
                      {v.email}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" w-full h-fit ">
            <p className=" py-3 mb-3">useLayoutEffect</p>
            <div className=" w-full h-96 p-3 text-left bg-indigo-900/50">
              <div className=" w-full h-full overflow-auto">
                {data.map((v, i, a) => {
                  return (
                    <div
                      key={i}
                      className=" w-full h-fit px-5 py-3 text-left overflow-auto cursor-pointer hover:bg-indigo-950/50 mt-3 bg-indigo-900/80"
                    >
                      {v.email}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className=" relative mt-10 p-5 w-full self-center ">
          <ol
            className=" grid gap-5 
          md:text-lg
          text-sm"
          >
            <li>
              <span className=" text-pink-500 font-semibold">
                useLayoutEffect
              </span>{" "}
              is the same as useEffect, but runs synchronously before the
              browser render the screen. allows you to perform actions
              synchronously after the component has rendered but before the
              browser visually updates the screen. to give a smoother user
              experience.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ExUseLayoutEffect;
