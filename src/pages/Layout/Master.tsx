import React from "react";
import Navbar from "../../components/Navbar";
import ReactTooltip from "react-tooltip";
import BackgroundContainer from "../../components/BackgroundContainer";

interface MasterProps {
  children: any;
  navbar?: boolean;
}

export default function Master(props: MasterProps) {
  return (
    <>
      <ReactTooltip
        place="bottom"
        effect="solid"
        backgroundColor="white"
        textColor="var(--primary)"
      />
      <BackgroundContainer />
      <div className="w-full min-h-screen flex flex-col justify-start items-center overflow-x-hidden">
        {(props.navbar ?? false) && <Navbar />}
        {props.children}
      </div>
    </>
  );
}
