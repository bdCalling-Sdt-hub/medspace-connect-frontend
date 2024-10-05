'use client';
import Image from 'next/image';
import hostbanner from '@/public/assets/banner.svg';
import person from '@/public/assets/profile.png';

import { CiEdit } from 'react-icons/ci';

const ProfileBanner = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="relative lg:h-[200px] h-[250px]">
                {/* banner Image   */}
                <div
                    style={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Image
                        className=""
                        src={hostbanner}
                        alt="host-profile"
                        width={500}
                        height={400}
                        style={{
                            height: '100%',
                            width: '100%',
                            zIndex: 0,
                            objectFit: 'cover',
                            backgroundPosition: '',
                            borderRadius: '10px 10px 0 0',
                            transform: 'scaleX(-1)',
                        }}
                    />
                    <label
                        htmlFor="imageUploadBanner"
                        style={{
                            position: 'absolute',
                            top: 1,
                            right: 0,
                            backgroundColor: 'white',
                            width: 35,
                            height: 35,
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <CiEdit size={25} color="#929394" />
                    </label>

                    <input id="imageUploadBanner" type="file" src="" style={{ display: 'none' }} alt="" />
                </div>

                <div className="lg:w-[430px] w-[80%] absolute left-0 top-1/2 transform -translate-y-1/2  p-3 rounded-r-[90px] bg-[#E7F4FC]">
                    <div className="flex items-center gap-6">
                        {/* profile Image  */}
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
                            <Image src={person} alt="host-profile" width={120} height={120} className="rounded-full" />

                            <label
                                htmlFor="imageUpload"
                                style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    right: -10,
                                    backgroundColor: 'white',
                                    width: 35,
                                    height: 35,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <CiEdit size={25} color="#929394" />
                            </label>

                            <input id="imageUpload" type="file" src="" style={{ display: 'none' }} alt="" />
                        </div>

                        <div>
                            <h1 className="text-2xl text-[#4E4E4E]">Saiful Islam Fahim</h1>

                            <p className="text-secondary text-[14px]  leading-6 font-normal">Doctor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;
