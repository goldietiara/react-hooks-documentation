import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className=" bg-pink-200 py-2 w-full h-fit text-center text-xl">
      <Link href={"/"}>
        <h3>REACT HOOKS DOCUMENTATION</h3>
      </Link>
    </nav>
  );
}
