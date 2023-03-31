import * as Chain from "../constants/Chain";

const footer = [
  {
    title: "Landings",
    subs: [
      {
        name: "Home",
        href: "#",
      },
      {
        name: "Products",
        href: "#",
      },
      {
        name: "Services",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    subs: [
      {
        name: "Home",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Services",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    subs: [
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Products",
        href: "#",
      },
      {
        name: "Services",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-transparent pt-28 pb-6 px-5 w-full">
      <div className=" px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 flex flex-col gap-4">
            <div className="group pb-6">
              <a href="/">
                <img
                  src={Chain.icon["Footer"]}
                  alt="logo"
                  className="w-3/5 md:w-1/3 2xl:w-1/4"
                />
              </a>
            </div>
          </div>
          <div className="">
            <div className="">
              <a              
                href="mailto: contact@lineageprotocol.com"
                className="uppercase  lg:text-xl !font-bold py-[0.5rem] lg:py-[0.7vw] px-10 lg:px-[1.8vw]   font-Slider gotShadow border border-white rounded-full lg:w-auto lg:max-w-[60%] text-center md:text-xl px-10 
                md:absolute md:right-10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center my-6  2xl:my-0">
          <div className="w-full md:w-1/2 px-4 ">
            <div className="text-sm lg:text-lg text-blueGray-500 font-semibold py-1 font-Lexend">
              2023.All rights reserved.
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mx-auto text-center">
            <div className="flex mt-2 space-x-6 text-gray-600 justify-end">
              <a
                className="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Chain.social["Twitter"]} alt="logo" className="" />
              </a>
              <a
                className="hover:opacity-75"
                href="https://twitter.com/LineageProtocol"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img src={Chain.social["Github"]} alt="logo" className="" /> */}
              </a>
              <a
                className="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img src={Chain.social["Discord"]} alt="logo" className="" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
