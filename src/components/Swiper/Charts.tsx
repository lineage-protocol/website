import parse from "html-react-parser";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as Chain from "../../constants/Chain";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Favourites from "../Favourites";

interface NftMobProps {
  nft: any;
  type?: any;
}
export default function ChartsSwiper(props: NftMobProps) {
  const isMobile = window.innerWidth <= 768; // change the breakpoint as needed
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper px-2 md:px-0"
      >
        {props.nft &&
          props.nft.map((item: any, index: any) => (
            <SwiperSlide>
              <div className="flex-wrap flex-row  mx-6 md:mx-0 px-[1%]  mt-5 flex bg-[#252162] rounded-3xl py-4 md:py-10">
                <div className="flex-shrink max-w-full md:w-1/2  ">
                  <div
                    className="relative overflow-hidden hover-grayscale-0 wow fadeInUp flex flex-col gap-3 px-5 h-full justify-center"
                    data-wow-duration="1s"
                  >
                    <img
                      src={Chain.music[item.icon]}
                      alt="logo"
                      className=" lg:w-full"
                    />
                    <p className="text-base lg:text-[1.4vw] leading-[120%] text-left px-1">
                      {item.title}
                    </p>
                    <p className="text-base lg:text-[1vw] leading-[120%] text-left px-1 text-white opacity-60">
                      {item.name}
                    </p>
                    <p className="text-base lg:text-[1vw] leading-[120%] text-left px-1 text-white mt-4">
                      {item.time}
                    </p>
                  </div>
                </div>
                <div className="">
                  <Favourites/>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
