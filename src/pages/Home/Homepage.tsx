import  { useState, useEffect } from "react";
import Master from "../Layout/Master";
import Decentralized from "./Decentralized";
import Info from "./Info";

import Intro from "./Intro";
import Nft from "./Nft";
import Team from "./Team";

export default function Homepage() {

  const [portrait, setPortrait] = useState(false);

  // console.log("portrait", portrait);
  useEffect(() => {
    setPortrait(window.matchMedia("(orientation: portrait)").matches);
    window.matchMedia("(orientation: portrait)").matches;
  }, [portrait]);
  return (
    <div className="homepageBody">
      <Master>
        <Intro portrait={portrait} />
        <Nft portrait={portrait}/>
        <Info portrait={portrait}/>
        <Decentralized portrait={portrait}/>
        <Team />
      </Master>
    </div>
  );
}
