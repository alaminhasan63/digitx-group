import motto from "../../../public/about-us/motto.jpg";
import vision from "../../../public/about-us/vision.png";
import Image from "next/image";

const AboutPage = () => {
  return (
   <>
    <div className="bg-gradient-to-b from-[#081127] to-[#D800C2] h-[50vh] flex items-center justify-center">
      <div>
        <h1 className="text-center text-5xl my-auto font-bold text-white">
          About Us
        </h1>
      </div>
    </div>
    <main className="">
    
    {/* <div>
      <div className="grid items-center gap-4 my-20 md:grid-cols-2">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Our Motto</h2>
          <p className="mb-2">
            1. First of all, become friendly to yourself and have a strong
            will ahead of the illusion
          </p>
          <p className="mb-2">
            2. Individuals become friendly with each other and keep in mind
            continuous employment relationships
          </p>
          <p className="mb-2">
            3. Understand and master the principles of luck, knowledge, and
            body
          </p>
          <p className="mb-2">
            4. Make full use of life navigation to work in a well-balanced
            manner and enjoy life
          </p>
          <p className="mb-2">
            5. Use star observation to train your introspection and appearance
          </p>
          <p className="mb-2">
            6. Look ahead with compassion and make success a habit
          </p>
          <p className="mb-2">7. Circulate brightness and fun to the world</p>
          <p className="mb-2">
            8. Enhance yourself with original methods of existence
          </p>
          <p className="mb-2">9. I keep a promise</p>
          <p className="mb-2">
            10. Know and practice the importance of goodness and compassion
            every day
          </p>
        </div>
        <Image src={motto} alt="" />
      </div>
      <div className="grid items-center gap-10 my-20 md:grid-cols-2">
        <Image src={vision} alt="" />
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Our Vision</h2>
          <p className="mb-2">
            1. Contributing to the world with an attractive and friendly
            organization
          </p>
          <p className="mb-2">
            2. Good care that is passed down from generation to generation
          </p>
          <p className="mb-2">
            3. Coordinating know-how and ideas to solve all poverty and
            difficult trouble
          </p>
          <p className="mb-2">
            4. Share of profits from each period will be donated to
            disaster-stricken areas to assist in reconstruction
          </p>
          <p className="mb-2">
            5. To create world class entrepreneurs from Bangladesh
          </p>
        </div>
      </div>
    </div> */}
    <>
   
    <div className="bg-[#081127] md:p-24 md:flex justify-center items-centers ">
      <div className="pt-44 md:w-[50%] ml-6 ">
        <div className="flex items-center">
          <div className=" w-[80px] h-[5px] mt-1 bg-[#FF00F6]"></div>
          <h3 className="ml-3 text-xl w-[250px] text-white font-semibold">
            About Us
          </h3>
        </div>
        <h1 className="text-3xl  font-semibold text-white mt-5">
          Explore Our Services And <br />
          Boost Your Online Presence
        </h1>
        <p className="text-white md:w-[60%]  mt-5 font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took 
        </p>
        <div className="mt-10 md:flex   ">
          <button className="text-base text-white font-bold mr-3 p-4 bg-gradient-to-r from-[#F07504] to-[#FF00F6] rounded-full w-[150px]">
            Our Mission
          </button>
          <button className="text-base mr-3  text-white font-bold p-4 bg-gradient-to-r from-[#15295B] to-[#841F9D] rounded-full w-[150px]">
            Our Vision
          </button>
          <button className="text-base mt-3 md:mt-0 text-white font-bold p-4 bg-gradient-to-r from-[#15295B] to-[#841F9D] rounded-full w-[150px]">
            Our History
          </button>
        </div>
        <p className="md:w-[50%] text-white font-semibold mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took 
        </p>
      </div>
      <div>
        <img className="w-full" src="https://i.ibb.co/ftf6FYD/about.png" alt="" />
      </div>
    </div>
  </>
  </main>
   </>
  );
};

export default AboutPage;
