import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-pink-300 w-full h-fit text-center py-3">
      <Link href={"/"}>
        <h3>REACT HOOKS DOCUMENTATION</h3>
      </Link>
    </nav>
  );
};

export default NavBar;
