import * as Chain from "../../constants/Chain";
interface TeamProps {
  portrait: any;
}

export default function Integrated(props: TeamProps) {
  const projects = [
    {
      image: "Oasis",
      title: "ProjectOasis",
      subs: "A throwback to the good old days where games are light, easy and fun in our 2D metaverse. Participate in DeFi activities and socialize with others in Oasis while immersing yourself in the good old days. ",
    },
    {
      image: "RebelPoker",
      title: "Rebel Poker",
      subs: "RebelPoker is a fully fledged poker provider that is linked to the Solana network, that hosts various poker formats, such as Tournaments, Cash Games, Sit and Go, and potentially access to real-life poker events.",
    },
    
  ];
  return (
    <div className={` w-full h-auto text-white text-center relative`} id="team">
      
      <div className="gotMaxWidthTeam w-full h-full flex flex-col justify-start gap-7 ">
        <p className="text-3xl lg:text-[3vw] md:text-6xl leading-[150%] font-Slider">
        Integrated Projects
        </p>
        {/* <!-- row --> */}
        <div className={`flex-wrap flex-col gap-10 md:gap-0 md:flex-row -mx-4 justify-center ${props.portrait? "px-[3%]" : "px-[8%] 2xl:px-[2%]"} py-10 mt-10 flex`}>
          {projects &&
            projects.map((item, index) => (
              <div
                className={`flex-shrink max-w-full md:w-1/2 ${props.portrait? 'lg:w-1/2':'lg:w-1/2 xl:w-1/3'}`}
                key={`about-${index}`}
              >
                <div
                  className="relative hover-grayscale-0 wow fadeInUp mx-2"
                  data-wow-duration="1s"
                >
                  <div className="relative overflow-hidden px-6">
                    <img
                      alt="test"
                      src={Chain.projects[item.image]}
                      className={`max-w-full  mx-auto object-contain ${props.portrait? 'w-1/2':'w-1/3 lg:w-[50%] xl:w-[75%] lg:h-[250px] '}`}
                    />
                  </div>
                  <div className="pt-6 text-center lg:w-[60%] mx-auto">
                    <p className="text-2xl lg:text-4xl leading-[120%] font-bold mb-2 font-Slider tracking-[0.02em] m-auto md:text-left pl-6 lg:pl-3">
                      {item.title}
                    </p>
                    <p className="text-lg lg:text-base font-bold mb-4 tracking-[0.04em] leading-[150%] m-auto md:text-left break-words w-[350px]">
                      {item.subs}
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
