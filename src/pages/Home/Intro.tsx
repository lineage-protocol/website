import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

interface IntroProps {
  image: any;
}

export default function Intro(props: IntroProps) {
  return (
    <div className="w-full h-screen !max-h-screen text-white">
      {/* header */}
      <div className="relative bg-gradient-to-b from-black to-[rgb(0,0,0,0)]">
        <h1 className="tracking-[10px] pt-10 text-md sm:text-4xl p-6 font-nasalization uppercase text-center">
          Lineage Protocol
        </h1>
      </div>

      {/* content */}
      <div className="relative w-full h-[82%] flex flex-col items-center justify-center">
        <img alt="Lineage" src={props.image} className="mix-blend-screen" />
        <div className="w-full hidden lg:inline-flex justify-between absolute bottom-30">
          <hr className="w-1/5 border-white border-opacity-30" />
          <hr className="w-1/5 border-white border-opacity-30" />
        </div>
        <div className="uppercase tracking-[5px] text-center">
          The Future of Dynamic NFT
        </div>
      </div>

      {/* bounce arrow */}
      <div className="text-center">
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
