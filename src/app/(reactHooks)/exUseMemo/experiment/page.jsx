"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { data } from "autoprefixer";

const Experiment = () => {
  const [emails, setEmails] = useState([]);
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState([]);
  const inputRef = useRef(null);

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

  console.log(emails);
  //   console.log(emails[0].email.length);

  //   let arr = ["boy", "cat", "dog"];
  //   let inp = "ca";
  //   let outputArr = [];

  //   var found = false;
  //   for (var i = 0; !found && i < arr.length; i++) {
  //     found = inp || arr[i];
  //   }
  //   if (found) {
  //     console.log("match found for " + found);
  //   } else {
  //     console.log("its not there");
  //   }

  // const findLongestEmail = (comments) => {
  //   if (!comments) return null;

  //   let longestEmail = "";
  //   for (let i = 0; i < comments.length; i++) {
  //     let currentEmail = comments[i].email;
  //     if (currentEmail.length > longestEmail.length) {
  //       longestEmail = currentEmail;
  //     }
  //   }
  //   console.log("LONGEST FUNCTION WAS COMPUTED");
  //   console.log(longestEmail);
  //   return longestEmail;
  // };

  //   Const cariKecil = (array) => {

  //     Var terKecil = array[0].length

  //     for( let I = 1; I < array.length-2; I++){
  //         If( terKecil > array[I].length ){
  //         array[i] = terKecil    }
  //         }
  //     return terKecil
  //     }

  const findShortestEmail = (array) => {
    // length = angka manusia
    // loop = angka comp
    let shortestEmail = array[0].email;
    for (let i = 1; i < array.length - 2; i++) {
      if (shortestEmail.length > array[i].email.length) {
        shortestEmail = array[i].email;
      }
    }
    return shortestEmail;
  };

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
        <button
          className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200 border-x-2 border-pink-200"
          onClick={() => {
            setOutput(findShortestEmail(emails));
          }}
        >
          shortest
        </button>
        <button className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200">
          logest
        </button>
        <div className=" row-span-3 col-start-1 col-end-4 w-full h-96 bg-pink-50 p-3 text-left border-t-2 border-pink-200 overflow-auto">
          {/* {findShortestEmail(emails)} */}
          {output}
          {/* {emails.map((v, i, a) => {
            return (
              <div className="bg-pink-100 w-full h-fit px-5 py-3 text-left overflow-auto hover:bg-pink-200 mb-5 border-l-2 border-b-2 border-pink-200 ">
                {v.email}
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Experiment;
