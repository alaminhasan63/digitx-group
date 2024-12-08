"use client";

// import ContactFrom from '@/components/ContactFrom';
import Link from "next/link";
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
// import contact from "../../../public/contact/contact.jpg";
import contact from "../../../public/contact/contact_form_image.png";
import { contactDetails } from "@/data/CustomData";
import Image from "next/image";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import TitleHeader from "@/components/shared/TitleHeader";
import { FaFileContract } from "react-icons/fa";
import { Headset } from "lucide-react";
// import connectDb from '@/lib/mongodb';
// import axios from 'axios';

const ContactPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = {
    //     name: userName,
    //     email: userEmail,
    //     number: userNumber,
    //     message: userMessage
    // }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        userEmail,
        userNumber,
        userMessage,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setUserName("");
      setUserEmail("");
      setUserNumber("");
      setUserMessage("");
    }
  };

  return (
    <section className="bg-custom-image">
      <div className="bg-gradient-to-b from-[#081127] to-[#D800C2] h-[50vh] flex items-center justify-center">
        <div>
          <h1 className="text-center text-5xl my-auto font-bold text-white">
            Contact
          </h1>
        </div>
      </div>
      <div className="md:max-w-[1240px] mx-auto  ">
        <div className="md:w-5/6 mt-10">
          <TitleHeader
            title="Contact Us"
            secondaryTitle="Get In Touch With Us"
            description="I am available for freelance or remote work. Connect with me via and call in to my account or contact with me a send message."
          />
        </div>
        <div className=" grid gap-10 mt-20 font-light md:grid-cols-2 md:mx-0 mx-6 ">
          <div className="md:block flex justify-center items-center ">
            <Fade delay={50} direction="left">
              <Image className="md:w-[70%] rounded-md" src={contact} alt="" />
            </Fade>
          </div>
          <Fade delay={50} direction="right">
            <div className="contact_form_background p-6">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center gap-5">
                  <FormControl className="mb-1 w-full" isRequired>
                    <FormLabel className="font-medium text-sm ">
                      YOUR NAME
                    </FormLabel>
                    <Input
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      className="w-full p-3 my-3 text-sm text-center duration-300 transform bg-transparent border rounded-full  outline-none focus:scale-105  placeholder:font-normal"
                      type="text"
                      name="user_name"
                      placeholder="Enter your name"
                    />
                  </FormControl>

                  <FormControl className="mb-1 w-full" isRequired>
                    <FormLabel className="font-medium text-sm">
                      YOUR EMAIL
                    </FormLabel>
                    <Input
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
                      className="w-full p-3 my-3 text-sm text-center duration-300 transform bg-transparent border rounded-full  outline-none focus:scale-105  placeholder:font-normal"
                      type="email"
                      name="user_email"
                      placeholder="Enter your name"
                    />
                  </FormControl>
                </div>
                <FormControl className="mb-1" isRequired>
                  <FormLabel className="font-medium text-sm">
                    MOBILE NUMBER
                  </FormLabel>
                  <Input
                    onChange={(e) => setUserNumber(e.target.value)}
                    value={userNumber}
                    className="w-full p-3 my-3 text-center mb-5 text-sm duration-300 transform bg-transparent border rounded-full  outline-none placeholder:font-normal focus:scale-105 "
                    type="text"
                    name="mobile_number"
                    placeholder="Enter your question"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel className="font-medium text-sm">
                    YOUR MESSAGE
                  </FormLabel>

                  <textarea
                    onChange={(e) => setUserMessage(e.target.value)}
                    value={userMessage}
                    className="w-full h-40 p-3 text-sm text-center my-3 duration-300 transform bg-transparent border rounded-lg  outline-none placeholder:font-normal focus:scale-105 "
                    name="message"
                    placeholder="Type your massage"
                  ></textarea>
                  <input
                    className="w-full hover:scale-105 transform duration-500  cursor-pointer  p-4 rounded-full border hover:text-[#4e4feb] font-bold "
                    type="submit"
                    value="SEND MESSAGE"
                  />
                </FormControl>
              </form>
              <div className="mt-3 text-lg font-medium">
                {error &&
                  error.map((e) => (
                    <div
                      className={`${
                        success ? "text-green-800" : "text-red-600"
                      } px-5 py-2`}
                    >
                      {e}
                    </div>
                  ))}
              </div>
            </div>
          </Fade>
        </div>
        <section className="my-16">
          <div className="md:flex justify-between items-center  md:mx-0 mx-8">
            <div className="w-full ">
              <div className="grid  gap-5 text-sm grid-cols-2 items-center mt-4 ">
                {contactDetails.map((detail) => (
                  <div className="md:flex md:flex-row flex-col  gap-4 items-center">
                    <Image
                      className="md:w-16  md:h-16 w-12 h-12 md:mb-0 mb-2"
                      src={detail.image}
                      alt=""
                    />
                    <div>
                      <h4>{detail.description}</h4>
                      <p>{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex md:mt-0 mt-10 md:ml-16 gap-4 justify-evenly items-center backdrop:blur-sm contact_form_background p-6 w-full">
              <Headset className="w-16 h-16" />
              <div className="w-4/5">
                <h3 className="text-lg font-semibold">Let's Talk</h3>
                <p>I am available for freelance or remote work.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <ContactFrom/> */}
    </section>
  );
};

export default ContactPage;
