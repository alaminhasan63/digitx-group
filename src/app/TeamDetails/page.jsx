import Image from 'next/image';
import userDetail from '../../../public/our-team/user.png';
import starPic from '../../../public/star.png';
import socials from '../../../public/socials.png';

const TeamDetails = () => {
  return (
    <div>
      <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-evenly mx-auto items-center">
        <div>
          <Image width={600} height={600} src={userDetail} alt="Team Detail" />
        </div>
        <div>
          <div className="flex justify-right mx-auto w-full items-center gap-10">
            <svg
              width="80"
              height="80"
              viewBox="0 0 144 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="2" x2="144" y2="2" stroke="#FF00F6" strokeWidth="4" />
            </svg>

            <h1 className="text-white text-xl font-semibold">Our Teams</h1>
          </div>

          <div className="text-4xl text-white font-medium">
            <h1>
              Meet Our Team of <br /> Professionals
            </h1>
          </div>

          <div className="px-2 w-auto border-2 border-white rounded-xl mt-10">
            <div className="px-5 py-5">
              <div className="text-white flex items-center justify-start gap-5 text-left  border-2 border-b-2 border-t-0 border-l-0 border-r-0 border-[#b202a6] pb-6 pl-0 ">
                <Image width={30} height={10} src={starPic} alt="" />
                <h1 className="text-white font-medium text-left text-xl">
                  Information
                </h1>
              </div>

              <div className=" mx-auto">
                <h1 className="text-white text-sm pt-5 text-left">
                  Lorem Ipsum is simply dummy text <br /> of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the <br />{' '}
                  industry’s standard dummy text ever.
                </h1>
                <h1 className="text-white text-sm  text-left pt-10">
                  Lorem Ipsum is simply dummy text <br /> of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the <br />{' '}
                  industry’s standard dummy text ever.
                </h1>
                <h1 className="text-white text-sm  text-left pt-10">
                  Lorem Ipsum is simply dummy text <br /> of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the <br />{' '}
                  industry’s standard dummy text ever.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-white rounded-2xl py-10 px-10 mx-10 mt-20">
        <div className="flex justify-left gap-5 border-2 border-[#b202a6] border-b-2 border-l-0 border-t-0 border-r-0 items-center mx-auto pb-5 px-10">
          <Image width={30} height={10} src={starPic} alt="" />
          <h1 className="text-white text-xl font-semibold">
            Contact Information
          </h1>
        </div>

        <div className="pt-10">
          <div className="flex justify-evenly xl:flex-row lg:flex-row md:flex-col flex-col mx-auto items-center">
            <div>
              <h1 className="text-white text-lg">Email</h1>
              <h1 className="text-white text-sm">info.devsmanbd@gmail.com</h1>

              <div className="mt-8">
                <Image height={40} src={socials} alt="" />
              </div>
            </div>

            <div>
              <h1 className="text-white text-sm pt-5 text-left">
                Lorem Ipsum is simply dummy text <br /> of the printing and
                typesetting industry. <br /> Lorem Ipsum has been the <br />{' '}
                industry’s standard dummy text ever.
              </h1>
            </div>

            <div>
              <h1 className="text-white text-xl font-semibold text-center">
                Phone No.
              </h1>
              <h1 className="text-white text-sm pt-4 font-medium text-center">
                (+021) 8733 2654
              </h1>

              <div className="flex justify-start items-center xl:flex-row lg:flex-row md:flex-col flex-col gap-5">
                <button class="w-[150px] bg-gradient-to-r from-[#15295B] to-[#841F9D] h-[50px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#F07504] before:to-[#FF00F6] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                  Let's Work
                </button>
                <button class="w-[150px] bg-gradient-to-r from-[#15295B] to-[#841F9D] h-[50px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#F07504] before:to-[#FF00F6] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
