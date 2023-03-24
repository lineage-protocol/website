import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

interface MasterProps {
  children: any;
  navbar?: boolean;
}

export default function Master(props: MasterProps) {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center overflow-hidden">
        
        <Navbar />
        {props.children}
        <Footer/>
      </div>
    </>
  );
}
