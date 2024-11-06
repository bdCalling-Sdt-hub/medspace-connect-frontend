'use client';
import { useGetSupportQuery } from '@/src/redux/features/support/supportApi';
import Subscribe from '@/src/web-pages/home/Subscribe';
import Image from 'next/image';
import React from 'react';
import { BsMailbox } from 'react-icons/bs';
import { FaMapLocationDot } from 'react-icons/fa6';
import { LuPhoneCall } from 'react-icons/lu';

const SupportPage = () => {
      const { data: supportData } = useGetSupportQuery([]);

      // Function to select icon based on the type
      const getIcon = (type: string) => {
            switch (type) {
                  case 'Location':
                        return (
                              <FaMapLocationDot
                                    size={45}
                                    color="white"
                                    className="group-hover:scale-110 transition-all duration-200"
                              />
                        );
                  case 'Email':
                        return (
                              <BsMailbox
                                    size={45}
                                    color="white"
                                    className="group-hover:scale-110 transition-all duration-200"
                              />
                        );
                  case 'Get In Touch':
                        return (
                              <LuPhoneCall
                                    size={45}
                                    color="white"
                                    className="group-hover:scale-110 transition-all duration-200"
                              />
                        );
                  default:
                        return null;
            }
      };

      return (
            <>
                  <div className="bg-[#5BB4E8] md:bg-[#F7F7F7] py-20 relative min-h-[90vh] overflow-hidden">
                        <div className="text-center relative z-[3] space-y-8 text-white">
                              <h1 className="text-4xl ">Help & Support</h1>
                              <p className="text-lg leading-4">Get in touch and let us know how we can help</p>
                        </div>

                        {/* Background images */}
                        <Image
                              height={1000}
                              width={1000}
                              className="w-full hidden md:block absolute top-[10%] z-[1] object-cover"
                              src={'/assets/support2.svg'}
                              alt=""
                        />
                        <Image
                              height={1000}
                              width={1000}
                              className="w-full hidden md:block absolute top-[0] z-[2] object-cover"
                              src={'/assets/support1.svg'}
                              alt=""
                        />

                        {/* Dynamic support items */}
                        <div className="container z-[3] relative my-20 items-center mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4 pb-20">
                              {supportData?.map((item) => (
                                    <div
                                          key={item._id}
                                          className="relative bg-white group w-[319px] h-[220px] rounded-2xl mx-auto flex items-center justify-center"
                                    >
                                          {/* Floating icon */}
                                          <div className="bg-transparent p-3 absolute -translate-x-1/2 left-1/2 -top-16 rounded-full">
                                                <div className="w-fit h-fit rounded-full bg-[#5BB4E8] p-2">
                                                      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-secondary p-2">
                                                            {getIcon(item.type)} {/* Dynamically rendered icon */}
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Info container */}
                                          <div className="text-center">
                                                <h1 className="text-[#00809E] text-2xl">{item.title}</h1>
                                                <p className="text-primaryText text-[14px] leading-[21px] font-normal">
                                                      {item.description}
                                                </p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
                  <Subscribe />
            </>
      );
};

export default SupportPage;
