import * as Chain from "../../constants/Chain";
export default function Music() {
  const musicList = [{
    icon:"Song1",
    title: "Song Title 1",
    name: "Singer Name"
  }];
  return (
    <div className="w-full lg:h-screen lg:max-h-screen text-white text-center relative">
      <div className=" pt-12 pr-0 pb-14 pl-0 ">
        <div
          className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          <div className="flex flex-col-reverse items-center sm:px-5 md:flex-row gap-10">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div
                className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
              >
                <div className="w-full lg:h-full flex flex-col  justify-end mx-[6vw] gap-5">
                  <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] text-left">
                    Music
                  </p>
                  <p className="text-sm lg:text-[1.1vw] leading-[150%] pr-10 text-left">
                    Music collaborations are another potential use case for
                    Lineage Protocol. NFTs representing songs can be created,
                    with each subset of metadata representing a different
                    instrument. As different musicians contribute their parts,
                    the metadata associated with each subset can be updated to
                    reflect the changes made, creating a collaborative and
                    dynamic music creation process. This allows for a more
                    transparent and secure music creation process that enables
                    multiple parties to work together on a single piece of
                    music.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-3">
                <p className="font-Slider text-3xl lg:text-[1.4vw] leading-[120%] text-left">
                  Top charts
                </p>
                <div className="">
                  <div className="flex-wrap flex-row -mx-4 justify-center px-[8%] py-10 mt-10 flex">
                    {musicList &&
                      musicList.map((item, index) => (
                        <div
                          className="flex-shrink max-w-full w-1/2 sm:w-1/2 md:w-5/12 lg:w-1/6"
                          key={`about-${index}`}
                        ></div>
                      ))}
                  </div>
                </div>
                {/* <img
                  src={Chain.estate["Loyalty2"]}
                  className="object-cover rounded-lg  btn- w-full h-full"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
