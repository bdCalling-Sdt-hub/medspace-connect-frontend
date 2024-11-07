'use client';
import Link from 'next/link';
import Logo from '/public/assets/logo.svg';
import Image from 'next/image';

import { useGetSocialQuery } from '@/src/redux/features/social/socialApi';
import { imageUrl } from '@/src/redux/features/api/baseApi';

const Footer = () => {
      const { data: socialLinks } = useGetSocialQuery([]);
      return (
            <footer className="bg-[#F4F4F4] py-6 md:h-[264px]">
                  <div className="container mx-auto h-full flex flex-col md:flex-row flex-wrap justify-between items-center space-y-6 md:space-y-0">
                        {/* Logo Section */}
                        <div className="flex justify-center md:justify-start items-center">
                              <Image width={283} height={80} src={Logo} alt="Keven Service Logo" className="mr-4" />
                        </div>

                        {/* Terms, Privacy, FAQ */}
                        <div className="text-primaryText space-y-3 md:space-y-8 text-center md:text-start">
                              <p className="hover:text-primaryText/90 cursor-pointer">
                                    <Link href="/terms-&-condition"> Terms & Conditions</Link>
                              </p>
                              <p className="hover:text-primaryText/90 cursor-pointer">
                                    <Link href="/user-agreement">User Agreement</Link>
                              </p>
                              <p className="hover:text-primaryText/90 cursor-pointer">
                                    <Link href="/faq">FAQ</Link>
                              </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="text-center md:text-start">
                              <h1 className="text-primaryText text-lg my-2">Follow Us</h1>
                              <div className="flex space-x-4">
                                    {socialLinks?.map((item, index) => (
                                          <a
                                                key={index}
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-primaryText/90 transition duration-300"
                                          >
                                                <Image
                                                      width={32}
                                                      height={32}
                                                      src={`${imageUrl}/${item?.icon}`}
                                                      alt="social media icon"
                                                />
                                          </a>
                                    ))}
                              </div>
                        </div>
                  </div>

                  <div className="bg-[#222222] py-3 mt-5 text-[#F7F7F7] text-center flex items-center justify-center">
                        <h1 className="text-sm">© Copyright {new Date().getFullYear()} Medspace Connect, Inc</h1>
                  </div>
            </footer>
      );
};

export default Footer;
