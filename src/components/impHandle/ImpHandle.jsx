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
    stopGif() {
      setImg("/chiyo-dad-meme.jpeg");
    },
  }));

  return (
    <div className=" grid grid-col-1 w-fit h-fit gap-5 text-center">
      {/* <h5>child component</h5>
      <button
        onClick={gif}
        className=" w-full h-fit bg-pink-100 px-5 py-3 hover:bg-pink-200"
      >
        summon chiyo dad
      </button>
      <button
        onClick={stopGif}
        className=" w-full h-fit bg-pink-100 px-5 py-3 hover:bg-pink-200"
      >
        stop
      </button> */}
      <Image src={img} height={310} width={374}></Image>
    </div>
  );
});

export default ImpHandle;
