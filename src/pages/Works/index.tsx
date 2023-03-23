import Master from "../Layout/Master";
import Games from "./Games";
import Intro from "./Intro";
import Sports from "./Sports";

export default function Works() {
  return (
    <div className="workBody">
      <Master>
        <Intro/>
        <Games/>
        <Sports/>
      </Master>
    </div>
  );
}
