'use client';
import Image from 'next/image';
import hostbanner from '@/public/assets/banner.svg';
import person from '@/public/assets/profile.png';
import { CiEdit } from 'react-icons/ci';
import { useAppSelector } from '@/src/redux/hooks';

const ProfileBanner = () => {
      const { user } = useAppSelector((state) => state.auth);

      return (
            <div className="container mx-auto my-10">
                  <div className="relative lg:h-[200px] h-[250px]">
                        {/* Banner Image */}
                        <div className="relative h-full w-full">
                              <Image
                                    src={hostbanner}
                                    alt="host-profile"
                                    width={500}
                                    height={400}
                                    className="h-full w-full object-cover rounded-t-[10px] transform scale-x-[-1]"
                              />
                              <label
                                    htmlFor="imageUploadBanner"
                                    className="absolute top-5 right-5 bg-white w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
                              >
                                    <CiEdit size={25} color="#929394" />
                              </label>
                              <input id="imageUploadBanner" type="file" style={{ display: 'none' }} />
                        </div>

                        <div className="lg:w-[430px] w-[80%] absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-r-[90px] bg-[#E7F4FC]">
                              <div className="flex items-center gap-6">
                                    {/* Profile Image */}
                                    <div className="relative">
                                          <Image
                                                src={person}
                                                alt="host-profile"
                                                width={120}
                                                height={120}
                                                className="rounded-full"
                                          />
                                          <label
                                                htmlFor="imageUpload"
                                                className="absolute bottom-5 right-[-10px] bg-white w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
                                          >
                                                <CiEdit size={25} color="#929394" />
                                          </label>
                                          <input id="imageUpload" type="file" style={{ display: 'none' }} />
                                    </div>

                                    <div>
                                          <h1 className="text-2xl text-[#4E4E4E]">Saiful Islam Fahim</h1>
                                          <p className="text-secondary text-[14px] leading-6 font-normal capitalize">
                                                {user?.role === 'SPACESEEKER'
                                                      ? 'Space Seeker'
                                                      : user?.role === 'SPACEPROVIDER'
                                                      ? 'Space Provider'
                                                      : ''}
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProfileBanner;
