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
    setPortrait(window.matchMedia("(orientation: portrait)").matches);
    window.matchMedia("(orientation: portrait)").matches;
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const screenWidth = window.innerWidth;
    if(isMac && screenWidth <= 1440) {
      console.log("isMac", isMac)
      setMac(isMac)
    }
  });
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
