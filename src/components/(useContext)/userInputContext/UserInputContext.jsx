import { appContext } from "@/app/(reactHooks)/exUseContext/page";
import React, { useContext, useRef } from "react";

const UserInputContext = () => {
  const { setUsername } = useContext(appContext);
  const inputRef = useRef(null);

  return (
    <div className=" grid grid-cols-2 h-20">
      <input
        className="relative col-start-1 col-end-3 w-full h-full py-3 px-5 bg-indigo-900/80 hover:bg-indigo-900/50 focus:outline-none"
        type="text"
        placeholder="change username"
        ref={inputRef}
      />

      <button
        className=" w-full h-full py-3 px-5 bg-indigo-900/50 hover:bg-indigo-900/80 border-2 border-indigo-900/80"
        onClick={() => {
          setUsername(inputRef.current.value);
          inputRef.current.value = "";
        }}
      >
        send
      </button>
      <button
        className=" w-full h-full py-3 px-5 bg-indigo-900/50 hover:bg-indigo-900/80 border-2 border-indigo-900/80 "
        onClick={() => {
          setUsername("chiyo dad");
          inputRef.current.value = "";
        }}
      >
        reset
      </button>
    </div>
  );
};

export default UserInputContext;
