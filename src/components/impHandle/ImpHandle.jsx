"use client";
import React from "react";
import Image from "next/image";
import { useState, forwardRef, useImperativeHandle } from "react";

const ImpHandle = forwardRef((props, ref) => {
  const [img, setImg] = useState("/chiyo-dad-meme.jpeg");

  useImperativeHandle(ref, () => ({
    gif() {
      setImg("/chiyo-dad-meme.gif");
    },
  }));

  return (
    <div className=" grid grid-col-1 w-fit h-fit gap-5 text-center">
      <button
        onClick={() => {
          setImg("/chiyo-dad-meme.jpeg");
        }}
        className=" h-fit px-5 py-3 hover:bg-indigo-900/30 border-[2px] border-indigo-900/80"
      >
        hide cat button
      </button>
      <Image src={img} height={310} width={374} alt=""></Image>
    </div>
  );
});
ImpHandle.displayName = "ImpHandle";

export default ImpHandle;
