import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

interface IntroProps {
  image: any;
}

export default function Intro(props: IntroProps) {
  return (
    <div className="w-full h-screen !max-h-screen text-white flex flex-col justify-between">
      {/* header */}
      <div className="relative bg-gradient-to-b from-black to-[rgb(0,0,0,0)]">
        <h1 className="tracking-[10px] pt-10 text-base sm:text-4xl p-6 font-nasalization uppercase text-center">
          Lineage Protocol
        </h1>
      </div>

      {/* content */}
      <div className="w-full h-[80%] flex flex-col items-center justify-center">
        <img alt="Lineage" src={props.image} className="mix-blend-screen" />
        <div className="w-full hidden lg:inline-flex justify-between absolute bottom-30">
          <hr className="w-1/6 border-white border-opacity-30" />
          <hr className="w-1/6 border-white border-opacity-30" />
        </div>
        <div className="relative uppercase tracking-[5px] text-center text-sm sm:text-base">
          The Future of Dynamic NFT
        </div>
      </div>

      {/* bounce arrow */}
      <div className="text-center h-[20%] flex flex-col justify-end pb-5">
        <a href="/#about">
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="h-7 sm:h-10 animate-bounce"
          />
        </a>
      </div>
    </div>
  );
}
