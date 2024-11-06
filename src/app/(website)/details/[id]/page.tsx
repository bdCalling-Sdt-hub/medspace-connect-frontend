'use client';
import React from 'react';

import CustomSlider from './CustomSlider';
import Subscribe from '@/src/web-pages/home/Subscribe';
import BookingDetails from '@/src/web-pages/details/BookingDetails';
import LocationMap from '@/src/web-pages/details/LocationMap';
import { useGetSingleSpaceQuery } from '@/src/redux/features/space/spaceApi';

type TProps = {
      id: string;
};
const SpaceDetails = ({ params }: { params: TProps }) => {
      const { data: space } = useGetSingleSpaceQuery(params.id);

      return (
            <>
                  <div className="container my-4">
                        <div className="grid grid-cols-12">
                              <div className="col-span-12 md:col-span-7 p-2">
                                    <CustomSlider space={space} needBack needFav />
                                    <div className="my-4 space-y-5">
                                          {/* Description */}
                                          <h1 className="text-3xl text-[#333333]">Description</h1>
                                          <p className="text-primaryText">{space?.description}</p>
                                    </div>
                              </div>
                              <div className="col-span-12 md:col-span-5 space-y-4 p-2">
                                    {/* Booking Section */}
                                    <BookingDetails space={space!} />
                                    {/* Location Map */}
                                    <LocationMap location={space?.location!} />
                              </div>
                        </div>
                  </div>
                  <Subscribe />
            </>
      );
};

export default SpaceDetails;
