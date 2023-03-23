import parse from 'html-react-parser';
import NftMob from '../../components/Swiper/Nft';

export default function Nft() {
  const nft = [
    {
      name: "API Hosting",
      desc: "In posuere at tortor quis vulputate. Vivamus arcu lectus, vehicula sed placerat ut, porttitor in leo."
    },
    {
      name: "Event<br/> Storage",
      desc: "In posuere at tortor quis vulputate. Vivamus arcu lectus, vehicula sed placerat ut, porttitor in leo."
    },
    {
      name: "Event<br/> Ordering",
      desc: "In posuere at tortor quis vulputate. Vivamus arcu lectus, vehicula sed placerat ut, porttitor in leo."
    },
    {
      name: "Networking",
      desc: "In posuere at tortor quis vulputate. Vivamus arcu lectus, vehicula sed placerat ut, porttitor in leo."
    },
  ];
  return (
    <div className="w-full lg:h-screen lg:!max-h-screen text-white text-center m-auto ">
      <div className="w-full h-full flex flex-col gap-7 m-auto  items-center justify-center">
        {/* <!-- row --> */}
        <div className=" flex-wrap flex-row -mx-4 justify-center px-[4%] py-10 mt-10 items-center gap-6 hidden md:flex">
          {nft &&
            nft.map((item, index) => (
              <div
                className="flex-shrink max-w-full w-2/3 sm:w-1/2 md:w-5/12 lg:w-[18%] boxAdd h-[25vw] py-5 "
                key={`about-${index}`}
              >
                <div
                  className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="pt-6 text-center">
                    <p className={`text-[1.7vw] font-bold mb-1 font-Slider text-left px-10 ${item.name === "Networking" ? ("leading-[5rem]") : ("leading-normal")}`}>
                      {parse(item.name)}
                    </p>
                    <p className="text-[1.2vw] leading-[150%] font-bold mb-1 text-left px-10 break-words w-[95%]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <NftMob nft={nft} type={"info"}/>
        {/* <a
          href="https://login.rebelpoker.io/signup"
          className="!font-bold py-[0.5rem] px-10 lg:px-7   font-Slider gotShadow border border-white rounded-full lg:w-1/6 mx-auto"
        >
         See More Information
        </a> */}
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
