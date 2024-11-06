'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TSpace } from '@/src/redux/features/space/spaceApi';
import { imageUrl } from '@/src/redux/features/api/baseApi';

type TSliderProps = {
      needBack?: boolean;
      needFav?: boolean;
      space?: TSpace;
};

const CustomSlider: React.FC<TSliderProps> = ({ needBack = false, needFav = false, space }) => {
      const router = useRouter();
      const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

      const handleBack = () => {
            router.back();
      };

      // Render the main slide with optional buttons
      const renderMainSlide = (imgSrc: string, index: number) => (
            <SwiperSlide key={index}>
                  <div className="relative">
                        {needBack && (
                              <button
                                    onClick={handleBack}
                                    className="flex items-center z-[999] text-primaryText gap-3 fixed md:top-5 top-8 left-0 bg-white px-6 py-3 rounded-r-full"
                              >
                                    <BiArrowBack />
                                    Back
                              </button>
                        )}
                        {/* {needFav && (
                              <button className="flex items-center z-[999] text-primaryText gap-3 fixed md:top-5 top-8 right-4 bg-white py-3 px-3 rounded-full">
                                    <AiOutlineHeart className="text-yellow-400 text-2xl cursor-pointer" />
                              </button>
                        )} */}
                  </div>
                  <Image
                        width={500}
                        height={500}
                        alt="img"
                        className="w-full drop-shadow-md h-[400px] object-cover rounded-xl" // Adjust height and object-fit
                        // src={imageUrl || SpaceImg} // Use the image URL or a default image
                        src={`${imageUrl}/${imgSrc}`}
                  />
            </SwiperSlide>
      );

      // Render the thumbnail slides
      const renderThumbnailSlide = (imgSrc: string, index: number) => (
            <SwiperSlide key={index}>
                  <Image
                        width={200}
                        height={140}
                        alt="img"
                        className="w-full md:h-[140px] rounded-xl cursor-pointer"
                        src={`${imageUrl}/${imgSrc}`}
                  />
            </SwiperSlide>
      );

      return (
            <>
                  <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2 rounded-xl"
                  >
                        {space?.spaceImages?.map((imageUrl, index) => renderMainSlide(imageUrl, index))}
                  </Swiper>
                  <div className="my-5">
                        <Swiper
                              onSwiper={setThumbsSwiper}
                              spaceBetween={20}
                              slidesPerView={4}
                              freeMode={true}
                              watchSlidesProgress={true}
                              modules={[FreeMode, Navigation, Thumbs]}
                              className="mySwiper"
                        >
                              {space?.spaceImages?.map((imageUrl, index) => renderThumbnailSlide(imageUrl, index))}
                        </Swiper>
                  </div>
            </>
      );
};

export default CustomSlider;
