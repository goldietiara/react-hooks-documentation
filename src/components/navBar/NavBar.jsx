import React from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { LiaReact } from "react-icons/lia";

const NavBar = () => {
  return (
    <nav
      className=" w-full h-fit  border-b-2 border-indigo-950 flex justify-between items-center font-bold bg-white 
    py-3 px-6 
    md:py-5 md:px-24 md:text-2xl"
    >
      <Link href={"/"}>
        <h3 className=" flex items-center gap-2">
          React Hooks{" "}
          <LiaReact className=" shrink-0 text-pink-500 animate-spin-slow" />
        </h3>
      </Link>

      <section className=" flex gap-5">
        <a
          className="link-hover link shrink-0 bg-indigo-950 text-lg text-white rounded-sm
          p-2
          md:p-2
          hover:bg-indigo-900"
          href={`mailto:goldietiara.acc@gmail.com`}
        >
          <SiGmail
            className="shrink-0
          text-xs
          md:text-sm"
          />
        </a>
        <a
          className="link-hover link shrink-0 bg-indigo-950 text-lg text-white rounded-sm
          p-2
          md:p-2
          hover:bg-indigo-900"
          href={`https://www.linkedin.com/in/goldie-tiara-putri-900733196`}
          target="_blank"
        >
          <TfiLinkedin
            className="shrink-0
          text-xs
          md:text-sm"
          />
        </a>
        <a
          className="link-hover link shrink-0 bg-indigo-950 text-lg text-white rounded-sm
          p-2
          md:p-2
          hover:bg-indigo-900"
          href={`https://github.com/goldietiara`}
          target="_blank"
        >
          <TbBrandGithubFilled
            className="shrink-0
          text-xs
          md:text-sm"
          />
        </a>
      </section>
    </nav>
  );
};

export default NavBar;
