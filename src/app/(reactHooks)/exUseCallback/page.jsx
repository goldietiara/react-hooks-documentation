"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Callback from "@/components/callback/Callback";

const ExUseCallback = () => {
  const [img, setImg] = useState("/confused-chiyo-chichi.PNG");
  const [animation, setAnimation] = useState();
  const [animationDelay, setAnimationDelay] = useState();
  const [dataChild, setDataChild] = useState("/mermaid-chiyo-chichi.png");

  const returnChild = useCallback(() => {
    return dataChild;
  }, [dataChild]);

  return (
    <div className=" w-10/12 h-fit flex flex-col text-3xl gap-5 text-center mt-5">
      <Callback returnChild={returnChild}></Callback>

      <div className="flex mb-10 w-full">
        <Link href={"/"}>
          <div className="bg-pink-100 w-fit h-fit p-3 hover:bg-pink-200 overflow-auto">
            BACK
          </div>
        </Link>
        <h4 className="text-center p-3 w-10/12">Example of useCallback</h4>
      </div>
      <div className="relative self-center bg-pink-100 border-2 border-pink-200">
        <Image
          src={"/confused-chiyo-chichi.PNG"}
          height={310}
          width={374}
          alt="chiyo-chichi"
        ></Image>
        <Image
          src={img}
          height={310}
          width={374}
          alt="chiyo-chichi"
          className={` bottom-0 left-0 absolute transform transition-all duration-500 ease-in-out ${animationDelay} ${animation}`}
        ></Image>
      </div>

      <div className=" grid grid-cols-3 w-fit h-fit bg-pink-50 border-2 border-pink-200 self-center">
        <Image
          src={"/chiyo-chichi-fliped.PNG"}
          height={200}
          width={200}
          alt="chiyo-chichi"
          className=" row-span-3"
        ></Image>
        <p className=" col-start-2 col-end-4 text-left p-5">
          hmm.. what should I do?
        </p>
        <button
          className="  col-start-2 col-end-3 h-fit bg-pink-50 px-5 py-3 hover:bg-pink-200  w-fit"
          onClick={() => {
            setImg("/flying-chiyo-chichi.JPG");
            setAnimation("opacity-100");
          }}
          onMouseLeave={() => {
            setAnimationDelay("delay-500");
            setAnimation("opacity-0");
          }}
        >
          Fly with Birds
        </button>
        <button
          className="col-start-2 col-end-3 h-fit bg-pink-50 px-5 py-3 hover:bg-pink-200 w-fit"
          onClick={() => {
            setImg("/chiyo-and-chiyo-chichi.JPG");
            setAnimation("opacity-100");
          }}
          onMouseLeave={() => {
            setAnimationDelay("delay-500");
            setAnimation("opacity-0");
          }}
        >
          Meet my kids
        </button>
      </div>
    </div>
  );
};

export default ExUseCallback;
