'use client';
import Image from 'next/image';
import React from 'react';
import Profile from '/public/assets/profile.png';
import { Button } from 'antd';
const MyInterestDetails = () => (
    <div className="bg-white min-h-full drop-shadow-xl space-y-5 p-8 rounded-xl">
        <h1 className="text-2xl text-primaryText font-semibold">Doctors Practice Room</h1>
        <div className="flex items-center gap-3">
            <Image height={33} width={33} className="rounded-full" src={Profile} alt="profile" />
            <h2 className="text-lg text-primaryText">Favez Abdualla</h2>
        </div>

        <div className="h-0.5 w-full bg-primaryText/20"></div>

        <div className="space-y-6">
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60 w-32">Regular Price</p>
                <p className="text-[#4E4E4E]">: $150</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60 w-32">Practice for:</p>
                <p className="text-primaryText">: Dental care</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60 w-32">Facilities</p>
                <p className="text-primaryText">
                    : {''}
                    {['Furnished', 'Newest', 'Hospital'].map((item, index, array) => (
                        <span key={item}>
                            {item}
                            {index < array.length - 1 && <span className="mx-1">/</span>}
                        </span>
                    ))}
                </p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60 w-32">Opening Date:</p>
                <p className="text-primaryText">: 1 Oct, 2024</p>
            </div>
        </div>

        <div className="h-0.5 w-full bg-primaryText/20 my-4"></div>

        <div className="space-y-6">
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60 w-32">Rented Date:</p>
                <p className="text-primary">1 Oct, 2024</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60 w-32">Rented for:</p>
                <p className="text-primary">2 Months</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60 w-32">Rented Price:</p>
                <p className="text-primary">$300</p>
            </div>
        </div>
    </div>
);

export default MyInterestDetails;
