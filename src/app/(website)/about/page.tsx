'use client';
import React from 'react';
import Image from 'next/image';
import Subscribe from '@/src/web-pages/home/Subscribe';
import { useGetAboutQuery } from '@/src/redux/features/about/aboutApi';
import { imageUrl } from '@/src/redux/features/api/baseApi';

const AboutPage = () => {
      const { data: about } = useGetAboutQuery([]);

      return (
            <>
                  <div className="container text-primaryText mx-auto px-4 py-10">
                        {/* Iterate through the about data */}
                        {about &&
                              about?.map((section) => (
                                    <div key={section._id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                                          {/* Text content */}
                                          <div
                                                className={`${
                                                      section.title === 'Our Story' ? 'lg:order-first' : 'lg:order-last'
                                                }`}
                                          >
                                                <h2 className="text-primary text-2xl font-semibold mb-4">
                                                      {section.title}
                                                </h2>
                                                <p className="text-sm mb-4">{section.description}</p>
                                          </div>

                                          <div
                                                className={`${
                                                      section.title === 'Our Story' ? 'lg:order-last' : 'lg:order-first'
                                                }`}
                                          >
                                                <Image
                                                      src={`${imageUrl}/${section?.image}`}
                                                      alt={section.title}
                                                      className="w-full h-auto object-cover shadow-md"
                                                      width={533}
                                                      height={455}
                                                />
                                          </div>
                                    </div>
                              ))}
                  </div>
                  <Subscribe />
            </>
      );
};

export default AboutPage;
