"use client";
import UserConext from "@/components/(useContext)/userConext/UserConext";
import UserInputContext from "@/components/(useContext)/userInputContext/UserInputContext";
import Link from "next/link";
import React, { createContext, useState } from "react";

export const appContext = createContext(null);

const ExUseContext = () => {
  const [username, setUsername] = useState("chiyo dad");

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Exsample of useContext</h4>
      </div>
      <appContext.Provider
        value={{ username, setUsername }}
        className=" grid grid-cols-1 w-10/12 h-20 self-center"
      >
        <UserConext></UserConext>
        <UserInputContext></UserInputContext>
      </appContext.Provider>
    </div>
  );
};

export default ExUseContext;
