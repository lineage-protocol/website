import React from "react";
import Navbar from "../../components/Navbar";

export default function Master(props: { children: any }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      <Navbar />
      <div className="w-full h-full">{props.children}</div>
    </div>
  );
}
