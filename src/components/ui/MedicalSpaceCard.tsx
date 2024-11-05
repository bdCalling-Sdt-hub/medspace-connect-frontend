'use client';
import { TSpace } from '@/src/redux/features/space/spaceApi';
import Card from '/public/assets/card.png';
import Profile from '/public/assets/profile.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { imageUrl } from '@/src/redux/features/api/baseApi';

const MedicalSpaceCard = ({ space }: { space: TSpace }) => {
      const [favorite, setFavorite] = useState(false);
      const handleFavoriteClick = (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            setFavorite(!favorite);
      };

      return (
            <Link
                  href={`details/${space?._id}`}
                  className="bg-white max-w-[360px] mx-auto rounded-xl drop-shadow-md block"
            >
                  {/* Image Section */}
                  <div className="p-3">
                        <Image
                              height={219}
                              width={344}
                              className="object-cover"
                              src={`${imageUrl}/${space?.spaceImages[0]}`}
                              alt="Doctor's Practice Room"
                        />

                        {/* Card Body */}
                        <div className="p-4">
                              {/* Price and Favorite */}
                              <div className="flex justify-between items-center mb-2">
                                    <p className="flex items-center">
                                          <span className="text-2xl font-semibold text-primary">${space?.price}/</span>
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

                              <div className="flex h-full  gap-5">
                                    <Image
                                          height={33}
                                          width={33}
                                          className="rounded-full size-[33px]"
                                          src={`${imageUrl}/${space?.providerId?.profile}`}
                                          alt="Doctor"
                                    />
                                    <h3 className="text-xl line-clamp-2 h-full font-semibold text-headerText">
                                          {space?.title}
                                    </h3>
                              </div>

                              {/* Description Section */}
                              <div className="flex items-center mt-3 text-primaryText">
                                    <IoLocationOutline size={24} />
                                    <p className="ml-2 text-sm">{space?.location}</p>
                              </div>
                        </div>
                  </div>
            </Link>
      );
};

export default MedicalSpaceCard;
