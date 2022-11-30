import React from "react";
import Master from "../Layout/Master";
import About from "./About";
import Image from "../../assets/images/spiral.gif";

import Intro from "./Intro";

export default function Homepage() {
  return (
    <Master>
      <Intro image={Image} />
      <About image={Image} />
    </Master>
  );
}
