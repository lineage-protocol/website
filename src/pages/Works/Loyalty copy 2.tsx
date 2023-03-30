import * as Chain from "../../constants/Chain";
export default function Loyalty() {
  return (
    <div className="w-full lg:max-h-screen text-white text-center relative flex items-center">
      <div className=" pt-12 pr-0 pb-14 pl-0 ">
        <div
          className="
      max-w-full"
        >
          <div className="max-w-[75%] flex flex-col-reverse items-center sm:px-5 md:flex-row-reverse gap-0 m-auto">
            <div className="flex flex-col items-start justify-start w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-[60%]">
              <div
                className="flex flex-col items-start justify-start h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
              >
                <div className="w-full lg:h-full flex flex-col  justify-end mx-[2vw] gap-5">
                  <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] text-left break-words w-[50%]">
                    Loyalty System
                  </p>
                  <p className="text-sm lg:text-[1.1vw] leading-[150%] pr-10 text-left break-words w-[90%]">
                    NFTs representing loyalty and reward points can also be
                    created using Lineage Protocol. These NFTs can evolve over
                    time based on customer behavior, spending habits, or other
                    factors, allowing businesses to create a more personalized
                    and engaging loyalty program. This can also enable customers
                    to trade and sell their loyalty points, creating a more
                    liquid market for loyalty and reward programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto flex">
              <div className="block">
                <img
                   src={Chain.estate["Loyalty2"]}
                  className="object-cover rounded-lg  lg:w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
