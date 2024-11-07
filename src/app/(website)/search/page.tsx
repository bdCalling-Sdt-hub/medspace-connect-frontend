'use client';
import NotFoundUi from '@/src/components/shared/NotFoundUi';
import MedicalSpaceCard from '@/src/components/ui/MedicalSpaceCard';
import { TSpace, useGetFilterSpacesBySearchQuery } from '@/src/redux/features/space/spaceApi';
import { useAppSelector } from '@/src/redux/hooks';
import React, { useEffect, useState } from 'react';
import { AiOutlineFrown } from 'react-icons/ai';

const SearchPage = () => {
      const [spaces, setSpaces] = useState<TSpace[]>();
      const { searchQuery, location, price, practiceType, facilities, practiceNeed } = useAppSelector(
            (state) => state.filter
      );
      const { data: filteredSpace } = useGetFilterSpacesBySearchQuery([
            { name: 'search', value: searchQuery },
            { name: 'location', value: location },
            { name: 'priceRange', value: price },
            { name: 'practiceType', value: practiceType },
            { name: 'facilities', value: facilities },
            { name: 'practiceNeed', value: practiceNeed },
      ]);
      useEffect(() => {
            setSpaces(filteredSpace);
      }, [filteredSpace]);

      return (
            <>
                  <div className="container mx-auto">
                        {spaces && spaces.length > 0 ? (
                              <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center items-center mx-auto">
                                    {spaces.map((space, index) => (
                                          <MedicalSpaceCard space={space} key={index} />
                                    ))}
                              </div>
                        ) : (
                              <NotFoundUi />
                        )}
                  </div>
            </>
      );
};

export default SearchPage;
