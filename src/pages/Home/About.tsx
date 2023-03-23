

export default function About() {
  const tooltips = [
    {
      classNames: `
        md:right-[20%] md:bottom-[5%]
        right-[20%]
      `,
      title: "Unlocking New NFT Utilities",
      tooltip: {
        place: "bottom",
        header: "Unlocking new NFT utilities",
        content:
          "NFT Collections using Lineage Protocol can now integrate seamlessly across any network. With our Myriad feature, NFTs can now have multiple “profiles” with various representations (2D/3D images) to be used for integration with different Dapps e.g. metaverse, gameFi projects etc.",
      },
    },
    {
      classNames: `
        xl:left-[30%] xl:bottom-[5%]
        lg:left-[35%] lg:top-[5%]
        md:left-[20%] md:bottom-[35%]
        left-[20%] bottom-[25%]
      `,
      title: "Dynamic NFT",
      tooltip: {
        place: "bottom",
        header: "Dynamic NFT",
        content:
          "Dynamic NFTs are NFTs that can adapt and change upon meeting certain conditions. For example, a game character levelling up upon defeating a number of monsters. NFTs can now be much more than just static images. ",
      },
    },
    {
      classNames: `
        xl:right-[30%] xl:top-[5%]
        lg:right-[35%] lg:top-[5%]
        md:right-[20%] md:top-[32%]
        right-[20%] top-[25%]
      `,
      title: "Gasless network",
      tooltip: {
        place: "top",
        header: "Gasless network",
        content:
          "Lineage Network will be a gas-free network as we are not a smart contract based network. This also allows us to be chain agnostic, capable of connecting to all networks. ",
      },
    },
    {
      classNames: `
        xl:left-[20%] xl:top-[5%]
        lg:left-[20%] lg:top-[5%]
        md:left-[25%] md:top-[5%]
        left-[25%] top-[5%]
      `,
      title: "Metadata management",
      tooltip: {
        place: "top",
        header: "Metadata management",
        content:
          "Lineage Explorer, a blockchain-like explorer catered to NFT metadata will introduce users to NFT metadata management. NFT metadata can now be tracked just like any other token. ",
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
