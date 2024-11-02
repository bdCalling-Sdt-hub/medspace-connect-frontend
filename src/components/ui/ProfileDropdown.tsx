'use client';
import Image from 'next/image';
import Profile from '/public/assets/profile.png';
import ProfileCover from '/public/assets/cover-profile.svg';
import { Button } from 'antd';
import Link from 'next/link';
import { useAppDispatch } from '@/src/redux/hooks';
import { logoutUser } from '@/src/redux/features/auth/authSlice';
const ProfileDropdown = () => {
      const dispatch = useAppDispatch();
      const handleLogout = () => {
            dispatch(logoutUser());
      };
      return (
            <div className="w-[263px] min-h-[226px] mx-auto bg-white shadow-md rounded-lg overflow-hidden ml-5 pb-2">
                  {/* Profile Header with Background */}
                  <div className="h-24">
                        <Image
                              height={200}
                              width={500}
                              className="h-fit object-cover"
                              src={ProfileCover}
                              alt="profile"
                        />
                  </div>

                  {/* Profile Avatar */}
                  <div className="flex justify-center -mt-20">
                        <Image
                              height={63}
                              width={63}
                              className=" rounded-full border-4 border-white"
                              src={Profile}
                              alt="profile"
                        />
                  </div>

                  {/* Profile Details */}
                  <div className="text-center mt-2">
                        <h2 className="text-xl font-semibold text-headerText">MD. Asadujjaman</h2>
                  </div>

                  {/* View Profile Button */}
                  <div className="text-center mt-4">
                        <Link className="flex flex-col justify-center items-center gap-3 mx-auto" href={'/profile'}>
                              <Button
                                    style={{
                                          border: 'none',
                                          height: 30,

                                          backgroundColor: '#0A8FDC',
                                          color: '#fff',
                                          borderRadius: 32,
                                          padding: '4px 12px',
                                    }}
                              >
                                    View Profile
                              </Button>
                        </Link>
                  </div>

                  {/* Divider */}
                  <hr className="my-4" />

                  {/* Log Out Section */}
                  <div
                        onClick={handleLogout}
                        className="flex justify-start gap-4 cursor-pointer items-center px-6 py-2"
                  >
                        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                    d="M5.625 13.125H3.125C2.79348 13.125 2.47554 12.9933 2.24112 12.7589C2.0067 12.5245 1.875 12.2065 1.875 11.875V3.125C1.875 2.79348 2.0067 2.47554 2.24112 2.24112C2.47554 2.0067 2.79348 1.875 3.125 1.875H5.625"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                              />
                              <path
                                    d="M10 10.625L13.125 7.5L10 4.375"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                              />
                              <path
                                    d="M13.125 7.5H5.625"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                              />
                        </svg>

                        <span className="text-primaryText text-md font-medium ">Log Out</span>
                  </div>
            </div>
      );
};

export default ProfileDropdown;
