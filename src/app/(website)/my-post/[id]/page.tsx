'use client';
import React from 'react';

import Subscribe from '@/src/web-pages/home/Subscribe';
import LocationMap from '@/src/web-pages/details/LocationMap';
import CustomSlider from '../../details/[id]/CustomSlider';
import MyPostBookingDetails from '@/src/components/ui/MyPostBookingDetails';
import { useGetSingleSpaceQuery } from '@/src/redux/features/space/spaceApi';

const MyPostDetails = ({ params }: { params: { id: string } }) => {
      const { data: space } = useGetSingleSpaceQuery(params.id);
      console.log(space);
      return (
            <>
                  <div className="container my-4">
                        <div className="grid grid-cols-12">
                              <div className="col-span-12 md:col-span-7 p-2">
                                    <CustomSlider space={space} needBack needFav />
                                    <div className="my-4 space-y-5">
                                          <h1 className="text-3xl text-[#333333]">Description</h1>
                                          <p className="text-primaryText">{space?.description}</p>
                                    </div>
                              </div>
                              <div className="col-span-12 md:col-span-5 space-y-4 p-2">
                                    <MyPostBookingDetails space={space!} key={'my-post'} />
                                    <LocationMap location={space?.location!} />
                              </div>
                        </div>
                  </div>
                  <Subscribe />
            </>
      );
};

export default MyPostDetails;
