
interface IntroProps {
  portrait: any;
}

export default function Intro(props: IntroProps) {
  return (
    <section className="">
      <div
        className={`relative mx-auto max-w-screen-xl px-4 py-[60vw]   lg:flex justify-center ${
          props.portrait ? "md:py-28" : "lg:h-screen lg:mt-3 md:py-32 md:pl-24"
        } lg:items-center`}
      >
        <div className={`${props.portrait ? "mt-28" : ""}`}>
          <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] text-center ">
          How it Works
          </p>

          <p className="text-sm lg:text-[1.4vw] leading-[150%]  lg:w-[50vw] m-auto">
          Lineage is a decentralized middleware that allows developers to deploy dynamic NFTs with a few lines of code. Using Lineage, NFT metadata can now be tracked, evolve, and become interoperable across projects
          </p>
          
        </div>

      </div>
    </section>
  );
}
