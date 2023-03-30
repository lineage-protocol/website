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
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    setPortrait(mediaQuery.matches);

    const handleOrientationChange = () => {
      setPortrait(mediaQuery.matches);
    };
  
    mediaQuery.addListener(handleOrientationChange);
  
    return () => {
      mediaQuery.removeListener(handleOrientationChange);
    };
  }, [portrait]);
  return (
    <div className="workBody">
      <Master>
        <Intro portrait={portrait}/>
        <Games portrait={portrait}/>
        <Sports portrait={portrait}/>
        <Loyalty portrait={portrait}/>
        <Estate portrait={portrait}/>

        <Music/>
      </Master>
    </div>
  );
}
