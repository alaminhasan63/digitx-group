import Image from "next/image";
import footerBg from "../../../public/footerImages/FooterBg.png";
import logo2 from "../../../public/logo/logo2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mt-32 flex justify-center mx-auto">
        <div className="relative lg:w-[1600px] flex justify-center mx-auto">
          <Image src={footerBg} className="md:h-96 h-[800px]" />
          <div className="max-w-[250px] h-[270px] px-10 py-10 bg-[#06021D] rounded-2xl -top-16 absolute left-20">
            <Image
              src={logo2}
              className="w-[90px] h-[20px] flex justify-center mx-auto"
            />{" "}
            <br />
            <h1 className="text-center mx-auto text-xs text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </h1>{" "}
            <br />
            <h1 className="text-xs text-white">
              Jl. Raya Kuta No.70, Kuta <br />
              info.devsmanbd@gmail.com <br />
              (+021) 8733 2654
            </h1>{" "}
          </div>
          <div className="absolute top-60 md:top-20 md:left-[520px] left-10 ">
            <h1 className="text-white text-2xl">Utilities</h1>
            <div className="text-white text-sm pl-5 pt-3">
              <Link href="/">
                <h1 className="pb-3">Home</h1>
              </Link>
              <Link href="/about">
                <h1 className="pb-3">About</h1>
              </Link>
              <Link href="/our-projects">
                <h1 className="pb-3">Our Project</h1>
              </Link>
              <Link href="/OurTeam">
                <h1 className="pb-3">Our Team</h1>
              </Link>
              <Link href="/service">
                <h1 className="pb-3">Service</h1>
              </Link>
            </div>
          </div>
          <div className="absolute top-[15rem] md:top-20 left-[15rem]  md:left-[720px]">
            <h1 className="text-white text-2xl">Legals</h1>
            <div className="text-white text-sm pl-5 pt-3">
              <h1 className="pb-3">Privacy</h1>
              <h1 className="pb-3">Terms</h1>
              <h1 className="pb-3">Fulfillment</h1>
              <h1>FAQ</h1>
            </div>
          </div>
          <div className="absolute top-[30rem] md:top-20 md:left-[920px]">
            <h1 className="text-white text-center md:text-left text-2xl">
              Newsletter
            </h1>
            <div className="pt-5 ">
              <div class="relative rounded-full overflow-hidden bg-white shadow-xl px-8">
                <input
                  type="text"
                  name="text"
                  placeholder="Your Email Address"
                  class="input bg-transparent outline-none border-none pl-0 pr-20 py-3 w-full font-sans text-lg font-semibold"
                />
                <div class="absolute right-2 top-[6px]">
                  <button className="text-white bg-gradient-to-r from-[#15295B] to-[#841F9D] rounded-full py-2 px-4">
                    S U B S C R I B E
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute mx-auto bottom-3 border-2 border-b-0 border-r-0 border-l-0 border-t-2 border-[#D800C2] w-full">
            <div className="md:flex justify-between mx-auto text-white bottom-10 pt-5 px-10">
              <h1 className="mb-5">We Provide High Quality Services To Our Clients</h1>
              <h1>Copyright © 2021 All rights reserved.</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
