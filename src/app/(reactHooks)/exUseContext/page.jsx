"use client";
import UserConext from "@/components/(useContext)/userConext/UserConext";
import UserInputContext from "@/components/(useContext)/userInputContext/UserInputContext";
import Link from "next/link";
import React, { createContext, useState } from "react";
import { ImArrowLeft2 } from "react-icons/im";

export const appContext = createContext(null);

const ExUseContext = () => {
  const [username, setUsername] = useState("chiyo dad");

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
        <h4 className="w-10/12 font-bold px-5 text-center">useContext</h4>
      </section>

      <div
        className=" bg-indigo-950  mb-72 rounded-3xl text-white 
      p-5 w-11/12
      md:p-10 md:w-9/12
      lg:w-7/12"
      >
        {/* useContext */}
        <appContext.Provider
          value={{ username, setUsername }}
          className=" grid grid-cols-1 w-10/12 h-20 self-center"
        >
          <UserConext></UserConext>
          <UserInputContext></UserInputContext>
        </appContext.Provider>
        <section className=" relative mt-10 p-5 w-full self-center">
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
    </div>
  );
};

export default ExUseContext;
