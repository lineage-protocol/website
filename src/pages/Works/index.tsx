import Master from "../Layout/Master";
import Estate from "./Estate";
import Games from "./Games";
import Intro from "./Intro";
import Loyalty from "./Loyalty";
import Music from "./Music";
import Sports from "./Sports";

export default function Works() {
  return (
    <div className="workBody">
      <Master>
        {/* <Intro/>
        <Games/>
        <Sports/>
        <Loyalty/>
        <Estate/> */}
        <Intro/>
        <Music/>
      </Master>
    </div>
  );
}
