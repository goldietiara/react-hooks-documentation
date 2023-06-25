import ButtonFit from "@/components/buttonFit/ButtonFit";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const linkContoh = [
  {
    title: "useState",
    url: "/exUseState",
  },
  {
    title: "useReducer",
    url: "/exUseReducer",
  },
  {
    title: "useEffect",
    url: "/exUseEffect",
  },
  {
    title: "useRef",
    url: "/exUseRef",
  },
  {
    title: "useLayoutEffect",
    url: "/exUseLayoutEffect",
  },
  {
    title: "useImperativeHandle",
    url: "/exUseImperativeHandle",
  },
  {
    title: "useContext",
    url: "/exUseContext",
  },
  {
    title: "useMemo",
    url: "/exUseMemo",
  },
  {
    title: "useCallback",
    url: "/exUseCallback",
  },
];

const Contoh = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-between gap-20">
      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 text-lg md:text-xl lg:text-2xl text-gray-900 mt-20 mx-5 md:mx-10 lg:mx-40">
        {linkContoh.map((v, i, a) => {
          return (
            <Link
              className="bg-pink-100 w-full h-fit px-5 py-3 text-center overflow-auto hover:bg-pink-200 "
              key={i}
              href={v.url}
            >
              {v.title}
            </Link>
          );
        })}
      </div>
      <div className=" relative flex w-11/12 h-fit bg-pink-50 border-2 border-pink-200 self-center ">
        <Image
          src={"/chiyo-chichi-fliped.PNG"}
          height={250}
          width={250}
          alt="chiyo-chichi"
          className="absolute bottom-0 left-0 "
        ></Image>
        <div className=" w-6/12 h-full"></div>
        <div className="py-3 px-5">
          <p className=" font-medium  mb-1">What is a Hook?</p>
          <p className=" font-light leading-relaxed">
            A Hook is a special function that lets you “hook into” React
            features. For example, useState is a Hook that lets you add React
            state to function components. We’ll learn other Hooks later.
          </p>
          <p className=" font-medium  mb-1 mt-3">When would I use a Hook?</p>
          <p className=" font-light leading-relaxed">
            If you write a function component and realize you need to add some
            state to it, previously you had to convert it to a class. Now you
            can use a Hook inside the existing function component.
          </p>
          <p className=" font-light leading-relaxed mt-2">
            to get a better understanding please visit{" "}
            <span className=" text-pink-600 font-medium border-b-2 border-pink-600">
              https://legacy.reactjs.org/docs/hooks-intro.html
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contoh;
