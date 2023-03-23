
import Image from "../../assets/images/spiral.gif";

// interface IntroProps {
//   image: any;
// }

export default function Intro() {
  return (
    <div className="w-full h-screen !max-h-screen text-white flex flex-col justify-between relative">
      <div className="text-center w-full lg:relative ">
        <img
          alt="Lineage"
          src={Image}
          className="mix-blend-screen  w-full lg:w-[55vw] absolute -left-[15%] top-0 lg:top-[4rem] overflow-x-visible opacity-50 "
          style={{ transform: "rotate(143deg)" }}
        />
      </div>
      <div className="w-full lg:h-full flex flex-col  justify-end mx-[6vw] gap-5 absolute lg:!relative top-0 h-[70vh] my-[5vw]">
        <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] w-[80%] md:w-[60%]">
          How it Works
        </p>
        <p className="text-sm lg:text-[1.4vw] leading-[150%] pr-10 md:w-[60%] lg:w-[50%]">
          Lineage is a decentralized middleware that allows developers to deploy
          dynamic NFTs with a few lines of code. Using Lineage, NFT metadata can
          now be tracked, evolve, and become interoperable across projects
        </p>
      </div>
    </div>
  );
}
