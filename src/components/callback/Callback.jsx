"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Callback = ({ returnChild }) => {
  useEffect(() => {
    console.log("CHILD FUNCTION WAS CALLED");
  }, [returnChild]);

  return (
    <Image
      src={returnChild()}
      height={150}
      width={150}
      alt="pochita"
      className="absolute bottom-0 right-0 p-10"
    />
  );
};

export default Callback;
