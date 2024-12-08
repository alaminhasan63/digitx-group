import Image from 'next/image';
import cardsvg1 from '../../../public/bannerImages/cardsvg1.png';
import './Styles/BannerCardCss.css';
const BannerCard = () => {
  return (
    <div>
      {/* <div className="">
        <Image src={cardsvg1}></Image> <br />
        <div className="text-white text-center mx-auto">
          <h1 className="border-2 border-b-2 border-l-0 border-r-0 border-t-0">
            CUSTOMIZED SOLUTIONS
          </h1>
        </div>
      </div> */}

      <section className="text-center">
        <section className="mx-auto bannercard-hover w-[250px] h-[310px] group">
          <span className="flex justify-center mx-auto pt-10 pb-3">
            <Image className="w-[60px] h-[80px]" src={cardsvg1}></Image>
          </span>

          <div className="text-white text-center mx-auto">
            <h1 className="text-sm">CUSTOMIZED SOLUTIONS</h1>
            <hr className="text-white w-1/2 font-extrabold text-xl flex justify-center mx-auto text-center mt-3" />
            <h1 className="text-sm text-left pl-4 mt-2">
              Lorem Ipsum is simply dummy text <br />
              of the printing and typesetting <br />
              industry. Lorem Ipsum has been <br />
              the industry’s standard dummy <br />
              text ever.
            </h1>
          </div>
        </section>
      </section>
    </div>
  );
};

export default BannerCard;
