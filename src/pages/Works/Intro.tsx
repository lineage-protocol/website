
interface IntroProps {
  portrait: any;
}

export default function Intro(props: IntroProps) {
  return (
    <section className="gotMaxWidth w-full">
      <div
        className={`relative mx-auto max-w-screen-xl px-4 py-[60vw]   lg:flex justify-center ${
          props.portrait ? "md:py-28" : "lg:h-screen 2xl:h-auto 2xl:py-72 lg:mt-3 md:py-32"
        } lg:items-center`}
      >
        <div className={`${props.portrait ? "mt-28" : ""}`}>
          <p className="font-Slider text-3xl lg:text-7xl leading-[120%] text-center ">
          How it Works
          </p>

          <p className="text-sm lg:text-xl leading-[150%]  lg:w-[700px] m-auto">
          Lineage is a decentralized middleware that allows developers to deploy dynamic NFTs with a few lines of code. Using Lineage, NFT metadata can now be tracked, evolve, and become interoperable across projects
          </p>
          
        </div>

      </div>
    </section>
  );
}
