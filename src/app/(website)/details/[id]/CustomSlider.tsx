'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

export default function CustomSlider() {
    const router = useRouter();
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const handleBack = () => {
        router.back();
    };
    return (
        <>
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                {[...Array(5)].map((item, index) => (
                    <SwiperSlide key={index}>
                        <button
                            onClick={handleBack}
                            className="flex items-center z-[999] text-primaryText gap-3 fixed top-5 left-0 bg-white px-8 py-4 rounded-r-full"
                        >
                            <BiArrowBack />
                            Back
                        </button>
                        <img
                            className="w-full drop-shadow-md h-[330px] md:h-[500px] rounded-xl"
                            src="https://s3-alpha-sig.figma.com/img/afc3/8e04/6bb0d59328447c3ebf72c549bd40ea6b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4eyZ--JiTzOFbgxMwrAuh0TbTv~p7g7I0ZBUAF4HfuAVfsuKcazFDSoAae0UN8CnmMsZwy16lKd3TCLGyzTz2jmEbpiBBBBtlOE6CLKfofBVjAGFBeeDp2JrAmhPqrgjNBC3XKhAT7actn5oJTw8-ZAO-3iribfLcmQbLg5Jdb5UjYr~lywSdP0gAWsNrds6LydAzgJ4v45oYgmwmCXoZwjSewg42YQIiGUhsiWJf5bfakw70yASNT6kQcESlZirdnWzwZqLYy7O9BI7KuFWRQNQnCq3kdzP9WiGuAQTE7zoD2VXlWqY9qYYLYF03Kh9M5FgVvKaZzxXJL4Q3Ajfw__"
                        />
                    </SwiperSlide>
                ))}
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
                    {[...Array(4)].map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img
                                    className="w-full md:h-[140] rounded-xl cursor-pointer"
                                    src="https://s3-alpha-sig.figma.com/img/afc3/8e04/6bb0d59328447c3ebf72c549bd40ea6b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4eyZ--JiTzOFbgxMwrAuh0TbTv~p7g7I0ZBUAF4HfuAVfsuKcazFDSoAae0UN8CnmMsZwy16lKd3TCLGyzTz2jmEbpiBBBBtlOE6CLKfofBVjAGFBeeDp2JrAmhPqrgjNBC3XKhAT7actn5oJTw8-ZAO-3iribfLcmQbLg5Jdb5UjYr~lywSdP0gAWsNrds6LydAzgJ4v45oYgmwmCXoZwjSewg42YQIiGUhsiWJf5bfakw70yASNT6kQcESlZirdnWzwZqLYy7O9BI7KuFWRQNQnCq3kdzP9WiGuAQTE7zoD2VXlWqY9qYYLYF03Kh9M5FgVvKaZzxXJL4Q3Ajfw__"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}
