'use client';
import Card from '/public/assets/card.png';
import Profile from '/public/assets/profile.png';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
const MyMedicalSpacePostCard = ({ setEditModal }: { setEditModal: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="bg-white max-w-[360px] mx-auto rounded-xl  drop-shadow-md  relative overflow-hidden">
            {/* edit button */}
            <div className="absolute z-[99] top-4 right-0 bg-[#FDFDFD] px-6 py-3 rounded-s-full ">
                <button onClick={() => setEditModal(true)} className="text-secondaryText flex items-center gap-3">
                    <span>
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.85921 12.5933H4.80202L11.0111 6.38419L10.0683 5.44138L3.85921 11.6505V12.5933ZM14.5259 13.9267H2.52588V11.0982L11.4825 2.14155C11.7429 1.8812 12.165 1.8812 12.4253 2.14155L14.311 4.02717C14.5713 4.28752 14.5713 4.70963 14.311 4.96998L6.68764 12.5933H14.5259V13.9267ZM11.0111 4.49858L11.9539 5.44138L12.8967 4.49858L11.9539 3.55576L11.0111 4.49858Z"
                                fill="#929394"
                            />
                        </svg>
                    </span>
                    Edit
                </button>
            </div>

            <div className="p-3">
                <Image height={219} width={344} className=" object-cover" src={Card} alt="Doctor's Practice Room" />
                <Link href={`my-post/${1}`} className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <p className="flex items-center">
                            <span className="text-2xl font-semibold text-primary">$500/</span>
                            <span className="text-primary">mon</span>
                        </p>
                        <p className="text-green-600">Active</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <Image height={33} width={33} className=" rounded-full" src={Profile} alt="Doctor" />
                        <h3 className="text-xl font-semibold text-headerText">Doctors Practice Room</h3>
                    </div>

                    {/* Description Section */}
                    <div className="flex items-center mt-3 text-primaryText">
                        <IoLocationOutline size={24} />
                        <p className=" ml-2 text-sm">55/A, b park road, Abcd area, city</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MyMedicalSpacePostCard;
