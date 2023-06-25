"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { notFound } from "next/navigation";

const ExUseMemo = () => {
  const [data, setData] = useState([]);
  const [output, setOutput] = useState("chiyo.chichi@gmail.com");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw notFound();
      }
      const data = await res.json();
      setData(data);
    };

    getData();
  }, []);

  // const findLongestEmail = (array) => {
  //   let longestEmail = array[0].email;
  //   for (let i = 1; i < array.length - 2; i++) {
  //     if (array[i].email.length > longestEmail.length) {
  //       longestEmail = array[i].email;
  //     }
  //   }
  //   console.log(longestEmail);
  //   return longestEmail;
  // };

  const findShortestEmail = (array) => {
    // length = angka manusia
    // loop = angka comp
    let shortestEmail = array[0].email;
    for (let i = 1; i < array.length - 2; i++) {
      if (shortestEmail.length > array[i].email.length) {
        shortestEmail = array[i].email;
      }
    }
    console.log(shortestEmail);
    return shortestEmail;
  };

  const findLongestEmail = (array) => {
    if (!array) return null;

    let longestEmail = "";
    for (let i = 0; i < array.length; i++) {
      let currentEmail = array[i].email;
      if (currentEmail.length > longestEmail.length) {
        longestEmail = currentEmail;
      }
    }
    console.log(longestEmail);
    return longestEmail;
  };

  // const getShortestEmail = useMemo(() => findShortestEmail(data), [data]);
  const getLongestEmail = useMemo(() => findLongestEmail(data), [data]);

  return (
    <div className=" w-10/12 h-20 flex flex-col text-3xl gap-5 m-5 text-center">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="p-3 w-10/12">Example of useMemo</h4>
      </div>
      <div className="grid grid-cols-3 w-full h-fit self-center">
        <div className=" row-span-1 col-start-1 col-end-4 py-3 px-5 bg-pink-50 text-left">
          what type of email would you like to find?
        </div>
        <button
          onClick={() => {
            setOutput(findShortestEmail(data));
          }}
          className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200 "
        >
          shortest
        </button>
        <button
          onClick={() => {
            setOutput(getLongestEmail);
          }}
          className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200 border-x-2 border-pink-200"
        >
          logest
        </button>
        <button
          onClick={() => {
            setOutput("chiyo.chichi@gmail.com");
          }}
          className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200"
        >
          reset
        </button>
        <div className=" row-span-3 col-start-1 col-end-4 w-full h-60 bg-pink-50 p-3 text-left border-t-2 border-pink-200 overflow-auto">
          <div className="bg-pink-100 w-full h-fit px-5 py-3 text-left overflow-auto hover:bg-pink-200 gap-5 border-l-2 border-b-2 border-pink-200">
            {output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExUseMemo;
