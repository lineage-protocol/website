import BGRight from "../../assets/images/svg/spiral.svg";

interface IntroProps {
  portrait: any;
}

export default function Intro(props: IntroProps) {
  return (
    <section className="">
      <div
        className={`gotMaxWidth relative mx-auto max-w-screen-xl md:pl-24 px-4 py-[60vw] lg:mt-10 md:py-32 lg:flex ${
          props.portrait ? "" : "lg:h-screen 2xl:h-auto 2xl:py-72 2xl:pt-96"
        } lg:items-center`}
      >
        <div className={`${props.portrait ? "mt-28" : ""}`}>
          <p className="font-Slider text-3xl lg:text-8xl leading-[120%] w-[80%] md:w-[50%] lg:w-[65%] mb-6">
            Building the future of NFTs today
          </p>

          <p className="text-sm lg:text-xl leading-[150%] pr-10 lg:w-[50%]">
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
