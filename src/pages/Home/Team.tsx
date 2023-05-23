import * as Chain from "../../constants/Chain";
import Subscribe from "./subscribe";
interface TeamProps {
  portrait: any;
}

export default function Team(props: TeamProps) {
  const teams = [
    {
      icon: "Wilson",
      name: "Wilson",
      subs: "CEO",
      href: "https://www.linkedin.com/in/wilsontay/"
    },
    {
      icon: "Joel",
      name: "Joel",
      subs: "CFO",
      href: "https://www.linkedin.com/in/joel-ng-25391850/"
    },
    {
      icon: "Iqbal",
      name: "Iqbal",
      subs: "CTO",
      href:"https://www.linkedin.com/in/iqbalbaharum/"
    },
    {
      icon: "Marcus",
      name: "Marcus",
      subs: "COO",
      href:"https://www.linkedin.com/in/marcus-foo-91231760/"
    },
    {
      icon: "Marek",
      name: "Marek",
      subs: "CMO",
      href:"https://www.linkedin.com/in/marekolszewski1/"
    },
    {
      icon: "Joshua",
      name: "Joshua",
      subs: "Project Lead",
      href:"https://www.linkedin.com/in/joshua-ng-94766599/"
    },
  ];
  return (
    <div className={` w-full h-auto text-white text-center relative`} id="team">
      <div id="overlay"></div>
      <div className="gotMaxWidthTeam w-full h-full flex flex-col justify-start gap-7 ">
        <p className="text-3xl lg:text-[3vw] md:text-6xl leading-[150%] font-Slider">
          Lineage Protocol Team
        </p>
        {/* <p className="md:text-[1.4vw] leading-[150%] md:w-[60%] px-10 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          nulla interdum, luctus mauris semper, maximus orci. Nulla vel magna
          ligula.
        </p> */}

        {/* <!-- row --> */}
        <div className={`flex-wrap flex-row -mx-4 justify-center ${props.portrait? "px-[3%]" : "px-[8%] 2xl:px-[2%]"} py-10 mt-10 flex`}>
          {teams &&
            teams.map((item, index) => (
              <div
                className="flex-shrink max-w-full w-1/2 sm:w-1/2 md:w-5/12 lg:w-1/6 z-10"
                key={`about-${index}`}
              >
                <div
                  className="relative hover-grayscale-0 wow fadeInUp mx-2"
                  data-wow-duration="1s"
                >
                  <div className="relative overflow-hidden px-6">
                    <img
                      alt="test"
                      src={Chain.team[item.icon]}
                      className="max-w-full w-full h-auto mx-auto object-cover"
                    />
                  </div>
                  <div className="pt-6 text-center">
                    <p className="text-2xl lg:text-lg leading-[120%] font-bold mb-2 font-Slider tracking-[0.02em]">
                      {item.name}
                    </p>
                    <p className="text-lg lg:text-base font-bold mb-4 tracking-[0.04em] leading-[150%]">
                      {item.subs}
                    </p>
                    <p className="text-lg font-bold mb-2 tracking-[0.04em] leading-[150%]">
                      <a
                        href={item.href}
                        target="__blank"
                        className="inline-flex items-center lg:text-base !font-bold py-[0.5rem] lg:py-1 px-10 lg:px-[1.8vw] font-Slider gotShadow border border-white rounded-full"
                      >
                        Linkedin
                        <img
                          alt="test"
                          src={Chain.team["Linkedin"]}
                          className="max-w-full w-full h-auto mx-auto object-cover pl-2"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Subscribe portrait={props.portrait}/>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
