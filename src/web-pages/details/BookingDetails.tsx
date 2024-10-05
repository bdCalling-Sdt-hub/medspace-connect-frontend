'use client';
import Image from 'next/image';
import React from 'react';
import Profile from '/public/assets/profile.png';
import { Button } from 'antd';
const BookingDetails = () => (
    <div className="bg-white drop-shadow-xl space-y-5 p-8 rounded-xl">
        <h1 className="text-2xl text-primaryText font-semibold">Doctors Practice Room</h1>
        <div className="flex items-center gap-3">
            <Image height={33} width={33} className="rounded-full" src={Profile} alt="profile" />
            <h2 className="text-lg text-primaryText">Favez Abdualla</h2>
        </div>
        <div className="h-0.5 w-full bg-primaryText/20"></div>
        <div className="flex items-center gap-2">
            <p className="text-4xl text-primaryText">Price:</p>
            <div className="flex items-center">
                <p className="text-4xl text-primary">$150/</p> <span className="block text-primary">mon</span>
            </div>
        </div>
        <div className="h-0.5 w-full bg-primaryText/20"></div>
        <div className="space-y-5">
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60">Practice for :</p>
                <p className="text-primaryText">Dental care</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60">Facilities</p>
                <span className="text-primaryText/60">:</span>
                <p className="text-primaryText">
                    {['Furnished', 'Newest', 'Hospital'].map((item, index, array) => (
                        <span key={item}>
                            {item}
                            {index < array.length - 1 && <span className="mx-1">/</span>}
                        </span>
                    ))}
                </p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-primaryText/60">Opening Date :</p>
                <p className="text-primaryText">1 Oct, 2024</p>
            </div>
        </div>

        <div>
            <Button
                shape="round"
                className="px-6"
                style={{
                    height: '50px',
                    width: '100%',
                    backgroundColor: '#0A8FDC',
                    fontSize: 16,
                    border: 'none',
                    color: '#fff',
                }}
            >
                Interested
            </Button>
        </div>
    </div>
);

export default BookingDetails;
