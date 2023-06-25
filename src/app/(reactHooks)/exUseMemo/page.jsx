import Link from "next/link";
import React from "react";

const ExUseMemo = () => {
  return (
    <div className=" w-10/12 h-20 flex flex-col text-3xl gap-5 m-5">
      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Exsample of useMemo</h4>
      </div>
    </div>
  );
};

export default ExUseMemo;
