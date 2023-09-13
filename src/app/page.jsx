import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PiStarFourFill, PiSmileyWinkBold } from "react-icons/pi";

const HooksLink = [
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
  // {
  //   title: "useMemo",
  //   url: "/exUseMemo",
  // },
  // {
  //   title: "useCallback",
  //   url: "/exUseCallback",
  // },
];

const Home = () => {
  return (
    <div
      className="grid h-[100%] 
    grid-cols-1
    md:grid-cols-2"
    >
      <section
        className=" flex justify-center items-start overflow-auto
      border-indigo-950 border-t-2 p-6 text-base
      md:border-r-2 md:border-t-0 md:p-10 md:text-lg md:pb-40"
      >
        <div
          className=" flex flex-col gap-5 bg-yellow-300/80 rounded-3xl outline outline-2 outline-indigo-950 overflow-y-auto text-center 
        h-[100%] w-[100%] p-5
        md:w-[90%] md:p-6"
        >
          {HooksLink.map((v, i, a) => {
            return (
              <Link href={`${v.url}`} key={i}>
                <div className=" relative w-full h-fit mb-[50px] group">
                  <PiSmileyWinkBold
                    className=" absolute top-0 -right-1 z-30 shrink-0 text-3xl rotate-12 bg-pink-200 rounded-full
                  hidden transition-all duration-300 ease-in
                  group-hover:flex"
                  />
                  <div
                    className=" absolute bg-white rounded-lg outline outline-2 outline-indigo-950
                    w-[96%] h-[40px] p-2 top-2 right-1 
                    md:h-[50px] md:p-3 md:right-2 "
                  >
                    {v.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section
        className=" flex-col 
      text-sm p-6 row-start-1 
      md:text-base md:p-10 md:col-start-2 "
      >
        <h1
          className="  font-bold 
        text-xl mb-3
        md:text-3xl md:mb-6
        lg:text-6xl lg:mb-10"
        >
          What is a Hook?
        </h1>

        <p
          className=" 
        my-3
        md:my-6"
        >
          A Hook is a special function that lets you “hook into” React features.
        </p>
        <p
          className="
        mb-6
        md:my-10"
        >
          If you write a function component and realize you need to add some
          state to it, previously you had to convert it to a class. Now you can
          use a Hook inside the existing function component.
        </p>

        <p
          className=" leading-10
        text-xs mb-3 
        md:text-sm md:leading-10"
        >
          to get a better understanding please visit:{" "}
          <a
            className="  font-bold py-2 px-4 rounded-lg outline-2 outline outline-indigo-950
           bg-pink-500 text-white transition-all ease-in-out duration-300
           hover:text-indigo-950 hover:bg-yellow-300/80
           "
            href="https://react.dev/reference/react"
            target="_blank"
          >
            here
          </a>
        </p>
      </section>
    </div>
  );
};

export default Home;
