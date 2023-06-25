"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import NotFound from "next/navigation";

const ExUseLayoutEffect = () => {
  const [data, setData] = useState(["nyan"]);
  const [data2, setData2] = useState(["nyan"]);
  const [animation, setanimation] = useState(false);

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

  //   const data1 = await getData();

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useLayoutEffect</h4>
      </div>
      <div className=" w-full h-fit grid grid-cols-4 text-center gap-5">
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
                <div className="bg-pink-100 w-full h-fit px-5 py-3 text-left overflow-auto hover:bg-pink-200 mt-3 ">
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
                <div className="bg-pink-100 w-full h-fit px-5 py-3 text-left overflow-auto hover:bg-pink-200 mt-3 ">
                  {v.email}
                </div>
              );
            })}
          </div>
        </div>

        {/* <button
          className=" relative row-span-4 col-start-4 col-end-5 w-full h-fit py-3 px-5 bg-pink-100 hover:bg-pink-200"
          onClick={()=>{ setanimation(!animation)}}
          >reload</button> */}
        {/* <Link
          href={"/exUseLayoutEffect"}
          className=" relative row-span-4 col-start-4 col-end-5 w-full h-fit py-3 px-5 bg-pink-100 hover:bg-pink-200"
        >
          <button
          onClick={}
          >reload</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ExUseLayoutEffect;
