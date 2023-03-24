import * as Chain from "../../constants/Chain";
export default function Team() {
  const teams = [
    {
      icon: "Wilson",
      name: "Wilson",
      subs: "CEO",
    },
    {
      icon: "Joel",
      name: "Joel",
      subs: "CFO",
    },
    {
      icon: "Iqbal",
      name: "Iqbal",
      subs: "CTO",
    },
    {
      icon: "Marcus",
      name: "Marcus",
      subs: "COO",
    },
    {
      icon: "Marek",
      name: "Marek",
      subs: "CMO",
    },
    {
      icon: "Joshua",
      name: "Joshua",
      subs: "Project Lead",
    },
  ];
  return (
    <div className="w-full  text-white text-center relative" id="team">
      <div id="overlay"></div>
      <div className="w-full h-full flex flex-col justify-start gap-7 ">
        <p className="text-3xl md:text-6xl leading-[150%] font-Slider">
          Lineage Protocol Team
        </p>
        {/* <p className="md:text-[1.4vw] leading-[150%] md:w-[60%] px-10 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          nulla interdum, luctus mauris semper, maximus orci. Nulla vel magna
          ligula.
        </p> */}

        {/* <!-- row --> */}
        <div className="flex-wrap flex-row -mx-4 justify-center px-[8%] py-10 mt-10 flex">
          {teams &&
            teams.map((item, index) => (
              <div
                className="flex-shrink max-w-full w-1/2 sm:w-1/2 md:w-5/12 lg:w-1/6"
                key={`about-${index}`}
              >
                <div
                  className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp"
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
                    <p className="text-2xl leading-[120%] font-bold mb-1 font-Slider tracking-[0.02em]">
                      {item.name}
                    </p>
                    <p className="text-lg font-bold mb-1 tracking-[0.04em] leading-[150%]">
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
