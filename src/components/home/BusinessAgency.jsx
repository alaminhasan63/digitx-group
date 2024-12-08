import React from "react";
import business from "../../../public/business/businessSec.png";
import shadow from "../../../public/business/Ellipse 14.png";
import Image from "next/image";
import { PiBookmarkSimpleFill } from "react-icons/pi";

const BusinessAgency = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-10 px-3 ">
      {/*------TUHIN ADDED----*/}
      <div className="mb-[75px] md:ml-[50px]">
        <div className="flex gap-4 items-center">
          <hr className="w-[70px] h-[8px] bg-[#D800C2]" />
          <h1 className="font-semibold my-3 text-sm">Our Business Agency</h1>
        </div>
        <h1 className="text-3xl font-bold">
          The Right People For <br /> Your Busines
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-[150px] overflow-hidden">
        <div className="">
          <Image
            className=" md:w-[430px] w-[200px] rounded-full absolute md:left-[200px]"
            src={shadow}
            alt=""
          />
          <Image
            className="border-[#D800C2] border-2 relative rounded-full md:w-[430px]"
            src={business}
            alt=""
          />
        </div>
        <div>
          <div className="mt-10">
            <div className="flex gap-5 items-center hover:bg-fuchsia-600 duration-300 cursor-pointer rounded-md p-3 mb-3 shadow-sm shadow-black/30">
              <div className="bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full">
                <PiBookmarkSimpleFill className="text-7xl text-white p-5 " />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  If you are going to use a passage
                </h1>
                <p>
                  Lorem Ipsum is not simply random text Lorem ipsum, dolor sit
                  amet?
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center hover:bg-fuchsia-600 duration-300 cursor-pointer shadow-sm shadow-black/30 rounded-md p-3 mb-3">
              <div className="bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full">
                <PiBookmarkSimpleFill className="text-7xl text-white p-5 " />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  If you are going to use a passage
                </h1>
                <p>
                  Lorem Ipsum is not simply random text Lorem ipsum, dolor sit
                  amet?
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center hover:bg-fuchsia-600 duration-300 cursor-pointer shadow-sm shadow-black/30 rounded-md p-3 mb-3">
              <div className="bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full">
                <PiBookmarkSimpleFill className="text-7xl text-white p-5 " />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  If you are going to use a passage
                </h1>
                <p>
                  Lorem Ipsum is not simply random text Lorem ipsum, dolor sit
                  amet?
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center hover:bg-fuchsia-600 duration-300 cursor-pointer shadow-sm shadow-black/30 rounded-md p-3">
              <div className="bg-gradient-to-t from-[#D800C2] to-[#15295B] rounded-full">
                <PiBookmarkSimpleFill className="text-7xl text-white p-5 " />
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  If you are going to use a passage
                </h1>
                <p>
                  Lorem Ipsum is not simply random text Lorem ipsum, dolor sit
                  amet?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
};

export default BusinessAgency;
