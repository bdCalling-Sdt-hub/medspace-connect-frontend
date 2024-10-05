'use client';
import React from 'react';

import CustomSlider from './CustomSlider';
import Subscribe from '@/src/web-pages/home/Subscribe';
import BookingDetails from '@/src/web-pages/details/BookingDetails';
import LocationMap from '@/src/web-pages/details/LocationMap';

const SpaceDetails = (params: any) => {
    return (
        <>
            <div className="container my-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-7 p-2">
                        <CustomSlider />
                        <div className="my-4 space-y-5">
                            {/* Description */}
                            <h1 className="text-3xl text-[#333333]">Description</h1>
                            <p className="text-primaryText">
                                amet, ex Ut adipiscing sodales. massa placerat. Sed eget fringilla gravida nisi Donec eu
                                eu tempor nulla, nulla, leo. faucibus tortor. Donec libero, elementum tincidunt id
                                tincidunt dui faucibus turpis consectetur amet, nibh luctus nibh lacus, ex hendrerit
                                fringilla fringilla est. lacus Nunc tincidunt dignissim, id nec Lorem dui Sed nibh id
                                elementum non tincidunt
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 space-y-4 p-2">
                        {/* Booking Section */}
                        <BookingDetails />
                        {/* Location Map */}
                        <LocationMap />
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    );
};

export default SpaceDetails;
