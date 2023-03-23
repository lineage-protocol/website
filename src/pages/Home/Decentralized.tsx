import * as Chain from "../../constants/Chain";
import parse from 'html-react-parser';
export default function Decentralized() {
  const nft = [
    {
      name: "Fast<br/>Transactions",
      desc: "Lineage leverages a decentralized middleware network to ensure fast transaction processing. This allows for efficient data transfer between NFT owners, developers, and other stakeholders.",
    },
    {
      name: "Chain<br/>Agnostics",
      desc: "Lineage is designed to work with multiple blockchain networks, making it more flexible and adaptable to different blockchain ecosystems.",
    },
    {
      name: "Secure and<br/> Transparent",
      desc: "Lineage’s decentralized architecture ensures that NFT metadata is stored securely and transparently on the blockchain network. The metadata is stored as a JSON object and can be updated by the NFT owner as needed.",
    },
    {
      name: "High<br/>Scalability",
      desc: "Lineage's decentralized infrastructure enables it to scale easily, allowing for more NFTs and metadata to be stored and managed as the ecosystem grows. The protocol uses a custom Fluence network node for storing metadata, and also provides a Data Formatter service for formatting metadata to various standards, further enhancing scalability.",
    },
    {
        name: "Interoperable",
        desc: "Lineage allows for interoperability between different blockchain networks and applications, enabling data sharing and collaboration across different ecosystems.",
      },
      {
        name: "Low Cost",
        desc: "Lineage offers a cost-effective solution for NFT metadata management, with low fees and other associated costs. This is achieved through the use of decentralized infrastructure and middleware network, which reduces the need for expensive centralized systems and third-party services.",
      },
  ];
  return (
    <div className="w-full h-auto text-white text-center">
      <div className="w-full h-full flex flex-col justify-start gap-7 ">
        <p className="font-Slider text-2xl lg:text-[5.5vw] leading-[120%] w-[80%] mx-auto">
          The first decentralized metadata network
        </p>
        <p className="text-sm lg:text-[1.4vw] leading-[150%] lg:w-[60%] px-10 mx-auto">
          Lineage Protocol will reinvent the way NFT metadata is handled by
          creating a decentralized network focused solely on NFT metadata.
        </p>

        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className=" flex flex-col   mx-auto sm:py-12 lg:py-24 lg:flex-row">
            <div className="flex items-start mt-8 lg:-mt-5">
              <img
                src={Chain.decentralized["World"]}
                alt=""
                className="object-cover gradient-mask-b-60 hidden lg:block"
              />
               <img
                src={Chain.decentralized["WorldMob"]}
                alt=""
                className="object-cover gradient-mask-b-60 lg:hidden w-full"
              />
            </div>
            <div className="flex flex-wrap flex-row -mx-4  pl-[4%] py-10 mt-10 lg:text-left lg:w-1/2 w-full">
              {nft &&
                nft.map((item, index) => (
                  <div
                    className="flex-shrink max-w-full w-full sm:w-1/2 py-5 "
                    key={`about-${index}`}
                  >
                    <div
                      className="relative overflow-hidden mb-5 hover-grayscale-0 wow fadeInUp"
                      data-wow-duration="1s"
                    >
                      <div className="pt-6 text-center">
                        <p
                          className={`text-3xl font-bold mb-1 font-Slider text-left px-5 ${
                            item.name === "Networking"
                              ? "leading-[5rem]"
                              : "leading-normal"
                          }`}
                        >
                          {parse(item.name)}
                        </p>
                        <p className="lg:text-[0.80vw] leading-[150%] tracking-[0.05em] font-bold mb-1 text-left px-5 break-words lg:w-10/12 opacity-[0.7]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        {/* <div className="relative">
          <img
            alt="test"
            src={Chain.lines["LineL"]}
            className="max-w-full h-56 mx-auto absolute left-40 -top-36"
          />
          <img
            alt="test"
            src={Chain.lines["LineR"]}
            className="max-w-full h-56 mx-auto absolute right-40 -top-36"
          />
        </div> */}
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
