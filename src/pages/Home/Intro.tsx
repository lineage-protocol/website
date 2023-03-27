import BGRight from "../../assets/images/svg/spiral.svg";

interface IntroProps {
  portrait: any;
}

export default function Intro(props: IntroProps) {
  return (
    <section className="">
      <div
        className={`relative mx-auto max-w-screen-xl md:pl-24 px-4 py-[60vw] md:py-32 lg:flex ${
          props.portrait ? "" : "lg:h-screen"
        } lg:items-center`}
      >
        <div className={`${props.portrait ? "mt-28" : ""}`}>
          <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] w-[80%] md:w-[60%]">
            Building the future of NFTs today
          </p>

          <p className="text-sm lg:text-[1.4vw] leading-[150%] pr-10 lg:w-[50%]">
            Lineage is a decentralized metadata network that allows developers
            to deploy Dynamic NFTs with just a few lines of code. Using Lineage,
            NFT metadata can now be tracked, evolve, and become interoperable
            across ecosystems.
          </p>
          
        </div>

        <div className="">
            <img
              alt="Lineage"
              src={BGRight}
              className="mix-blend-soft-light lg:w-[45%] absolute right-0 -bottom-[17vw] overflow-x-visible opacity-[60%] "
            />
          </div>
      </div>
    </section>
  );
}
