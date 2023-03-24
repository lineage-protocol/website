import * as Chain from "../../constants/Chain";
import infoBg from "../../assets/images/background/infoBg.webp";
export default function Sports() {
  return (
    <div className="w-full h-auto  text-white text-center relative">
      <div className="absolute md:-top-[25vw] w-full h-full">
        <img src={infoBg} alt="infoBg" className="" />
      </div>
      <div className="w-full h-full flex flex-col justify-start gap-20 ">
        <p className="text-3xl md:text-[4.5vw] leading-[150%] font-Slider">
          Sports
        </p>

        {/* <!-- row --> */}

        <div className=" w-full md:w-1/2 mx-auto">
          <img
            src={Chain.games["Sport"]}
            alt="logo"
            className="w-full scale-[1.5]"
          />
        </div>

        <p className="md:text-[1.1vw] leading-[150%] md:w-[60%] px-10 mx-auto">
          Sports cards are another potential use case for Lineage Protocol. NFTs
          representing sports cards can be created that evolve over time based
          on player performance, market demand, or other factors. This allows
          collectors to own a sports card that changes over time, creating a
          more dynamic and valuable asset.
        </p>
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
