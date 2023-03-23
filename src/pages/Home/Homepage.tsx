import Master from "../Layout/Master";
import Decentralized from "./Decentralized";
import Info from "./Info";

import Intro from "./Intro";
import Nft from "./Nft";

export default function Homepage() {
  return (
    <Master>
      <Intro />
      <Nft  />
    </Master>
  );
}
