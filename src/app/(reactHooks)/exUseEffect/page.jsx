import Link from "next/link";
import React from "react";
Link;

const exUseEffect = () => {
  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 m-5">
      <Link href={"/contoh"}>
        <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
          BACK
        </div>
      </Link>
      exUseEffect
    </div>
  );
};

export default exUseEffect;
