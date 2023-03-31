import NftMob from "../../components/Swiper/Nft";
import * as Chain from "../../constants/Chain";

interface NftProps {
  portrait: any;
}
export default function Nft(props: NftProps) {
  const nft = [
    {
      icon: "Games",
      name: "Games",
    },
    {
      icon: "Sports",
      name: "Sports",
    },
    {
      icon: "Loyalty",
      name: "Loyalty System",
    },
    {
      icon: "State",
      name: "Real Estate",
    },
    {
      icon: "Music",
      name: "Music",
    },
  ];
  return (
    <div className="gotMaxWidth w-full  text-white text-center">
      <div className="w-full h-full flex flex-col justify-start gap-7  lg:mt-44 ">
        <p className={`${props.portrait ? "lg:text-4xl" : "lg:text-7xl"} text-3xl  leading-[150%] font-Slider`}>
          Unleashing the true potential of NFTs
        </p>
        <p className="lg:text-base leading-[150%] md:w-[60%] px-10 mx-auto">
          Lineage empowers limitless NFT possibilities with dynamic evolution
          and collaborative ownership
        </p>
        <a
          href="/work"
          className="lg:text-sm !font-bold py-[0.5rem] lg:py-[0.7vw] px-10 lg:px-[1.8vw] font-Slider gotShadow border border-white rounded-full lg:w-1/6 mx-auto "
        >
          How It Works
        </a>
        <div className="relative hidden md:block">
          <img
            alt="test"
            src={Chain.lines["LineL"]}
            className={`max-w-full h-48 mx-auto absolute  ${props.portrait ? "-top-[12.5vw] left-32 md:left-20 md:-top-[15.5vw]" : "-top-36 left-44"}`}
          />
          <img
            alt="test"
            src={Chain.lines["LineR"]}
            className={`max-w-full h-48 mx-auto absolute ${props.portrait ? "right-32 -top-[12.5vw] md:-top-[15.5vw] md:right-20" : "right-44 -top-36"}`}
          />
        </div>
        {/* <!-- row --> */}
        <div className="flex-wrap flex-row -mx-4 justify-center px-[7%] py-10 mt-10 hidden md:flex">
          {nft &&
            nft.map((item, index) => (
              <div
                className="flex-shrink max-w-full w-2/3 sm:w-1/2 md:w-4/12 lg:w-1/5"
                key={`about-${index}`}
              >
                <div
                  className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="relative overflow-hidden px-6">
                    <img
                      alt="test"
                      src={Chain.nft[item.icon]}
                      className="max-w-full w-full h-auto mx-auto "
                    />
                  </div>
                  <div className="pt-6 text-center">
                    <p className="text-lg lg:text-lg leading-[120%] tracking-[0.02em] font-bold mb-1 uppercase font-Slider">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <NftMob nft={nft} type={"nft"}/>
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
