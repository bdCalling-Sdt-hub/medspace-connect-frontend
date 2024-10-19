/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState } from 'react';
import { FilterButton } from './filter/FilterButton';
import { SearchInput } from './filter/SearchInput';
import { IoOptionsOutline } from 'react-icons/io5';
import { CustomSelect } from './filter/CustomSelect';
import {
    facilitiesOptions,
    locationOptions,
    practiceNeedOptions,
    practiceTypeOptions,
    priceOptions,
} from '@/src/const/const';
import FilterModal from './filter/FilterModal';
import { FilterItem } from './filter/FilterItem';
import {
    clearFilter,
    setFacilities,
    setLocation,
    setPracticeNeed,
    setPracticeType,
    setPrice,
    setSearchQuery,
} from '@/src/redux/features/filter/FilterSlice';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { useRouter } from 'next/navigation';

const Filter = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    // Filter states from Redux
    const { searchQuery, location, price, practiceType, facilities, practiceNeed } = useAppSelector(
        (state) => state.filter
    );
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [filterModalOpen, setFilterModalOpen] = useState(false);
    const clearFilterState = (filterKey: any) => {
        dispatch(clearFilter(filterKey));
    };

    return (
        <div className="bg-[#F7F7F7] md:pb-8 pb-3 pt-4">
            {/* filter section for desktop device */}
            <div
                className={`hidden ${
                    isFilterActive ? 'w-[900px]' : 'md:w-[725px]'
                } md:flex flex-col md:flex-row items-center h-auto md:h-[64px] mx-auto md:bg-white px-1 md:drop-shadow-sm md:rounded-full overflow-hidden`}
            >
                <SearchInput
                    filter={isFilterActive}
                    value={searchQuery as string}
                    setSearchQuery={(query) => {
                        dispatch(setSearchQuery(query));
                        router.push(`/search`);
                    }}
                />
                <FilterButton filter={isFilterActive} setFilter={setIsFilterActive} />
                <div
                    className={`${
                        isFilterActive ? 'ms-0' : 'ms-[500px]'
                    } duration-500 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center w-full my-5 h-auto md:h-[64px] mx-auto px-1 rounded-full`}
                >
                    <CustomSelect
                        options={locationOptions}
                        placeholder="Location"
                        onChange={(value) => {
                            dispatch(setLocation(value));
                            router.push(`/search`);
                        }}
                    />
                    <CustomSelect
                        options={priceOptions}
                        placeholder="Price"
                        onChange={(value) => {
                            dispatch(setPrice(value));
                            router.push(`/search`);
                        }}
                    />
                    <CustomSelect
                        options={practiceTypeOptions}
                        placeholder="Practice Type"
                        onChange={(value) => {
                            dispatch(setPracticeType(value));
                            router.push(`/search`);
                        }}
                    />
                    <CustomSelect
                        options={practiceNeedOptions}
                        placeholder="Practice Need"
                        onChange={(value) => {
                            dispatch(setPracticeNeed(value));
                            router.push(`/search`);
                        }}
                    />
                    <CustomSelect
                        options={facilitiesOptions}
                        placeholder="Facilities"
                        onChange={(value) => {
                            dispatch(setFacilities(value));
                            router.push(`/search`);
                        }}
                    />
                </div>
            </div>

            {/* filter section for mobile device */}
            <div className="md:hidden flex justify-center items-center gap-4">
                <input
                    value={searchQuery as string}
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                    // onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="h-12 px-4 rounded-full border-none outline-none ring-0 focus:outline-none focus:ring-0"
                    type="text"
                    placeholder="search here"
                />
                <button
                    onClick={() => setFilterModalOpen(true)}
                    className="rounded-full h-12 px-3 py-2 bg-primary text-white"
                >
                    <IoOptionsOutline className="text-2xl" />
                </button>
            </div>

            {/* Section for showing selected values */}
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-4 my-4 text-[#CCCCCC] text-sm font-medium">
                    {location && (
                        <FilterItem label="Place" value={location} clearFilter={() => clearFilterState('location')} />
                    )}
                    {price && <FilterItem label="Price" value={price} clearFilter={() => clearFilterState('price')} />}
                    {practiceType && (
                        <FilterItem
                            label="Practice on"
                            value={practiceType}
                            clearFilter={() => clearFilterState('practiceType')}
                        />
                    )}
                    {practiceNeed && (
                        <FilterItem
                            label="Practice Need"
                            value={practiceNeed}
                            clearFilter={() => clearFilterState('practiceNeed')}
                        />
                    )}
                    {facilities && (
                        <FilterItem
                            label="Facilities"
                            value={facilities}
                            clearFilter={() => clearFilterState('facilities')}
                        />
                    )}
                </div>
            </div>

            <FilterModal
                key={'filterModal'}
                setPrice={(value) => dispatch(setPrice(value))}
                setFacilities={(value) => dispatch(setFacilities(value))}
                setPracticeType={(value) => dispatch(setPracticeType(value))}
                setLocation={(value) => dispatch(setLocation(value))}
                setPracticeNeed={(value) => dispatch(setPracticeNeed(value))}
                setOpen={setFilterModalOpen}
                open={filterModalOpen}
            />
        </div>
    );
};

export default Filter;
