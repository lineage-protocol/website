import * as Chain from "../../constants/Chain";
interface EstateProps {
  portrait: any;
}
export default function Estate(props:EstateProps) {
  return (
    <div className={`w-full ${props.portrait ? "h-auto" : "lg:h-screen"} max-h-screen text-white text-center relative`}>
      <div className="w-full h-full flex flex-col justify-start gap-10 ">
        <p className="text-5xl md:text-[4.5vw] leading-[150%] font-Slider break-words w-1/2 text-left px-4 pb-3 md:text-center md:w-full">
          Real Estate
        </p>

        {/* <!-- row --> */}

        <div className=" w-full md:w-1/2 mx-auto">
          <img
            src={Chain.estate["Estate"]}
            alt="logo"
            className="w-full scale-[2] md:scale-[1.1]"
          />
        </div>        
        <p className="md:text-[1.1vw] leading-[150%] md:w-[80%] px-10 mx-auto">
          NFTs representing real estate or motor vehicles can also be created
          using Lineage Protocol. These NFTs can evolve over time based on
          ownership changes, improvements made, or other factors. This enables a
          more transparent and secure process for buying and selling real estate
          or motor vehicles, as well as creating a more liquid market for these
          assets.
        </p>
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
