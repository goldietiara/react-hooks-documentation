"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { notFound } from "next/navigation";

const Experiment = () => {
  const [emails, setEmails] = useState([]);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw notFound();
      }
      const data = await res.json();
      setEmails(data);
    };

    getData();
  }, []);

  //   console.log(emails);

  // const a = (array) => {
  //   let temp = [];
  //   array.forEach((v, i, a) => {
  //     if ((array[i].email[0] = "a")) {
  //       temp.push(array[i].email);
  //     }
  //   });
  //   return temp;
  // };

  const findLongestEmail = (comments) => {
    if (!comments) return null;

    let longestEmail = "";
    for (let i = 0; i < comments.length; i++) {
      let currentEmail = comments[i].email;
      if (currentEmail.length > longestEmail.length) {
        longestEmail = currentEmail;
      }
    }
    console.log("LONGEST FUNCTION WAS COMPUTED");
    console.log(longestEmail);
    return longestEmail;
  };

  const getLongestEmail = useMemo(() => findLongestEmail(emails), [emails]);

  return (
    <div className=" w-10/12 h-20 flex flex-col text-3xl gap-5 m-5 text-center">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="p-3 w-10/12">Exsample of useMemo</h4>
      </div>
      <div className="grid grid-cols-3 w-full h-fit self-center">
        <div className=" row-span-1 col-start-1 col-end-4 py-3 px-5 bg-pink-50 text-left">
          what type of email would you like to find?
        </div>
        <input
          className=" relative w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200"
          type="text"
          placeholder="start with an"
        />
        <button className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200 border-x-2 border-pink-200">
          shortest
        </button>
        <button
          className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200"
          onClick={() => {
            setOutput(getLongestEmail);
          }}
        >
          logest
        </button>
        <div className=" row-span-3 col-start-1 col-end-4 w-full h-96 bg-pink-50 p-3 text-left border-t-2 border-pink-200 overflow-auto">
          {output}
        </div>
      </div>
    </div>
  );
};

export default Experiment;
