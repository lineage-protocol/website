import BGRight from "../../assets/images/svg/spiral.svg";

// interface IntroProps {
//   image: any;
// }

export default function Intro() {
  return (
    <div className="w-full h-screen !max-h-screen text-white flex flex-col justify-between relative">
      <div
        className="w-full lg:h-full flex flex-col  justify-center mx-6 lg:mx-36 gap-5 absolute lg:!relative top-0 h-[170vw] "
      >
        <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] w-[80%] md:w-[60%]">
          Building the future of NFTs today
        </p>
        <p className="text-sm lg:text-[1.4vw] leading-[150%] pr-10 lg:w-[50%]">
          Lineage is a decentralized middleware that allows developers to deploy
          dynamic NFTs with a few lines of code. Using Lineage, NFT metadata can
          now be tracked, evolve, and become interoperable across projects
        </p>
      </div>
      <div className="text-center w-full lg:relative ">
        <img
          alt="Lineage"
          src={BGRight}
          className="mix-blend-soft-light lg:w-[45%] absolute right-0 -bottom-[17vw] overflow-x-visible opacity-[60%] "
        />
      </div>
    </div>
  );
}
