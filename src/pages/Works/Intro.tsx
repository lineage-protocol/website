import Image from "../../assets/images/spiral.gif";

interface IntroProps {
  portrait: any;
}

export default function Intro(props: IntroProps) {
  return (
    <section className="w-full">
      <div
        className={`relative mx-auto w-full md:pl-24 px-4 py-[60vw] md:py-32 lg:flex ${
          props.portrait ? "" : "lg:h-screen"
        } lg:items-end`}
      >
        <div className={`${props.portrait ? "mt-48" : ""}`}>
          <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] w-[80%] md:w-full">
            How it Works
          </p>
        </div>

        <div className="">
          <img
            alt="Lineage"
            src={Image}
            className="mix-blend-screen  w-full lg:w-[55vw] absolute -left-[15%] top-0 lg:top-[4rem] overflow-x-visible opacity-50 "
            style={{ transform: "rotate(143deg)" }}
          />
        </div>
      </div>
    </section>
    // <div className="w-full h-screen !max-h-screen text-white flex flex-col justify-between relative">
    //   <div className="text-center w-full lg:relative ">
    //     <img
    //       alt="Lineage"
    //       src={Image}
    //       className="mix-blend-screen  w-full lg:w-[55vw] absolute -left-[15%] top-0 lg:top-[4rem] overflow-x-visible opacity-50 "
    //       style={{ transform: "rotate(143deg)" }}
    //     />
    //   </div>
    //   <div className="w-full lg:h-full flex flex-col  justify-end mx-[6vw] gap-5 absolute lg:!relative top-0 h-[70vh] my-[5vw]">
    //     <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] w-[80%] md:w-[60%]">
    //       How it Works
    //     </p>
    //   </div>
    // </div>
  );
}
