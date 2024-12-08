// "use client";

// import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import gamingBanner from "../../../public/bannerImages/GamingWebpage.png";
// import travelAgencyBanner from "../../../public/bannerImages/TravelAgencyWebpage.png";
// import Link from "next/link";
// import { ButtonIcon } from "@radix-ui/react-icons";
// import "./Styles/Banner.css";

// const Banner = () => {
//   return (
//     <section>
//       <div
//         style={{
//           background: `linear-gradient(to bottom, #021834, #221834), lightgray 50% / cover no-repeat`, // Color as background image
//           // Remove any other background properties like backgroundImage or backgroundPosition
//         }}
//         className=" h-[90vh] text-white relative"
//       >
//         <div className="flex ">
//           <div className="w-1/2 flex flex-col gap-6 ml-[10rem] justify-center  h-[90vh]">
//             <div className="">
//               <ButtonIcon className="w-24 h-24 " />
//             </div>
//             <div>
//               <h2 className="text-6xl font-bold">Develop</h2>
//               <h2 className="text-4xl  font-semibold">Your Vision</h2>
//             </div>

//             <div className="">
//               <p className="font-bold text-xl ">
//                 Our web development company offers a comprehensive range of
//                 services
//               </p>
//             </div>
//           </div>
//           <div className="w-1/2  h-[90vh]">
//             <div className="">
//               <Image
//                 className="h-[80vh] w-[50vh] absolute top-0 right-[8rem]"
//                 src={travelAgencyBanner}
//                 alt=""
//               />
//               <Image
//                 className="h-[80vh] z-10 w-[50vh] absolute bottom-0 right-[20rem]"
//                 src={gamingBanner}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="absolute bottom-0 ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="700"
//               viewBox="0 0 910 167"
//               fill="none"
//             >
//               <g filter="url(#filter0_b_1_481)">
//                 <path
//                   d="M789.338 50.5693C760.014 20.7771 719.961 4 678.158 4H4V163H900L789.338 50.5693Z"
//                   fill="rgba(0,32, 70, 1), rgba(16, 194, 234, 1), rgba(0, 82, 180, 1)"
//                   fill-opacity="0.8"
//                 />
//                 <path
//                   d="M2 4V2H4H678.158C720.497 2 761.064 18.9922 790.763 49.1664L901.425 161.597L904.775 165H900H4H2V163V4Z"
//                   stroke="url(#paint0_linear_1_481)"
//                   stroke-width="4"
//                 />
//               </g>
//               <defs>
//                 <filter
//                   id="filter0_b_1_481"
//                   x="-44"
//                   y="-44"
//                   width="997.55"
//                   height="255"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feGaussianBlur in="BackgroundImageFix" stdDeviation="22" />
//                   <feComposite
//                     in2="SourceAlpha"
//                     operator="in"
//                     result="effect1_backgroundBlur_1_481"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="effect1_backgroundBlur_1_481"
//                     result="shape"
//                   />
//                 </filter>
//                 <linearGradient
//                   id="paint0_linear_1_481"
//                   x1="522.092"
//                   y1="-48.2556"
//                   x2="496.138"
//                   y2="163.1"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stop-color="#83E9FF" />
//                   <stop offset="1" stop-color="#A3EEFF" stop-opacity="0" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

// {
//   /* <div className="w-full h-[90vh] relative">
//         <div className="before:content-[''] w-full h-[90vh] relative before:absolute before:bg-[#00000042] before:z-20 before:top-0 before:right-0 before:left-0 before:bottom-0">
//           <Image fill={true} src={banner} alt="" />
//         </div>

//         <div className="absolute z-30 max-w-[1240px] w-full mx-auto top-5 left-0 right-0  text-white h-full flex justify-center flex-col">
//           <h2 className="pl-2 text-4xl font-bold leading-snug sm:text-6xl text-secondary">
//             We create memorably <br />
//             <span className="text-primary">digital experiences.</span>
//           </h2>
//           <p className="my-5 ml-3 text-xl leading-relaxed">
//             Discover the chef in you with our mouth-watering recipe <br /> Where
//             passion meets flavor in every dish <br /> Taste the difference of
//             our handcrafted dishes
//           </p>

//           <Link href="/blog">
//             <button className="btn px-4 py-3 ml-3 rounded font-semibold w-[150px]">
//               Explore
//             </button>
//           </Link>
//         </div>
//       </div> */
// }

import bannerBg from '../../../public/bannerImages/BannerBg.png';
import clientPic1 from '../../../public/bannerImages/clientPic1.jpeg';
import clientPic2 from '../../../public/bannerImages/clientPic2.jpg';
import clientPic3 from '../../../public/bannerImages/clientPic3.jpg';
import clientPic4 from '../../../public/bannerImages/clientPic4.jpg';
import Image from 'next/image';
import SearchField from './Searchfield';
import BannerSvg from './BannerSvg';
import BannerCard from './BannerCard';

const Banner = () => {
  return (
    <div className="pb-96 relative">
      <div className="flex justify-evenly mx-auto flex-row-reverse items-center relative">
        <div className="relative z-20">
          <Image className="w-[650px] h-[600px]" src={bannerBg} alt="" />

          <Image
            className="w-[300px] h-[300px] rounded-full absolute bottom-32 left-32"
            src={clientPic3}
            alt=""
          />
          <Image
            className="w-[100px] h-[100px] rounded-full absolute top-14 left-52"
            src={clientPic1}
            alt=""
          />
          <Image
            className="w-[200px] h-[200px] rounded-full absolute top-10 left-96"
            src={clientPic2}
            alt=""
          />
          <Image
            className="w-[150px] h-[150px] rounded-full absolute bottom-32 left-[460px]"
            src={clientPic4}
            alt=""
          />
        </div>

        <div className="z-20">
          <h1 className="text-3xl font-bold text-white pb-5">
            Professional Services For <br />
            Our Precious Clients
          </h1>
          <SearchField />
        </div>


        <div className="absolute z-10 top-52">
          <BannerSvg></BannerSvg>
        </div>
      </div>
      <div className="z-20 absolute bottom-48 left-20">
        <BannerCard />
      </div>
      <div className="z-20 absolute bottom-10 left-[650px]">
        <BannerCard />
      </div>
      <div className="z-20 absolute -bottom-20 right-24">
        <BannerCard />
      </div>
    </div>
  );
};

export default Banner;
