import React, { Fragment } from "react";
import * as Chain from "../constants/Chain";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "About", href: "/#", current: true },
  { name: "Blog", href: "/#", current: false },
  { name: "How it Works", href: "/#", current: false },
  { name: "Team", href: "/#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-black shadow w-screen fixed
    "
    >
      {({ open }) => (
        <>
          <div className="bg-black w-full p-4 text-center">
            ComposeDB: A new composable graph database powered by Ceramic. Get
            Started
          </div>
          <div className="max-w-full mx-auto px-16">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-full">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      src={Chain.icon["Logo"]}
                      alt="join"
                      className=""
                      data-aos="fade-in"
                      data-aos-delay="100"
                      data-aos-once={true}
                    />
                  </a>
                </div>

                {/* Desktop nav items */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 justify-center h-full">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-b border-primary text-primary hover:text-primary"
                            : "text-gray-300 navbar-a hover:text-primaryLight hover:-mt-1",
                          "px-3 py-2 text-sm flex justify-center items-center font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="text-primaryLight rounded-full w-8 h-8 p-[6px] flex justify-center items-center ring-primaryLight ring-1 hover:bg-primaryLight hover:text-white focus:bg-primary focus:text-white focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={faBell}
                    aria-hidden="true"
                    className="w-full h-full"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="text-primaryLight rounded-full w-8 h-8 p-[6px] flex justify-center items-center ring-primaryLight ring-1 hover:bg-primaryLight hover:text-white focus:bg-primary focus:text-white focus:outline-none">
                      <FontAwesomeIcon
                        icon={faUser}
                        aria-hidden="true"
                        className="w-full h-full"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
