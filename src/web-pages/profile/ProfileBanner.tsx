'use client';
import Image from 'next/image';
// import hostbanner from '@/public/assets/banner.svg';
// import Profile from '/public/assets/profile.png';
import { CiEdit } from 'react-icons/ci';
import { useAppSelector } from '@/src/redux/hooks';
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '@/src/redux/features/user/userApi';
import { notification } from 'antd';
import { imageUrl } from '@/src/redux/features/api/baseApi';

const ProfileBanner = () => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: myProfile } = useGetUserProfileQuery([]);
      const [updateProfile] = useUpdateUserProfileMutation();
      const handleUpdateProfile = async (image: File) => {
            // console.log(image);
            try {
                  const formData = new FormData();
                  formData.append('profile', image);
                  const res = await updateProfile(formData).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to update profile',
                  });
            }
      };
      const handleUpdateBanner = async (image: File) => {
            // console.log(image);
            try {
                  const formData = new FormData();
                  formData.append('banner', image);
                  const res = await updateProfile(formData).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to update banner',
                  });
            }
      };

      return (
            <div className="container mx-auto my-10">
                  <div className="relative lg:h-[200px] h-[250px]">
                        {/* Banner Image */}
                        <div className="relative h-full w-full">
                              <Image
                                    unoptimized
                                    // src={hostbanner}
                                    src={
                                          myProfile?.user?.banner?.startsWith('https')
                                                ? myProfile?.user?.banner
                                                : `${imageUrl}/${myProfile?.user?.banner}`
                                    }
                                    alt="host-profile"
                                    width={500}
                                    height={400}
                                    className="h-full w-full object-cover rounded-t-[10px] "
                              />
                              <label
                                    htmlFor="imageUploadBanner"
                                    className="absolute top-5 right-5 bg-white w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
                              >
                                    <CiEdit size={25} color="#929394" />
                              </label>
                              <input
                                    id="imageUploadBanner"
                                    onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                                handleUpdateBanner(file);
                                          } else {
                                                console.log('No image selected');
                                          }
                                    }}
                                    type="file"
                                    style={{ display: 'none' }}
                              />
                        </div>

                        <div className="lg:w-[430px] w-[80%] absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-r-[90px] bg-[#E7F4FC]">
                              <div className="flex items-center gap-6">
                                    {/* Profile Image */}
                                    <div className="relative">
                                          <Image
                                                unoptimized
                                                src={
                                                      myProfile?.user?.profile?.startsWith('https')
                                                            ? myProfile?.user?.profile
                                                            : `${imageUrl}/${myProfile?.user?.profile}`
                                                }
                                                alt="host-profile"
                                                width={120}
                                                height={120}
                                                className="rounded-full size-[120px]"
                                          />
                                          <label
                                                htmlFor="imageUpload"
                                                className="absolute bottom-5 right-[-10px] bg-white w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
                                          >
                                                <CiEdit size={25} color="#929394" />
                                          </label>
                                          <input
                                                id="imageUpload"
                                                type="file"
                                                onChange={(e) => {
                                                      const file = e.target.files?.[0];
                                                      if (file) {
                                                            handleUpdateProfile(file);
                                                      } else {
                                                            console.log('No image selected');
                                                      }
                                                }}
                                                style={{ display: 'none' }}
                                          />
                                    </div>

                                    <div>
                                          <h1 className="text-2xl text-[#4E4E4E]">{myProfile?.user?.name}</h1>
                                          <p className="text-secondary text-[14px] leading-6 font-normal capitalize">
                                                {myProfile?.user?.occupation}
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProfileBanner;
