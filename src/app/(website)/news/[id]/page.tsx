'use client';
import Image from 'next/image';
import React from 'react';
import NewsImage from '@/public/assets/news.svg';
import Subscribe from '@/src/web-pages/home/Subscribe';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const NewsDetails = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };
    return (
        <>
            <div className="container mx-auto mb-8 relative">
                <button
                    onClick={handleBack}
                    className="flex items-center z-[999] text-primaryText gap-3 absolute top-5 left-0 md:left-2 bg-white px-8 py-4 rounded-r-full"
                >
                    <BiArrowBack />
                    Back
                </button>
                <div>
                    <Image
                        className="h-[200px] sm:h-[456px] w-full object-cover"
                        width={500}
                        height={500}
                        alt="news"
                        src={NewsImage}
                    />
                </div>
                <div className="space-y-4 sm:space-y-8">
                    <h1 className="text-2xl sm:text-4xl font-semibold text-[#151515] my-4 sm:my-8">
                        Why doctors have to take our service
                    </h1>
                    <p className="text-sm sm:text-base text-secondaryText">
                        Quis urna. tempor consectetur risus quis dui. Ut leo. malesuada gravida eget ex. viverra Nunc
                        Nunc dignissim, convallis. odio non sapien sed Praesent at sit luctus elit. leo. amet, urna
                        viverra ac turpis Nunc elit. massa ipsum elit sed id ipsum elit. enim. laoreet efficitur. eget
                        maximus vitae nisi nisl. placerat ex ex. ex ac faucibus faucibus elit sit ex. nibh hendrerit Ut
                        Nunc Ut non, Ut nec tincidunt tincidunt turpis Quisque enim. tincidunt ultrices In nibh vitae
                        quis libero, vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu
                        sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed
                        vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui.
                        laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non
                        luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent
                        viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum
                        orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl.
                        est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus
                        dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi
                        non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent
                        viverra consectetur vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum
                        orci eu sit amet, hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl.
                        est. sed vitae Nunc nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus
                        dui. laoreet Sed ac enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi
                        non luctus Quisque non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent
                        viverra consectetur
                    </p>
                    <p className="text-sm sm:text-base text-secondaryText">
                        viverra hendrerit dui sit ipsum nisl. tincidunt faucibus diam dui nibh vitae volutpat
                        scelerisque lacus lacus, at, efficitur. vitae Nam orci eget non sed Ut viverra vitae Sed urna.
                        placerat ex vitae vitae diam Nunc fringilla at ex in faucibus sapien ultrices laoreet elementum
                        viverra non sit ipsum Vestibulum non lobortis, dignissim, placerat. Vestibulum tincidunt
                        efficitur. cursus lobortis, orci luctus turpis amet, at libero, at, tincidunt venenatis Sed
                        lacus dui id consectetur urna. elit nulla, enim. hendrerit quis vitae ipsum nisi diam dignissim,
                        Vestibulum elit tincidunt est. massa nulla, venenatis placerat. commodo tempor quam leo. elit in
                        Nunc venenatis lacus, hendrerit tincidunt sapien non.
                    </p>
                    <p className="text-sm sm:text-base text-secondaryText">
                        vitae sed Nunc at Nullam quis sapien malesuada convallis. vehicula, ipsum orci eu sit amet,
                        hendrerit urna commodo tincidunt placerat odio risus ullamcorper leo. nisl. est. sed vitae Nunc
                        nibh sapien odio ipsum massa In non luctus non. id convallis. at urna risus dui. laoreet Sed ac
                        enim. amet, ac leo. scelerisque ex Donec Quisque nibh Sed consectetur Morbi non luctus Quisque
                        non dui. varius luctus lacus, sodales. porta sed elit consectetur ac Praesent viverra
                        consectetur
                    </p>
                </div>
            </div>
            <Subscribe />
        </>
    );
};

export default NewsDetails;
