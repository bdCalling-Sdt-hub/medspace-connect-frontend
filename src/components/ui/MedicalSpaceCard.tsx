'use client';
import Card from '/public/assets/card.png';
import Profile from '/public/assets/profile.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

const MedicalSpaceCard = () => {
    const [favorite, setFavorite] = useState(false);
    const handleFavoriteClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setFavorite(!favorite);
    };

    return (
        <Link href={`details/1`} className="bg-white max-w-[360px] mx-auto rounded-xl drop-shadow-md block">
            {/* Image Section */}
            <div className="p-3">
                <Image height={219} width={344} className="object-cover" src={Card} alt="Doctor's Practice Room" />

                {/* Card Body */}
                <div className="p-4">
                    {/* Price and Favorite */}
                    <div className="flex justify-between items-center mb-2">
                        <p className="flex items-center">
                            <span className="text-2xl font-semibold text-primary">$500/</span>
                            <span className="text-primary">mon</span>
                        </p>

                        <div onClick={handleFavoriteClick} className="cursor-pointer">
                            {favorite ? (
                                <AiFillHeart className="text-yellow-400 text-2xl" />
                            ) : (
                                <AiOutlineHeart className="text-yellow-400 text-2xl" />
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <Image height={33} width={33} className="rounded-full" src={Profile} alt="Doctor" />
                        <h3 className="text-xl font-semibold text-headerText">Doctors Practice Room</h3>
                    </div>

                    {/* Description Section */}
                    <div className="flex items-center mt-3 text-primaryText">
                        <IoLocationOutline size={24} />
                        <p className="ml-2 text-sm">55/A, b park road, Abcd area, city</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MedicalSpaceCard;
