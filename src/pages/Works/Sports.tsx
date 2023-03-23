import * as Chain from "../../constants/Chain";
export default function Sports() {
  return (
    <div className="w-full  text-white text-center relative">
      <div className="w-full h-full flex flex-col justify-start gap-7 ">
        <p className="text-3xl md:text-[4.5vw] leading-[150%] font-Slider">
          Sports
        </p>

        {/* <!-- row --> */}

        <div className=" w-full md:w-1/2 mx-auto">
          <img src={Chain.games["Sport"]} alt="logo" className="w-full scale-[1.3]" />
        </div>

        {/* <div className="flex-shrink max-w-full w-full md:w-5/12 lg:w-[40%] boxAdd md:py-5 mx-auto relative  md:h-auto">
          <div className="flex flex-wrap flex-row md:-mx-4  md:pl-[4%]  lg:text-left  w-full">
            <div className="flex-shrink max-w-full w-full sm:w-1/2  ">
              <div
                className="relative overflow-hidden hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <img
                  src={Chain.games["Inventory"]}
                  alt="logo"
                  className="w-full px-5"
                />
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full sm:w-1/2 py-7 ">
              <div
                className="relative overflow-hidden hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <img
                  src={Chain.games["Sword"]}
                  alt="logo"
                  className="w-full px-5"
                />
              </div>
            </div>
          </div>
        </div> */}

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
