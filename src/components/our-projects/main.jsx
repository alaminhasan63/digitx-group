import Image from "next/image";
// import project from "/public/project/ec5-demo-project.jpeg"
import project from "../../../public/project/ec5-demo-project.jpeg";

import { FaGithub, FaLink } from "react-icons/fa";
import { LucideArrowUpRightFromCircle } from "lucide-react";

const Projects = async () => {
  return (
    <div className="container mb-10 text-white">
      <div className="flex items-center gap-3 mt-6">
        <hr className="w-[50px] h-[6px] bg-[#D800C2]" />
        <h2 className="font-bold ">Our Projects</h2>
      </div>

      {/* PROJECT DATA SHOWS SECTION  */}
      <div>
        <div className="flex justify-between max-w-[1200px] mx-auto my-5">
          <h1 className="text-2xl md:ml-[130px] font-bold">Project Name</h1>

          <LucideArrowUpRightFromCircle className="cursor-pointer hover:scale-100 scale-105 duration-300" />
        </div>

        <div className="flex md:flex-row flex-col md:gap-16 max-w-[1200px] mx-auto items-center mt-8">
          <div className="">
            <Image className="rounded-full w-[400px]" src={project} alt="" />
          </div>
          <div className="mt-5">
            <hr className="bg-black md:w-[750px]" />
            <h1 className="my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              libero id atque dolor beatae repudiandae!
            </h1>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>Live Link</p>
              <FaLink />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>GitHub Client</p>
              <FaGithub />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>GitHub Server</p>
              <FaGithub />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
          </div>
        </div>
      </div>
      <div className="md:mt-20">
        <div className="flex justify-between max-w-[1200px] mx-auto my-5">
          <h1 className="text-2xl md:ml-[130px] font-bold">Project Name</h1>

          <LucideArrowUpRightFromCircle className="cursor-pointer hover:scale-100 scale-105 duration-300" />
        </div>

        <div className="flex md:flex-row flex-col md:gap-16 max-w-[1200px] mx-auto items-center mt-8">
          <div className="">
            <Image className="rounded-full w-[400px]" src={project} alt="" />
          </div>
          <div className="mt-5">
            <hr className="bg-black md:w-[750px]" />
            <h1 className="my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              libero id atque dolor beatae repudiandae!
            </h1>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>Live Link</p>
              <FaLink />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>GitHub Client</p>
              <FaGithub />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>GitHub Server</p>
              <FaGithub />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
          </div>
        </div>
      </div>
      <div className="md:mt-20">
        <div className="flex justify-between max-w-[1200px] mx-auto my-5">
          <h1 className="text-2xl md:ml-[130px] font-bold">Project Name</h1>

          <LucideArrowUpRightFromCircle className="cursor-pointer hover:scale-100 scale-105 duration-300" />
        </div>

        <div className="flex md:flex-row flex-col md:gap-16 max-w-[1200px] mx-auto items-center mt-8">
          <div className="">
            <Image className="rounded-full w-[400px]" src={project} alt="" />
          </div>
          <div className="mt-5">
            <hr className="bg-black md:w-[750px]" />
            <h1 className="my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              libero id atque dolor beatae repudiandae!
            </h1>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>Live Link</p>
              <FaLink />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>GitHub Client</p>
              <FaGithub />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
            <div className="flex justify-center my-2 gap-3 items-center">
              <p>GitHub Server</p>
              <FaGithub />
            </div>
            <hr className="bg-black md:w-[550px] mb-3 mx-auto" />
            <hr className="bg-black md:w-[350px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
