/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useState, useEffect } from 'react';
import { debounce } from 'lodash';
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
import { useGetPracticeNeedQuery, useGetPracticeTypeQuery } from '@/src/redux/features/about/aboutApi';
import { FaChevronDown, FaXmark } from 'react-icons/fa6';
import { ConfigProvider, Select } from 'antd';
const { Option } = Select;

const Filter = () => {
      const dispatch = useAppDispatch();
      const router = useRouter();
      const [isFilterActive, setIsFilterActive] = useState(false);
      const [filterModalOpen, setFilterModalOpen] = useState(false);
      const { data: practiceTypes } = useGetPracticeTypeQuery(undefined);
      const { data: practiceNeeds } = useGetPracticeNeedQuery(undefined);
      console.log(practiceTypes);
      console.log(practiceNeeds);

      // Filter states from Redux
      const { searchQuery, location, price, practiceType, facilities, practiceNeed } = useAppSelector(
            (state) => state.filter
      );

      const [localQuery, setLocalQuery] = useState(searchQuery); // Local state for immediate input display

      // Debounced function to update the search query in Redux and trigger routing
      const debouncedSearch = useCallback(
            debounce((query) => {
                  dispatch(setSearchQuery(query)); // Dispatch to Redux after debounce delay
                  router.push(`/search`);
            }, 500), // Set debounce delay to 500ms
            [dispatch, router]
      );

      // Handle input changes immediately and trigger debounced search
      const handleSearchChange = (query: string) => {
            setLocalQuery(query); // Update local state immediately for display
            debouncedSearch(query); // Trigger debounced Redux dispatch
      };

      // Cleanup debounced function on component unmount
      useEffect(() => {
            return () => {
                  debouncedSearch.cancel();
            };
      }, [debouncedSearch]);

      return (
            <div className="bg-[#F7F7F7] md:pb-8 pb-3 pt-4">
                  {/* Filter section for desktop device */}
                  <div
                        style={{
                              boxShadow: '0px 3px 12px 6px #0000000D',
                        }}
                        className={`hidden ${
                              isFilterActive ? 'w-[900px]' : 'md:w-[725px]'
                        } md:flex flex-col md:flex-row items-center h-auto md:h-[64px] mx-auto md:bg-white px-1 md:rounded-full overflow-hidden`}
                  >
                        <SearchInput
                              filter={isFilterActive}
                              value={localQuery} // Show immediate input in local state
                              setSearchQuery={handleSearchChange} // Pass handleSearchChange with debounce
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

                              {/* practice type  */}
                              <ConfigProvider
                                    theme={{
                                          components: {
                                                Select: {
                                                      selectorBg: '#EEEEEE',
                                                      borderRadius: 50,
                                                      fontSizeIcon: 16,
                                                      colorIcon: 'red',
                                                },
                                          },
                                    }}
                              >
                                    <Select
                                          allowClear
                                          clearIcon={
                                                <FaXmark
                                                      style={{
                                                            color: 'red',
                                                            fontSize: 20,
                                                            margin: '0px 0px 10px 0px',
                                                            backgroundColor: 'inherit',
                                                      }}
                                                />
                                          } // Custom clear icon with red color and larger size
                                          size="large"
                                          placeholder={<p className="mr-4">Practice Type</p>}
                                          onChange={(value) => {
                                                dispatch(setPracticeType(value));
                                                router.push(`/search`);
                                          }}
                                          suffixIcon={<FaChevronDown size={18} color="#0A8FDC" />} // Custom dropdown icon
                                          style={{
                                                width: '100%',
                                                height: 54,
                                                borderRadius: 60,
                                                color: '#4E4E4E', // Text color
                                          }}
                                    >
                                          {practiceTypes?.map((option, index) => (
                                                <Option key={index} value={option?.type}>
                                                      {option?.type}
                                                </Option>
                                          ))}
                                    </Select>
                              </ConfigProvider>

                              {/* practice Need  */}
                              <ConfigProvider
                                    theme={{
                                          components: {
                                                Select: {
                                                      selectorBg: '#EEEEEE',
                                                      borderRadius: 50,
                                                      fontSizeIcon: 16,
                                                      colorIcon: 'red',
                                                },
                                          },
                                    }}
                              >
                                    <Select
                                          allowClear
                                          clearIcon={
                                                <FaXmark
                                                      style={{
                                                            color: 'red',
                                                            fontSize: 20,
                                                            margin: '0px 0px 10px 0px',
                                                            backgroundColor: 'inherit',
                                                      }}
                                                />
                                          } // Custom clear icon with red color and larger size
                                          size="large"
                                          placeholder={<p className="mr-4">Practice Need</p>}
                                          onChange={(value) => {
                                                dispatch(setPracticeType(value));
                                                router.push(`/search`);
                                          }}
                                          suffixIcon={<FaChevronDown size={18} color="#0A8FDC" />} // Custom dropdown icon
                                          style={{
                                                width: '100%',
                                                height: 54,
                                                borderRadius: 60,
                                                color: '#4E4E4E', // Text color
                                          }}
                                    >
                                          {practiceNeeds?.map((option, index) => (
                                                <Option key={index} value={option?.need}>
                                                      {option?.need}
                                                </Option>
                                          ))}
                                    </Select>
                              </ConfigProvider>

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

                  {/* Filter section for mobile device */}
                  <div className="md:hidden flex justify-center items-center gap-4 mx-4">
                        <input
                              value={localQuery}
                              onChange={(e) => handleSearchChange(e.target.value)} // Update local state and trigger debounce
                              className="h-12 w-full px-4 rounded-full border-none outline-none ring-0 focus:outline-none focus:ring-0"
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
                        <div className="flex h-full flex-wrap justify-center items-center gap-4 my-4 text-[#CCCCCC] text-sm font-medium">
                              {location && <FilterItem label="Place" value={location} />}
                              {price && <FilterItem label="Price" value={price} />}
                              {practiceType && <FilterItem label="Practice on" value={practiceType} />}
                              {practiceNeed && <FilterItem label="Practice Need" value={practiceNeed} />}
                              {facilities && <FilterItem label="Facilities" value={facilities} />}
                        </div>
                  </div>

                  <FilterModal
                        key="filterModal"
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
