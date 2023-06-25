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
      <Image src={img} height={310} width={374}></Image>
    </div>
  );
});

export default ImpHandle;
