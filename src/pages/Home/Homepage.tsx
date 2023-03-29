import  { useState, useEffect } from "react";
import Master from "../Layout/Master";
import Decentralized from "./Decentralized";
import Info from "./Info";

import Intro from "./Intro";
import Nft from "./Nft";
import Team from "./Team";

export default function Homepage() {

  const [portrait, setPortrait] = useState(false);
  const [mac, setMac] = useState(false);

  // console.log("portrait", portrait);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    setPortrait(mediaQuery.matches);

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const screenWidth = window.innerWidth;
    if(isMac && screenWidth <= 1440) {
      console.log("isMac", isMac)
      setMac(isMac)
    }
  
    const handleOrientationChange = () => {
      setPortrait(mediaQuery.matches);
    };
  
    mediaQuery.addListener(handleOrientationChange);
  
    return () => {
      mediaQuery.removeListener(handleOrientationChange);
    };
  }, [mac, portrait]);
  
  return (
    <div className="homepageBody">
      <Master>
        <Intro portrait={portrait} />
        <Nft portrait={portrait}/>
        <Info portrait={portrait}/>
        <Decentralized portrait={portrait} isMac={mac}/>
        <Team portrait={portrait}/>
      </Master>
    </div>
  );
}
