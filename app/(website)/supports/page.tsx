import Subscribe from "@/src/pages/home/Subscribe";
import React from "react";
import { BsMailbox } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";

const SupportPage = () => {
  return (
    <>
      <div className="bg-[#5BB4E8] py-20">
        <div className="text-center space-y-8 text-white">
          <h1 className="text-4xl ">Help & Support</h1>
          <p className="text-lg leading-4">
            Get in touch and let us know how we can help
          </p>
        </div>
        {/* contact option */}
        <div className="container my-20 items-center mx-auto  grid lg:grid-cols-3 grid-cols-1 gap-4 pb-20">
          <div className="relative bg-white group w-[319px] h-[220px] rounded-2xl mx-auto flex items-center justify-center">
            {/* float icon */}
            <div className="bg-transparent  p-3 absolute -translate-x-1/2  left-1/2 -top-16 rounded-full">
              <div className="w-fit h-fit rounded-full bg-[#5BB4E8] p-2">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-secondary p-2">
                  <FaMapLocationDot
                    size={45}
                    color="white"
                    className="group-hover:scale-110 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* info container */}
            <div className="text-center">
              <h1 className="text-[#00809E] text-2xl">Location</h1>
              <p className="text-primaryText text-[14px] leading-[21px] font-normal">
                Al. Brucknera Aleksandra 63, <br /> Wrocław 51-410
              </p>
            </div>
          </div>
          <div className="relative bg-white group w-[319px] h-[220px] rounded-2xl mx-auto flex items-center justify-center">
            {/* float icon */}
            <div className="bg-transparent  p-3 absolute -translate-x-1/2  left-1/2 -top-16 rounded-full">
              <div className="w-fit h-fit rounded-full bg-[#5BB4E8] p-2">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-secondary p-2">
                  <BsMailbox
                    size={45}
                    color="white"
                    className="group-hover:scale-110 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* info container */}
            <div className="text-center">
              <h1 className="text-[#00809E] text-2xl">Email</h1>
              <p className="text-primaryText text-[14px] leading-[21px] font-normal">
                Al. Brucknera Aleksandra 63, <br /> Wrocław 51-410
              </p>
            </div>
          </div>
          <div className="relative bg-white group w-[319px] h-[220px] rounded-2xl mx-auto flex items-center justify-center">
            {/* float icon */}
            <div className="bg-transparent  p-3 absolute -translate-x-1/2  left-1/2 -top-16 rounded-full">
              <div className="w-fit h-fit rounded-full bg-[#5BB4E8] p-2">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-secondary p-2">
                  <LuPhoneCall
                    size={45}
                    color="white"
                    className="group-hover:scale-110 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* info container */}
            <div className="text-center">
              <h1 className="text-[#00809E] text-2xl">Get In Touch</h1>
              <p className="text-primaryText text-[14px] leading-[21px] font-normal">
                Al. Brucknera Aleksandra 63, <br /> Wrocław 51-410
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default SupportPage;
