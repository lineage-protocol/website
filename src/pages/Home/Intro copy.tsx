import React from "react";
// import { ReactComponent as BGRight } from '../../assets/images/svg/spiral.svg'
import  BGRight  from '../../assets/images/svg/spiral.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

interface IntroProps {
  image: any;
}

export default function Intro(props: IntroProps) {
  return (
    <div className="w-full h-screen !max-h-screen text-white flex flex-col justify-between overflow-hidden intro-container">
      

      {/* <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="absolute right-0 bottom-0 h-screen w-1/2 overflow-hidden">
        <BGRight className="" />
      </div>
        <div className="relative uppercase tracking-[5px] text-center text-sm sm:text-base">
          The Future of Dynamic NFT
        </div>
      </div> */}
          <div className=" h-full">
        
        <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            KindaCode.com</h1>
        <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
        <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
        <h3 className="absolute text-2xl text-green-300 -bottom-24 right-0">
          <div className="relative flex justify-end">
            {/* <BGRight className="overflow-visible" /> */}
            <img src={BGRight} alt="test" className=" w-[90%]"/>
          </div>


        </h3>
    </div>

      
    </div>
  );
}
