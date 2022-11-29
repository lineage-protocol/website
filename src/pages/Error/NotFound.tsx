import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <div className="flex flex-col items-center justify-center mt-10 h-full gap-5 text-gray-800">
        <div className="text-6xl">404</div>
        <div className="text-3xl">Page Not Found!</div>
        <a
          href="/"
          className="px-6 py-3 rounded-md text-white hover:shadow-xl bg-primary hover:bg-primaryLight hover:text-white"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
