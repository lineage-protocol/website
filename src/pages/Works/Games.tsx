import * as Chain from "../../constants/Chain";
interface InfoProps {
  portrait: any;
}
export default function Games(props: InfoProps) {
  return (
    <div className={`gotMaxWidth ${props.portrait ? "h-auto pb-10" : "lg:h-screen 2xl:h-auto" } w-full text-white text-center relative`}>
      <div className="w-full h-full flex flex-col justify-center gap-5 ">
        <p className="text-3xl lg:text-7xl leading-[90%] font-Slider">Games</p>

        {/* <!-- row --> */}

        <div className="hidden md:block w-1/2 mx-auto">
          <img
            src={Chain.games["Desktop"]}
            alt="logo"
            className="w-full px-5"
          />
        </div>

        <div className="md:hidden w-full px-5">
          <img
            src={Chain.games["Mobile"]}
            alt="logo"
            className="w-full px-5"
          />
        </div>        
        <p className="lg:text-base leading-[150%] lg:w-[60%] px-10 mx-auto">
          Using Lineage Protocol, game developers can create a more engaging and
          rewarding gaming experience for players. For example, if a player
          completes a difficult challenge in the game, their in-game weapon or
          armor could evolve to become more powerful. This would give the player
          a greater sense of achievement and satisfaction, while also creating a
          more valuable in-game asset.
        </p>
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
