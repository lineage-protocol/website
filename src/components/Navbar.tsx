import * as Chain from "../constants/Chain";
import Marquee from "react-fast-marquee";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "About", href: "/#", current: true },
  {
    name: "Blog",
    href: "#",
    current: false,
  },
  { name: "How it works", href: "/work", current: false },
  {
    name: "Team",
    href: "#team",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function loginCheck(className: any) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-row gap-2">
        <a
          href="#"
          className="!font-bold py-[0.5rem] px-10 lg:px-7   font-Slider gotShadow border border-white rounded-full"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black shadow w-screen z-20 fixed">
      {({ open }) => (
        <>
          <div className="bg-black w-full p-3 text-center font-Lexend">
            {/* <p className="hidden lg:block">
              ComposeDB: A new composable graph database powered by Ceramic. Get
              Started
            </p>
            <p className="md:hidden">
              <Marquee gradient={false}>
                ComposeDB: A new composable graph database powered by Ceramic.
                Get Started
              </Marquee>
            </p> */}
          </div>
          <div className="max-w-full mx-auto px-0 lg:px-12 pr-4">
            <div className="relative flex items-center justify-between p-3">
              <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center xl:justify-center sm:justify-start h-full">
                <div className="group">
                  <a href="/">
                    <img
                      src={Chain.icon["Logo"]}
                      alt="logo"
                      className="w-[60%] md:w-full hidden md:block"
                    />
                  </a>
                  <a href="/">
                    <img
                      src={Chain.icon["LogoMobile"]}
                      alt="logo"
                      className="w-[80%] md:w-full md:hidden"
                    />
                  </a>
                </div>

                {/* Desktop nav items */}
                <div className="hidden xl:block w-full">
                  <div className="flex space-x-4 h-full w-full justify-center -ml-[4rem]">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-white hover:text-[#6C95CD]"
                            : "text-white  hover:text-[#6C95CD] hover:-mt-1",
                          "px-3 py-2 flex justify-center items-center font-Rubik text-sm md:text-[1.3vw] font-Slider leading-[23px] tracking-[0.02em]"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {loginCheck(
                "absolute inset-y-0 right-0 hidden xl:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              )}
            </div>
          </div>

          {/* Mobile nav items */}
          <Disclosure.Panel className="sm:hidden h-screen">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-primary text-white"
                      : "text-gray-300 hover:bg-primary hover:bg-opacity-70 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {loginCheck("flex items-center pr-2 justify-center")}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
