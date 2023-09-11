"use client";
import UserConext from "@/components/(useContext)/userConext/UserConext";
import UserInputContext from "@/components/(useContext)/userInputContext/UserInputContext";
import Link from "next/link";
import React, { createContext, useState } from "react";

export const appContext = createContext(null);

const ExUseContext = () => {
  const [username, setUsername] = useState("chiyo dad");

  return (
    <div
      className=" w-10/12 h-fit flex flex-col gap-5 m-5
      text-md
      md:text-2xl"
    >
      {" "}
      <section className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useContext</h4>
      </section>
      {/* useContext */}
      <appContext.Provider
        value={{ username, setUsername }}
        className=" grid grid-cols-1 w-10/12 h-20 self-center"
      >
        <UserConext></UserConext>
        <UserInputContext></UserInputContext>
      </appContext.Provider>
      <section className=" relative mt-10 p-5 w-full self-center bg-pink-50 border-2 border-pink-200">
        <ol
          className=" grid gap-5 
          md:text-lg
          text-sm"
        >
          <li>
            <span className=" text-pink-500 font-semibold">useContext</span>{" "}
            used to control the parent state from child
          </li>
        </ol>
      </section>
    </div>
  );
};

export default ExUseContext;
