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
import { AiOutlineHeart } from 'react-icons/ai';
import SpaceImg from '@/public/assets/space.svg';

type TSliderProps = {
    needBack?: boolean;
    needFav?: boolean;
};

const CustomSlider: React.FC<TSliderProps> = ({ needBack = false, needFav = false }) => {
    const router = useRouter();
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const handleBack = () => {
        router.back();
    };

    // Render the main slide with optional buttons
    const renderMainSlide = (index: number) => (
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
                {needFav && (
                    <button className="flex items-center z-[999] text-primaryText gap-3 fixed md:top-5 top-8 right-4 bg-white py-3 px-3 rounded-full">
                        <AiOutlineHeart className="text-yellow-400 text-2xl cursor-pointer" />
                    </button>
                )}
            </div>
            <Image
                width={500}
                height={500}
                alt="img"
                className="w-full drop-shadow-md h-full rounded-xl"
                src={SpaceImg}
            />
        </SwiperSlide>
    );

    // Render the thumbnail slides
    const renderThumbnailSlide = (index: number) => (
        <SwiperSlide key={index}>
            <Image
                width={200}
                height={140}
                alt="img"
                className="w-full md:h-[140] rounded-xl cursor-pointer"
                src={SpaceImg}
            />
        </SwiperSlide>
    );

    return (
        <>
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2  rounded-xl"
            >
                {[...Array(5)].map((_, index) => renderMainSlide(index))}
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
                    {[...Array(4)].map((_, index) => renderThumbnailSlide(index))}
                </Swiper>
            </div>
        </>
    );
};

export default CustomSlider;
