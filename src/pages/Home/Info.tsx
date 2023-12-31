import parse from 'html-react-parser';
import NftMob from '../../components/Swiper/Nft';
import infoBg from "../../assets/images/background/infoBg.webp";


interface InfoProps {
  portrait: any;
}
export default function Nft(props: InfoProps) {
  const nft = [
    {
      name: "Data Key",
      desc: "A data key is a cryptographic unique identifier assigned to each NFT that enables linking with its associated metadata."
    },
    {
      name: "DHT",
      desc: "A lookup service that matches data keys and public keys to metadata CIDs, allowing for the management of decentralized metadata."
    },
    {
      name: "IPFS DAG",
      desc: "A service that converts metadata to a DAG format, making it easier to store and retrieve metadata using IPFS.<br/><br/>"
    },
    {
      name: "Cryptographic<br/>Keypair",
      desc: "For secure metadata signing and verification.<br/><br/><br/><br/>"
    },
  ];
  return (
    <div className={`${props.portrait ? "h-auto" : "lg:h-screen 2xl:h-auto" } w-full  text-white text-center m-auto relative`}>
      <div className='absolute -top-[25vw] w-full h-full 2xl:mt-0'>
        <img src={infoBg} alt="infoBg" className='w-full 2xl:h-full 2xl:object-cover'/>
      </div>
      <div className="gotMaxWidthInfo w-full h-full flex flex-col gap-7 m-auto  items-center justify-center">
        {/* <!-- row --> */}
        <div className=" flex-wrap flex-row -mx-4  px-[4%] py-10 mt-10 justify-center items-center gap-6 hidden md:flex">
          {nft &&
            nft.map((item, index) => (
              <div
                className={`flex  items-center flex-shrink max-w-full w-2/3 sm:w-1/2 md:w-5/12 lg:w-[21%] boxAdd  2xl:h-[500px] py-5 
                ${props.portrait ? "h-[300px]" : "h-[25vw]" }`}
                key={`about-${index}`}
              >
                <div
                  className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp "
                  data-wow-duration="1s"
                >
                  <div className="pt-6 text-center">
                    <p className={`text-2xl 2xl:text-4xl font-bold mb-1 font-Slider text-left px-10 ${item.name === "Networking" ? ("leading-[5rem]") : ("leading-normal")}`}>
                      {parse(item.name)}
                    </p>
                    <p className={` text-sm 2xl:text-xl leading-[150%] font-bold mb-1 text-left px-10 break-words w-[95%]`}>
                      {parse(item.desc)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <NftMob nft={nft} type={"info"}/>
        {/* <a
          href="https://login.rebelpoker.io/signup"
          className="!font-bold py-[0.5rem] px-10 lg:px-7   font-Slider gotShadow border border-white rounded-full lg:w-1/6 mx-auto"
        >
         See More Information
        </a> */}
      </div>

      <div className="text-center w-full relative "></div>
    </div>
  );
}
