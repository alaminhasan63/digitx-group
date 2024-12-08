"use client";
import Image from "next/image";
import React from "react";

import webDevelopment from "../../../public/our-servies/Web App Development.png";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoNodejs, BiLogoJavascript } from "react-icons/bi";
import serviceBanner from "../../../public/our-servies/servicebanner.jpg";

const OurServicePage = () => {
  return (
    <main className="">
      <div className="bg-gradient-to-b from-[#081127] to-[#D800C2] h-[50vh] flex items-center justify-center">
        <div>
          <h1 className="text-center text-5xl my-auto font-bold text-white">
            Our Services
          </h1>
        </div>
      </div>

      <div class="bg-custom-image py-20 mt-10 w-full ">
        <div className="md:flex items-center justify-around mx-16 mb-16">
          <div className=" md:w-[32%]">
            <h1 className="pt-10 md:pt-0 text-3xl md:text-5xl text-white font-bold ">
              UI, UX Design
            </h1>
            <p className="text-white text-base font-bold  mt-6">
              When UX helps users accomplish their goals, UI creates a
              connection between the user and the service provider. Our UI
              designers aim to build keen brand awareness to help your company
              improve customer satisfaction, improve user interaction, as well
              as boost your business grow and enhance.
            </p>
            <img
              className="mt-6 mb-6"
              src="https://i.ibb.co/7vBxc4r/image3.png"
              alt=""
            />
            <button className=" bg-gradient-to-r from-[#15295B] to-[#841F9D]  text-white font-bold py-2 px-6 rounded-3xl">
              Explore
            </button>
          </div>
          <div className="md:w-[500px]">
            <img
              className=""
              src="https://i.ibb.co/Brh42zx/Desktop-App-Development.png"
              alt=""
            />
          </div>
        </div>
        <div className="md:flex items-center justify-around mx-16 mb-16">
          <div className="md:w-[500px]">
            <img
              className=""
              src="https://i.ibb.co/7kJvDGZ/MERN-Stack-Developer.png"
              alt=""
            />
          </div>
          <div className=" md:w-[32%]">
            <h1 className="pt-10 md:pt-0 text-3xl md:text-5xl text-white font-bold ">
              Web Development
            </h1>
            <p className="text-white text-base font-bold  mt-6">
              Web development refers to building, creating, and maintaining
              websites. It includes aspects such as web design, web publishing,
              web programming, and database management. While the terms web
              developer and web designer are often used synonymously, they do
              not mean the same thing.
            </p>
            <img
              className="mt-6 mb-6"
              src="https://i.ibb.co/7vBxc4r/image3.png"
              alt=""
            />
            <button className=" bg-gradient-to-r from-[#15295B] to-[#841F9D]  text-white font-bold py-2 px-6 rounded-3xl">
              Explore
            </button>
          </div>
        </div>
        <div className="md:flex items-center justify-around mx-16 mb-16">
          <div className=" md:w-[32%]">
            <h1 className="pt-10 md:pt-0 text-3xl md:text-5xl text-white font-bold ">
              Frontend Development
            </h1>
            <p className="text-white text-base font-bold  mt-6">
              What are web design services? A web design service provides you
              with a customized website design thats perfect for your business
              or personal site. They will work with you to create a design that
              matches your brand, while giving your customers a seamless user
              experience that will delight them.
            </p>
            <img
              className="mt-6 mb-6"
              src="https://i.ibb.co/7vBxc4r/image3.png"
              alt=""
            />
            <button className=" bg-gradient-to-r from-[#15295B] to-[#841F9D]  text-white font-bold py-2 px-6 rounded-3xl">
              Explore
            </button>
          </div>
          <div className="md:w-[500px]">
            <img
              className=""
              src="https://i.ibb.co/qY7GkFx/Web-App-Development.png"
              alt=""
            />
          </div>
        </div>
        <div className="md:flex items-center justify-around mx-16 mb-16">
          <div className="md:w-[500px]">
            <img
              className=""
              src="https://i.ibb.co/RgVCV00/1624939521-1-Mobile-App-Development.png"
              alt=""
            />
          </div>
          <div className=" md:w-[32%]">
            <h1 className="pt-10 md:pt-0 text-3xl md:text-5xl text-white font-bold ">
              Wordpress Development
            </h1>
            <p className="text-white text-base font-bold  mt-6">
              Web development refers to building, creating, and maintaining
              websites. It includes aspects such as web design, web publishing,
              web programming, and database management. While the terms web
              developer and web designer are often used synonymously, they do
              not mean the same thing.
            </p>
            <img
              className="mt-6 mb-6"
              src="https://i.ibb.co/7vBxc4r/image3.png"
              alt=""
            />
            <button className=" bg-gradient-to-r from-[#15295B] to-[#841F9D]  text-white font-bold py-2 px-6 rounded-3xl">
              Explore
            </button>
          </div>
        </div>
      </div>
      <></>
    </main>
  );
};

export default OurServicePage;
