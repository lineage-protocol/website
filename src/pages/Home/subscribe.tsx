import * as Chain from "../../constants/Chain";
import BGRight from "../../assets/images/spiral.gif";
interface TeamProps {
  portrait: any;
}

export default function Subscribe(props: TeamProps) {
  return (
    // <div className="gotMaxWidthTeam w-full h-full flex flex-col justify-center gap-7 mx-auto ">
    //   <div className="flex flex-row p-10 w-1/2">
    //     <div className="">
    //       <img src={BGRight} alt="test" className=" spiralGif w-[60%]" />
    //     </div>
    //     <div className="">
    //       <img src={BGRight} alt="test" className=" spiralGif w-[60%]" />
    //     </div>
    //   </div>
    // </div>
    <section>
      <div className="mx-auto px-4 py-32 lg:flex lg:items-center w-full md:w-[80%]">
        <div className="mx-auto max-w-5xl text-center w-full ">
          <div className="flex flex-col md:flex-row gap-14 md:gap-4">
            <div className="md:w-1/2">
              <img src={BGRight} alt="test" className=" spiralGif" />
            </div>
            <div className="md:w-1/2 z-10">
              <div className="flex flex-col gap-4">
                <p className="text-3xl lg:text-6xl md:text-4xl leading-[120%] font-Slider text-left break-words w-[100%]">
                  Subscribe and stay up to date
                </p>
                <p className="md:text-[17px] leading-[150%]  text-left">
                  Be the first to know about the latest developments, features,
                  and updates in the Lineage Protocol ecosystem.
                </p>

                <div>
                  <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between w-full gap-3">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email Address"
                      className="text-black mt-1 w-full  border-gray-200 shadow-sm sm:text-sm p-3 rounded-full"
                    />

                    <a
                      href="mailto: contact@lineageprotocol.com"
                      className="uppercase  lg:text-base !font-bold py-[0.5rem] lg:py-[0.7vw] 2xl:py-4 lg:px-[1.8vw]   font-Slider gotShadow border border-white rounded-full lg:w-auto lg:max-w-[60%] text-center md:text-xl px-10 
        
                "
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
