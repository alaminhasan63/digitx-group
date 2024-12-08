import React from "react";
import {
  MdAppSettingsAlt,
  MdDesignServices,
  MdDeveloperMode,
} from "react-icons/md";
import { RiSeoFill } from "react-icons/ri";
import { SiAdobeindesign, SiMarketo } from "react-icons/si";

const OurService = () => {
  return (
    <div className="container mt-20  overflow-auto px-3 mb-12">
      <h1 className="text-4xl text-center font-semibold mb-3">
        Services We Provide
      </h1>
      <p className="text-center mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="grid md:grid-cols-3 gap-10 items-center max-w-[980px] mx-auto md:mt-[100px]">

        <div className="text-white text-center border cursor-pointer hover:bg-gradient-to-t from-[#D800C2] to-[#15295B] duration-300 md:h-[200px] rounded-md p-4">
          <MdDeveloperMode className="md:text-7xl text-2xl md:mt-10 block mx-auto" />
          <hr className="my-2 md:my-4" />
          <h1 className="text-base font-bold">Web Development</h1>
        </div>


        <div className="text-white text-center border cursor-pointer hover:bg-gradient-to-t from-[#D800C2] to-[#15295B] duration-300 md:h-[200px] rounded-md p-4">
          <MdDesignServices className="md:text-7xl text-2xl md:mt-10 block mx-auto" />
          <hr className="my-2 md:my-4" />
          <h1 className="text-base font-bold">Graphic Design</h1>
        </div>


        <div className="text-white border text-center cursor-pointer hover:bg-gradient-to-t from-[#D800C2] to-[#15295B] duration-300 md:h-[200px] rounded-md p-4">
          <SiMarketo className="md:text-7xl text-2xl md:mt-10 block mx-auto" />
          <hr className="my-2 md:my-4" />
          <h1 className="text-base font-bold">Digital Marketing</h1>
        </div>


        <div className="text-white border text-center cursor-pointer hover:bg-gradient-to-t from-[#D800C2] to-[#15295B] duration-300 md:h-[200px] rounded-md p-4">
          <RiSeoFill className="md:text-7xl text-2xl md:mt-10 block mx-auto" />
          <hr className="my-2 md:my-4" />
          <h1 className="text-base font-bold">SEO</h1>
        </div>


        <div className="text-white border text-center cursor-pointer hover:bg-gradient-to-t from-[#D800C2] to-[#15295B] duration-300 md:h-[200px] rounded-md p-4">
          <MdAppSettingsAlt className="md:text-7xl text-2xl md:mt-10 block mx-auto" />
          <hr className="my-2 md:my-4" />
          <h1 className="text-base font-bold">App Development</h1>
        </div>

        <div className="text-white border text-center cursor-pointer hover:bg-gradient-to-t from-[#D800C2] to-[#15295B] duration-300 md:h-[200px] rounded-md p-4">
          <SiAdobeindesign className="md:text-7xl text-2xl md:mt-10 block mx-auto" />
          <hr className="my-2 md:my-4" />
          <h1 className="text-base font-bold">UI/UX Designing</h1>
        </div>
      </div>
    </div>
  );
};

export default OurService;
