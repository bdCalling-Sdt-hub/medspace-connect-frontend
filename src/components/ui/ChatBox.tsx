import Image from 'next/image';
import React, { useState } from 'react';
import { LuX } from 'react-icons/lu';
import Profile from '@/public/assets/profile.png';

const contacts = [
    { name: 'Saiful Islam Fahim', role: 'Marchant', time: '08:00pm, today', image: Profile },
    { name: 'Rafsan Opi', role: 'Marchant', time: '08:00pm, today', image: Profile },
    { name: 'Nuruddin Repon', role: 'Marchant', time: '08:00pm, today', image: Profile },
    { name: 'Kawsar Hamid', role: 'Marchant', time: '08:00pm, today', image: Profile },
    { name: 'Nuruddin Repon', role: 'Marchant', time: '08:00pm, today', image: Profile },
    { name: 'Kawsar Hamid', role: 'Marchant', time: '08:00pm, today', image: Profile },
];
const ChatBox = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="fixed z-[999] right-4 bottom-10">
                {/* logo chat */}
                <div
                    onClick={() => setOpen(!open)} // Toggle chatbox visibility
                    className="w-[50px] cursor-pointer flex items-center justify-center h-[50px] rounded-full border-2 p-2 border-primary"
                >
                    <LogoIcon />
                </div>
            </div>

            {/* chatbox */}

            <div
                className={`${
                    open
                        ? 'right-[4%] z-[50] bottom-[4%] duration-300'
                        : '-right-[120%] md:-right-[20%] z-[10] bottom-[4%] duration-300'
                } w-full max-w-[349px] fixed  border-primary border mx-auto bg-white rounded-xl shadow-lg overflow-hidden`}
            >
                {/* Header */}
                <div className="bg-primary text-white p-4 flex justify-between items-center">
                    <h2 className="text-lg ">Contacts</h2>
                    <button onClick={() => setOpen(!open)}>
                        <LuX className="text-white" size={24} />
                    </button>
                </div>

                {/* Contact List */}
                <div className="p-4 space-y-2 max-h-[500px] overflow-y-scroll">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="flex items-center shadow cursor-pointer bg-[#E9E9E9] hover:bg-[#FDFDFD] transition duration-200 p-3 rounded-lg"
                        >
                            <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                                <Image
                                    src={contact.image}
                                    alt={contact.name}
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-primaryText">{contact.name}</h3>
                                <p className="text-sm text-primary">{contact.role}</p>
                                <p className="text-xs text-primaryText">{contact.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatBox;

const LogoIcon = () => (
    <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
            fill="#F7F7F7"
        />
        <g clipPath="url(#clip0_448_14422)">
            <path
                d="M41.3125 30.5063C41.3125 26.2125 37.55 22.6062 32.525 21.75C32.7375 21.0437 32.8438 20.3438 32.8438 19.6375C32.8438 14.7125 27.8875 10.6875 21.7625 10.6875C15.6375 10.6875 10.6875 14.7125 10.6875 19.6375C10.6875 21.875 11.6625 23.9187 13.4875 25.5813L11.4688 30.4375L17.5938 27.9438C18.1875 28.125 18.8125 28.2688 19.4688 28.3875C19.2625 29.0688 19.1562 29.775 19.1562 30.5C19.1562 35.425 24.1063 39.45 30.2313 39.45C31.6625 39.45 33.0312 39.2563 34.4 38.8125L40.525 41.3062L38.5063 36.45C40.3375 34.7938 41.3125 32.6812 41.3125 30.5063ZM17.5938 26.6063L13.8812 28.075L15.0563 25.2625C15.0563 25.2625 11.9937 23.1938 11.9937 19.7C11.9937 15.4812 16.3625 12.025 21.7688 12.025C27.175 12.025 31.5437 15.475 31.675 19.6313C31.675 20.325 31.55 20.9625 31.3563 21.5938C30.9875 21.5625 30.6187 21.55 30.2437 21.55C25.5812 21.55 21.6062 23.8813 19.9688 27.1625C19.2188 27.1 17.5938 26.6063 17.5938 26.6063Z"
                fill="#0A8FDC"
            />
        </g>
    </svg>
);

const MessageBubble = ({ index }: { index: number }) => (
    <div className={`flex mb-3 p-2 ${index % 2 === 0 ? 'items-end justify-end' : 'items-start justify-start'}`}>
        <div className="bg-[#E7F4FC] w-[270px] p-2 rounded-lg">
            <p className="text-[16px] leading-6 text-[#767676] font-normal">Hello Keven service provider</p>
            <p className="text-right text-[16px] leading-6 text-[#A1A1A1] font-normal">08:00pm, today</p>
        </div>
    </div>
);
