import * as Chain from "../../constants/Chain";
interface LoyaltyProps {
  portrait: any;
}
export default function Loyalty(props:LoyaltyProps) {
  return (
    <div className={`gotMaxWidth ${props.portrait ? "h-auto" : "lg:h-screen 2xl:h-auto"} w-full lg:max-h-screen text-white text-center relative flex items-center justify-center`}>
      <div className=" pt-12 pr-0 pb-14 pl-0 ">
        <div
          className="max-w-full"
        >
          <div className={`w-full flex flex-col-reverse items-center sm:px-5 md:flex-row-reverse gap-0 m-auto justify-center ${props.portrait ? "justify-center" : ""}`}>
            <div className="flex flex-col items-start justify-start w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-[50%] ">
              <div
                className="flex flex-col items-start justify-start h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
              >
                <div className="w-full lg:h-full flex flex-col  justify-end mx-5 md:mx-[2vw] gap-5">
                  <p className="font-Slider text-3xl lg:text-7xl leading-[120%] text-left break-words md:w-[25vw]">
                    Loyalty System
                  </p>
                  <p className="text-sm lg:text-base leading-[150%] pr-10 text-left break-words lg:w-[550px]">
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
            <div className="w-full md:w-[50%] lg:w-[35%] flex justify-center">
              <div className="block">
                <img
                   src={Chain.estate["Loyalty2"]}
                  className="object-cover rounded-lg  px-16 md:w-[90%] md:m-auto md:px-0 lg:w-full h-full 4k:w-[50vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
