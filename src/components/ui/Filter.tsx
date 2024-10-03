'use client';
import { Button, Select } from 'antd';
import { useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { SearchOutlined } from '@ant-design/icons';
import { FaChevronDown } from 'react-icons/fa6';

const { Option } = Select;

const Filter = () => {
    const [filter, setFilter] = useState(false);

    return (
        <div className="bg-[#F7F7F7] pb-8 pt-2">
            <div
                className={`
                    ${
                        filter ? 'md:w-[900px]' : 'md:w-[699px]'
                    } flex flex-col md:flex-row items-center h-auto md:h-[64px] mx-auto md:bg-white px-1 md:shadow-lg md:rounded-full overflow-hidden`}
            >
                <div>
                    <input
                        placeholder="Search here"
                        className={`
                            my-5   md:hidden rounded-3xl
                            border-none focus:outline-none focus:ring-0 
            focus-visible:ring-0 focus-visible:outline-none border-transparent px-8 py-5 text-primaryText
        `}
                    />
                </div>
                <div className="hidden md:block">
                    <SearchInput filter={filter} />
                </div>
                <FilterButton filter={filter} setFilter={setFilter} />
                <DropdownsContainer filter={filter} />
            </div>
        </div>
    );
};

export default Filter;

const SearchInput = ({ filter }: { filter: boolean }) => (
    <input
        placeholder="Search here"
        className={`
            bg-transparent
            ${filter ? '-ms-[600px] duration-500' : 'duration-500'}
            flex-1 h-[54px] min-w-full min-h-[200px] md:min-w-[600px] text-sm border-none focus:outline-none focus:ring-0 
            focus-visible:ring-0 focus-visible:outline-none border-transparent px-4 md:px-8 py-2 text-primaryText
        `}
    />
);

const FilterButton = ({ filter, setFilter }: { filter: boolean; setFilter: (value: boolean) => void }) => (
    <Button
        onClick={() => setFilter(!filter)}
        shape="round"
        icon={filter ? <SearchOutlined size={20} className="text-white text-2xl" /> : <IoOptionsOutline size={20} />}
        className="px-6 my-4 md:my-0"
        style={{
            height: '54px',
            width: '141px',
            backgroundColor: '#0A8FDC',
            color: '#fff',
        }}
    >
        {filter ? '' : 'Filter'}
    </Button>
);

const DropdownsContainer = ({ filter }: { filter: boolean }) => (
    <div
        className={`${
            filter ? 'ms-0 duration-500 ' : 'ms-[500px] duration-500'
        } flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center w-full my-5 h-auto md:h-[64px] mx-auto px-1 md:shadow-lg rounded-full`}
    >
        <CustomSelect label="Location" />
        <CustomSelect label="Price" />
        <CustomSelect label="Practice Type" />
        <CustomSelect label="Facilities" />
    </div>
);

const CustomSelect = ({ label }: { label: string }) => (
    <Select
        size="large"
        defaultValue={label}
        suffixIcon={<FaChevronDown size={20} color="#0A8FDC" />}
        style={{
            width: '100%', // Full width on mobile, adjust on larger screens
            maxWidth: '180px', // Ensure a max width on larger screens
            height: 54,
            borderRadius: 40,
            color: '#4E4E4E',
        }}
    >
        <Option value={`${label.toLowerCase()}1`}>{`${label} 1`}</Option>
        <Option value={`${label.toLowerCase()}2`}>{`${label} 2`}</Option>
    </Select>
);
