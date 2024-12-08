import React from 'react';
import Image from 'next/image';
import teamBanner from '../../../public/our-team/teamBanner.png';
import gradientBg from '../../../public/our-team/gradientBg.png';
import userAvatar from '../../../public/our-team/userAvatar.png';
import Navlink from '../../components/shared/Navlink';

const OurTeam = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={teamBanner}
          alt="Team Banner"
          className="opacity-40 w-full"
          layout="responsive"
        />
        <div className="text-white absolute top-56 text-7xl font-semibold left-1/2 transform -translate-x-1/2">
          Our Team
        </div>
      </div>

      <div className="mt-20 mb-20">
        <div
          className="h-auto w-full text-center text-white"
          style={{
            backgroundImage: `url(${gradientBg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="font-medium text-4xl pt-20">Meet Our Clever Team</h1>

          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-5 px-5 pt-20 pb-32">
            <div class="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-800 rounded-lg md:flex-row">
              <div class="flex justify-center items-center w-28 h-28 p-5 bg-gradient-to-r from-[#4CCEFF] to-[#0036A4] rounded-lg hover:-translate-y-10 duration-700 hover:scale-125">
                <Image src={userAvatar}></Image>
              </div>
              <div class="max-w-sm h-auto space-y-3">
                <div class="flex justify-center items-center sm:justify-between">
                  <h2 class="text-white text-2xl font-bold tracking-widest">
                    Team Member Name
                  </h2>
                </div>
                <p class="text-sm text-gray-200">Designation</p>
                <div class="flex gap-6 items-center justify-center">
                  <p class="text-white font-bold text-lg">
                    Team member details
                  </p>
                </div>
                <div class="flex justify-around items-center my-2">
                  <Navlink href="/TeamDetails">
                    <button class="px-2 border-2 border-white p-1 rounded-md text-white font-semibold shadow-lg shadow-white hover:scale-75 duration-500">
                      See Details
                    </button>
                  </Navlink>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-800 rounded-lg md:flex-row">
              <div class="flex justify-center items-center w-28 h-28 p-5 bg-gradient-to-r from-[#4CCEFF] to-[#0036A4] rounded-lg hover:-translate-y-10 duration-700 hover:scale-125">
                <Image src={userAvatar}></Image>
              </div>
              <div class="max-w-sm h-auto space-y-3">
                <div class="flex justify-center items-center sm:justify-between">
                  <h2 class="text-white text-2xl font-bold tracking-widest">
                    Team Member Name
                  </h2>
                </div>
                <p class="text-sm text-gray-200">Designation</p>
                <div class="flex gap-6 items-center justify-center">
                  <p class="text-white font-bold text-lg">
                    Team member details
                  </p>
                </div>
                <div class="flex justify-around items-center my-2">
                  <Navlink href="/TeamDetails">
                    <button class="px-2 border-2 border-white p-1 rounded-md text-white font-semibold shadow-lg shadow-white hover:scale-75 duration-500">
                      See Details
                    </button>
                  </Navlink>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-800 rounded-lg md:flex-row">
              <div class="flex justify-center items-center w-28 h-28 p-5 bg-gradient-to-r from-[#4CCEFF] to-[#0036A4] rounded-lg hover:-translate-y-10 duration-700 hover:scale-125">
                <Image src={userAvatar}></Image>
              </div>
              <div class="max-w-sm h-auto space-y-3">
                <div class="flex justify-center items-center sm:justify-between">
                  <h2 class="text-white text-2xl font-bold tracking-widest">
                    Team Member Name
                  </h2>
                </div>
                <p class="text-sm text-gray-200">Designation</p>
                <div class="flex gap-6 items-center justify-center">
                  <p class="text-white font-bold text-lg">
                    Team member details
                  </p>
                </div>
                <div class="flex justify-around items-center my-2">
                  <Navlink href="/TeamDetails">
                    <button class="px-2 border-2 border-white p-1 rounded-md text-white font-semibold shadow-lg shadow-white hover:scale-75 duration-500">
                      See Details
                    </button>
                  </Navlink>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
