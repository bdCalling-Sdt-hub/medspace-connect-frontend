'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';

const RecentPost = () => {
    const ArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
        <button
            {...props}
            className="prev absolute z-[1] top-[40%] md:-left-12 -left-4 bg-[#F7F7F7] w-10 h-10 md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center"
        >
            <BiChevronLeft size={24} color="#FBA51A" className="mx-auto" />
        </button>
    );

    const ArrowRight = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
        <button
            {...props}
            className="next absolute top-[40%] md:-right-12 -right-4 bg-[#F7F7F7] w-10 h-10 md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center"
        >
            <BiChevronRight size={24} color="#FBA51A" className="mx-auto" />
        </button>
    );

    const settings: Settings = {
        infinite: true,
        speed: 500,
        arrows: true,

        slidesToShow: 4, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        centerPadding: '400px',
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-primaryText text-xl">Recent Post</h2>
            {/* cards */}
            <br />

            <div className="slider-container mx-auto">
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return <MedicalSpaceCard key={index} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default RecentPost;