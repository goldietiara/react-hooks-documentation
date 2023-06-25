import { appContext } from "@/app/(reactHooks)/exUseContext/page";
import React, { useContext, useRef } from "react";

const UserInputContext = () => {
  const { setUsername } = useContext(appContext);
  const inputRef = useRef(null);

  return (
    <div className=" grid grid-cols-2 h-20">
      <input
        className="relative col-start-1 col-end-3 w-full h-full py-3 px-5 bg-pink-50 hover:bg-pink-200"
        type="text"
        placeholder="change username"
        ref={inputRef}
      />

      <button
        className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200 border-l-2 border-pink-200"
        onClick={() => {
          setUsername(inputRef.current.value);
          inputRef.current.value = "";
        }}
      >
        send
      </button>
      <button
        className=" w-full h-full py-3 px-5 bg-pink-100 hover:bg-pink-200 border-l-2 border-pink-200"
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
