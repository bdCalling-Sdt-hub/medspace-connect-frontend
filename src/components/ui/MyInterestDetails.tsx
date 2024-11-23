'use client';
import Image from 'next/image';
import React from 'react';
import Profile from '/public/assets/profile.png';
import { Button } from 'antd';
import { TSpace } from '@/src/redux/features/space/spaceApi';
import { imageUrl } from '@/src/redux/features/api/baseApi';
const MyInterestDetails = ({ space }: { space: TSpace }) => (
      <div className="bg-white min-h-full drop-shadow space-y-5 p-8 rounded-xl">
            <h1 className="text-2xl text-primaryText font-semibold">{space?.title}</h1>
            <div className="flex items-center gap-3">
                  <Image
                        height={33}
                        width={33}
                        className="rounded-full size-[33px]"
                        // src={`${imageUrl}/${space.providerId?.profile}`}
                        src={
                              space?.providerId?.profile?.startsWith('https')
                                    ? space?.providerId?.profile
                                    : `${imageUrl}/${space?.providerId?.profile}`
                        }
                        alt="profile"
                  />
                  <h2 className="text-lg text-primaryText">{space?.providerId?.name}</h2>
            </div>

            <div className="h-0.5 w-full bg-primaryText/20"></div>

            <div className="space-y-5">
                  <div className="flex items-center gap-5">
                        <div className="flex w-32 justify-between text-primaryText/60">
                              <p>Price</p>
                              <p>:</p>
                        </div>
                        <p className="text-primaryText">${space?.price}</p>
                  </div>
                  <div className="flex items-center gap-5">
                        <div className="flex w-32 justify-between text-primaryText/60">
                              <p>Practice For</p>
                              <p>:</p>
                        </div>
                        <p className="text-primaryText">{space?.practiceFor}</p>
                  </div>
                  <div className="flex items-center gap-5">
                        <div className="flex w-32 justify-between text-primaryText/60">
                              <p>Facilities</p>
                              <p>:</p>
                        </div>
                        <p className="text-primaryText">
                              {space?.facilities?.map((item, index, array) => (
                                    <span key={item}>
                                          {item}
                                          {index < array.length - 1 && <span className="mx-1">/</span>}
                                    </span>
                              ))}
                        </p>
                  </div>

                  <div className="flex items-center gap-5">
                        <div className="flex w-32 justify-between text-primaryText/60">
                              <p>Opening Date</p>
                              <p>:</p>
                        </div>
                        <p className="text-primaryText">{space?.openingDate}</p>
                  </div>
            </div>

            <div className="h-0.5 w-full bg-primaryText/20 my-4"></div>

            <div className="space-y-6">
                  <div className="flex items-center gap-5">
                        <div className="flex w-32 justify-between text-primaryText/60">
                              <p>Interested From</p>
                              <p>:</p>
                        </div>
                        <p className="text-primary">{space?.interestedSince}</p>
                  </div>
                  <div className="flex items-center gap-5">
                        <div className="flex w-32 justify-between text-primaryText/60">
                              <p>Interested For</p>
                              <p>:</p>
                        </div>
                        <p className="text-primary">{space?.activeSince}</p>
                  </div>
            </div>
      </div>
);

export default MyInterestDetails;
