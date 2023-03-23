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
                  className="w-3/5 md:w-1/3"
                />
              </a>
            </div>

            <p className="text-sm lg:text-[1.1vw] mt-0 mb-2 text-blueGray-600 font-Lexend break-words w-full lg:w-8/12 leading-[150%] tracking-[0.04em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget nulla interdum, luctus mauris semper, maximus orci. Nulla vel
              magna ligula.
            </p>
            <a
              href="#"
              className="uppercase !font-bold py-[0.8rem]  font-Slider gotShadow border border-white rounded-full lg:w-auto lg:max-w-[30%] text-center md:text-xl "
            >
              Contact Us
            </a>
          </div>
          <div className="w-full lg:w-6/12 lg:px-4 mt-10 lg:mt-0">
            <div className="flex flex-wrap items-top mb-6">
              {footer &&
                footer.map((item, index) => (
                  <div
                    className="w-1/2 lg:w-4/12 px-4 mr-auto lg:ml-auto mb-3 lg:mb-0"
                    key={index}
                  >
                    <p
                      className={`text-2xl font-bold mb-5 font-Slider text-left `}
                    >
                      {item.title}
                    </p>

                    <ul className="list-unstyled flex flex-col gap-4">
                      {item.subs &&
                        item.subs.map((subs, index1) => (
                          <li key={index1}>
                            <a
                              className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base
                              font-lexend tracking-[0.04em]"
                              href={subs.href}
                            >
                              {subs.name}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-1/2 px-4 ">
            <div className="text-sm text-blueGray-500 font-semibold py-1 font-Lexend">
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
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Chain.social["Github"]} alt="logo" className="" />
              </a>
              <a
                className="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Chain.social["Discord"]} alt="logo" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
