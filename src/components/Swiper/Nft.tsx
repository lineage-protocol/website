
import parse from 'html-react-parser';

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
  type: any
}
export default function NftMob(props: NftMobProps) {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper md:hidden"
      >
        {props.nft &&
          props.nft.map((item:any, index:any) => (
            <SwiperSlide className='mobile'>
              <div
                className="flex-shrink max-w-full w-full"
                key={`about-${index}`}
              >
                <div
                  className={`relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp ${props.type==="info" && ("boxAdd h-64 py-4")}`}
                  data-wow-duration="1s"
                >
                  <div className={`relative overflow-hidden  ${props.type==="info" && ("hidden")}`}>
                    <img
                      alt="test"
                      src={Chain.nft[item.icon]}
                      className="max-w-full w-full h-auto mx-auto "
                    />
                  </div>
                  <div className={`pt-6 text-center text-lg ${props.type==="info" && ("!text-left pl-5 !text-xl")}`}>
                    <p className="leading-normal font-bold mb-1 uppercase  font-Slider">
                      {parse(item.name)}
                    </p>
                  </div>

                  <p className={`text-base leading-normal font-bold mb-1 mt-3 text-left px-5 break-words lg:w-10/12 ${props.type!=="info" && ("hidden")}`}>
                      {item.desc}
                    </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
