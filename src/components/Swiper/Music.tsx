import parse from "html-react-parser";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as Chain from "../../constants/Chain";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

interface NftMobProps {
  nft: any;
  type?: any;
}
export default function MusicSwiper(props: NftMobProps) {
    const isMobile = window.innerWidth <= 768; // change the breakpoint as needed
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 2.2 : 4}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper px-6 md:px-0"
        
      >
        {props.nft &&
          props.nft.map((item: any, index: any) => (
            <SwiperSlide>
              <div
                className="flex-shrink max-w-full w-full"
                key={`about-${index}`}
              >
                <img
                  src={Chain.music[item.icon]}
                  alt="logo"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
