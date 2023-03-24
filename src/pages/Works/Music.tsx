import ChartsSwiper from "../../components/Swiper/Charts";
import MusicSwiper from "../../components/Swiper/Music";
import * as Chain from "../../constants/Chain";
export default function Music() {
  const musicList = [
    {
      icon: "Song1",
      title: "Song Title 1",
      name: "Singer Name",
      time: "2:34:45",
    },
    {
      icon: "Song2",
      title: "Song Title 2",
      name: "Singer Name",
      time: "2:34:45",
    },
    {
      icon: "Song1",
      title: "Song Title 1",
      name: "Singer Name",
      time: "2:34:45",
    },
    {
      icon: "Song2",
      title: "Song Title 2",
      name: "Singer Name",
      time: "2:34:45",
    },
  ];

  const releaseList = [
    {
      icon: "Release1",
    },
    {
      icon: "Release2",
    },
    {
      icon: "Release3",
    },
    {
      icon: "Release4",
    },
    {
      icon: "Release2",
    },
    {
      icon: "Release3",
    },
  ];
  return (
    <div className="w-full lg:h-screen lg:max-h-screen text-white text-center relative">
      <div className=" pt-12 pr-0 pb-14 pl-0 ">
        <div
          className="w-full pt-4  pb-6 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 lg:py-12 sm:space-y-8 lg:space-y-16
      max-w-full"
        >
          <div className="flex flex-col-reverse items-center sm:px-5 lg:flex-row gap-10">
            <div className="flex flex-col w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 lg:mb-0 lg:w-1/2">
              <div
                className="flex flex-col h-full space-y-3 transform lg:pr-10 
            lg:space-y-5"
              >
                <div className="w-full lg:h-full flex flex-col lg:mx-[5vw] gap-5 mx-5">
                  <p className="font-Slider text-3xl lg:text-[5vw] leading-[120%] text-left">
                    Music
                  </p>
                  <p className="text-sm lg:text-[1.1vw] leading-[150%] pr-10 text-left break-words md:w-[80%]">
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
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-3">
                <p className="font-Slider text-3xl lg:text-[1.4vw] leading-[120%] text-left mx-5">
                  Top charts
                </p>                
                <div className="flex-shrink max-w-full w-full  gap-1 flex">
                  <ChartsSwiper nft={musicList} />
                </div>

                <p className="font-Slider text-3xl lg:text-[1.4vw] leading-[120%] text-left mt-5 mx-5">
                  New releases.
                </p>
                <div className="flex-shrink max-w-full w-full  gap-1 flex">
                  <MusicSwiper nft={releaseList} />
                </div>
                <div
                  className="box bg-music-rgba backdrop-filter backdrop-blur-[15px] -mt-[7vw] lg:-mt-[3vw] z-10  rounded-xl overflow-hidden lg:-ml-10
                 relative"
                >
                  <div className=" z-10 h-full rounded-xl  flex justify-start ">
                    <div className="p-5 flex flex-row w-full">
                      <div className="flex-shrink max-w-full w-full  ">
                        <div
                          className="relative overflow-hidden hover-grayscale-0 wow fadeInUp  gap-3 px-5
                            h-full 
                            flex flex-row "
                          data-wow-duration="1s"
                        >
                          <img
                            src={Chain.music["Song1"]}
                            alt="logo"
                            className="lg:w-[7vw]"
                          />
                          <div className="flex flex-col my-auto">
                            <p className="text-base lg:text-[1.4vw] leading-[120%] text-left px-1">
                              Test1
                            </p>
                            <p className="text-base lg:text-[1vw] leading-[120%] text-left px-1 text-white opacity-60">
                              Test1
                            </p>
                          </div>
                        </div>                        
                      </div>
                      <div className="flex-shrink max-w-full w-full  ">
                        <div
                          className="relative overflow-hidden hover-grayscale-0 wow fadeInUp  gap-3 px-5
                            h-full justify-end
                            flex flex-row "
                          data-wow-duration="1s"
                        >
                          <img
                            src={Chain.music["PlayControl"]}
                            alt="logo"
                            className="object-cover w-1/2"
                          />
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
