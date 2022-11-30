import React from "react";
import ReactDOMServer from "react-dom/server";
import AboutToolTipItem from "../../components/AboutToolTipItem";

interface AboutProps {
  image: any;
}

export default function About(props: AboutProps) {
  const tooltips = [
    {
      classNames: `
        md:right-[20%] md:bottom-[5%]
        right-[20%]
      `,
      title: "Unlocking New NFT Utilities",
      tooltip: {
        place: "bottom",
        header: "Remove the constraints",
        content:
          "Fusce in urna non felis euismod pharetra a et turpis. Sed semper sem sed quam viverra, in dictum sapien commodo. ",
      },
    },
    {
      classNames: `
        xl:left-[30%] xl:bottom-[5%]
        lg:left-[35%] lg:top-[5%]
        md:left-[20%] md:bottom-[35%]
        left-[20%] bottom-[25%]
      `,
      title: "Permissionless Data Mapping Network",
      tooltip: {
        place: "bottom",
        header: "Remove the constraints",
        content:
          "Fusce in urna non felis euismod pharetra a et turpis. Sed semper sem sed quam viverra, in dictum sapien commodo. ",
      },
    },
    {
      classNames: `
        xl:right-[30%] xl:top-[5%]
        lg:right-[35%] lg:top-[5%]
        md:right-[20%] md:top-[32%]
        right-[20%] top-[25%]
      `,
      title: "Gasless Network",
      tooltip: {
        place: "top",
        header: "Remove the constraints",
        content:
          "Fusce in urna non felis euismod pharetra a et turpis. Sed semper sem sed quam viverra, in dictum sapien commodo. ",
      },
    },
    {
      classNames: `
        xl:left-[20%] xl:top-[5%]
        lg:left-[20%] lg:top-[5%]
        md:left-[25%] md:top-[5%]
        left-[25%] top-[5%]
      `,
      title: "Introducing a new form of metadata management",
      tooltip: {
        place: "top",
        header: "Remove the constraints",
        content:
          "Fusce in urna non felis euismod pharetra a et turpis. Sed semper sem sed quam viverra, in dictum sapien commodo. ",
      },
    },
  ];
  return (
    <div
      id="about"
      className="w-full h-screen !max-h-screen text-white flex flex-col justify-center"
    >
      {/* About */}
      <div className="h-[80%] flex justify-center items-center">
        <img
          src={props.image}
          alt="Lineage"
          className="mix-blend-screen -rotate-45"
        />

        <div className="absolute w-full max-w-wrapper h-[94%] sm:h-[90%] flex flex-col justify-center items-center">
          {tooltips &&
            tooltips.map((item, index) => (
              <div
                key={`about-tooltip-${index}`}
                className={`uppercase relative border border-gray-700 rounded-lg p-1 sm:p-6 w-[130px] sm:w-[250px] text-[12px] sm:text-[16px] text-center ${item.classNames}`}
                data-html={true}
                data-place={item.tooltip.place}
                data-tip={ReactDOMServer.renderToString(
                  <AboutToolTipItem
                    header={item.tooltip.header}
                    content={item.tooltip.content}
                  />
                )}
              >
                {item.title}
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="h-[10%] flex flex-col justify-center items-center tracking-widest text-center sm:text-base text-sm">
        <div className="uppercase sm:block hidden">Email Us</div>
        <a
          href="mailto:contact@lineageprotocol.com"
          className="absolute top-[195%]"
        >
          contact@lineageprotocol.com
        </a>
      </div>
    </div>
  );
}
