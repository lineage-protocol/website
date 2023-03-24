import * as Chain from "../../constants/Chain";
export default function Games() {
  return (
    <div className="w-full lg:h-screen lg:max-h-screen text-white text-center relative">
      <div className="w-full h-full flex flex-col justify-start gap-10 ">
        <p className="text-3xl lg:text-[4.5vw] leading-[150%] font-Slider">Games</p>

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
        <p className="lg:text-[1.1vw] leading-[150%] lg:w-[60%] px-10 mx-auto">
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
