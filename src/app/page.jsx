import ButtonFit from "@/component/buttonFit/ButtonFit";
import Link from "next/link";
import React from "react";

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
    <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 text-lg md:text-xl lg:text-3xl text-gray-900 my-10 mx-5 md:mx-10 lg:mx-40">
      {linkContoh.map((v, i, a) => {
        return (
          <Link
            className="bg-pink-100 w-full h-fit px-5 py-3 text-center overflow-auto hover:bg-pink-200"
            key={i}
            href={v.url}
          >
            {v.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Contoh;
