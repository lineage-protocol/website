import  { useState, useEffect } from "react";
import Master from "../Layout/Master";
import Estate from "./Estate";
import Games from "./Games";
import Intro from "./Intro";
import Loyalty from "./Loyalty";
import Music from "./Music";
import Sports from "./Sports";

export default function Works() {
  const [portrait, setPortrait] = useState(false);

  // console.log("portrait", portrait);
  useEffect(() => {
    setPortrait(window.matchMedia("(orientation: portrait)").matches);
    window.matchMedia("(orientation: portrait)").matches;
  }, [portrait]);
  return (
    <div className="workBody">
      <Master>
        <Intro portrait={portrait}/>
        <Games/>
        <Sports/>
        <Loyalty/>
        <Estate/>

        <Music/>
      </Master>
    </div>
  );
}
