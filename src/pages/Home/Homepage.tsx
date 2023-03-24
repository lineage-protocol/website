import Master from "../Layout/Master";
import Decentralized from "./Decentralized";
import Info from "./Info";

import Intro from "./Intro";
import Nft from "./Nft";
import Team from "./Team";

export default function Homepage() {
  return (
    <div className="homepageBody">
      <Master>
        <Intro />
        <Nft />
        <Info />
        <Decentralized />
        <Team />
      </Master>
    </div>
  );
}
