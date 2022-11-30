import React from "react";

interface AboutToolTipItemProps {
  header: string;
  content: string;
}
export default function AboutToolTipItem(props: AboutToolTipItemProps) {
  return (
    <div className="w-[200px] sm:w-[300px] flex flex-col gap-2 sm:gap-3 p-3">
      <div className="text-md sm:text-lg uppercase tracking-wide font-extrabold text-center">
        {props.header}
      </div>

      <div>{props.content}</div>
    </div>
  );
}
