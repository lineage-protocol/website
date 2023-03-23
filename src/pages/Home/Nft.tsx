import * as Chain from "../../constants/Chain";
export default function Nft() {
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
    <div className="w-full h-screen !max-h-screen text-white text-center">
      <div className="w-full h-full flex flex-col justify-start gap-7 ">
        <p className="text-3xl md:text-6xl leading-[150%] font-Slider">
          Unleashing the true potential of NFTs
        </p>
        <p className="md:text-[1.4vw] leading-[150%] md:w-[60%] px-10 mx-auto">
          Lineage empowers limitless NFT possibilities with dynamic evolution
          and collaborative ownership
        </p>
        <a
          href="https://login.rebelpoker.io/signup"
          className="!font-bold py-[0.5rem] px-10 lg:px-7   font-Slider gotShadow border border-white rounded-full w-1/6 mx-auto hidden md:block"
        >
          How it Works
        </a>
        <div className="relative hidden md:block">
          <img
            alt="test"
            src={Chain.lines["LineL"]}
            className="max-w-full h-56 mx-auto absolute left-40 -top-36"
          />
          <img
            alt="test"
            src={Chain.lines["LineR"]}
            className="max-w-full h-56 mx-auto absolute right-40 -top-36"
          />
        </div>
        {/* <!-- row --> */}
        <div className="flex flex-wrap flex-row -mx-4 justify-center px-[4%] py-10 mt-10">
          {nft &&
            nft.map((item, index) => (
              <div
                className="flex-shrink max-w-full w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/5"
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
                    <p className="text-lg leading-normal font-bold mb-1 uppercase">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
