'use client';
import { Button, Select } from 'antd';
import { useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { SearchOutlined } from '@ant-design/icons';
import { FaChevronDown } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const { Option } = Select;

const Filter = () => {
    const [filter, setFilter] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [practiceType, setPracticeType] = useState('');
    const [facilities, setFacilities] = useState('');

    const router = useRouter();

    const handleSearch = () => {
        const params = new URLSearchParams();

        if (searchQuery) params.set('search', searchQuery);
        if (location) params.set('location', location);
        if (price) params.set('price', price);
        if (practiceType) params.set('practiceType', practiceType);
        if (facilities) params.set('facilities', facilities);

        router.push(`/search?${params.toString()}`);
    };

    // options for dropdowns
    const locationOptions = [
        { label: 'New York', value: 'new_york' },
        { label: 'Los Angeles', value: 'los_angeles' },
    ];

    const priceOptions = [
        { label: '$100 - $500/m', value: '100-500' },
        { label: '$500 - $1000/m', value: '500-1000' },
    ];

    const practiceTypeOptions = [
        { label: 'Dental Care', value: 'dental_care' },
        { label: 'Eye Care', value: 'eye_care' },
    ];

    const facilitiesOptions = [
        { label: 'Wi-Fi', value: 'wifi' },
        { label: 'Parking', value: 'parking' },
    ];

    return (
        <div className="bg-[#F7F7F7] pb-8 pt-2">
            <div
                className={`${
                    filter ? 'md:w-[900px]' : 'md:w-[725px]'
                } flex flex-col md:flex-row items-center h-auto md:h-[64px] mx-auto md:bg-white px-1 md:shadow-sm md:rounded-full overflow-hidden`}
            >
                <div>
                    <input
                        placeholder="Search here"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="my-5 md:hidden rounded-3xl border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none border-transparent px-8 py-5 text-primaryText"
                    />
                </div>
                <div className="hidden md:block">
                    <SearchInput
                        filter={filter}
                        value={searchQuery}
                        setSearchQuery={setSearchQuery}
                        handleSearch={handleSearch}
                    />
                </div>
                <FilterButton filter={filter} setFilter={setFilter} />
                <DropdownsContainer
                    filter={filter}
                    location={location}
                    price={price}
                    practiceType={practiceType}
                    facilities={facilities}
                    setLocation={setLocation}
                    setPrice={setPrice}
                    setPracticeType={setPracticeType}
                    setFacilities={setFacilities}
                    handleSearch={handleSearch}
                    locationOptions={locationOptions}
                    priceOptions={priceOptions}
                    practiceTypeOptions={practiceTypeOptions}
                    facilitiesOptions={facilitiesOptions}
                />
            </div>

            <div className="container mx-auto">
                <div className="flex flex-wrap items-center gap-4 my-4 text-[#CCCCCC] text-sm font-medium">
                    {/* Filter Item */}
                    {location && (
                        <div className="flex items-center">
                            <span className="capitalize">Place: {location}</span>
                            <span className="ml-2 text-[#FBA51A]">✕</span>
                        </div>
                    )}
                    {/* Filter Item */}
                    {price && (
                        <div className="flex items-center">
                            <span className="capitalize">Price: {[price]}</span>
                            <span className="ml-2 text-[#FBA51A]">✕</span>
                        </div>
                    )}
                    {/* Filter Item */}
                    {practiceType && (
                        <div className="flex items-center">
                            <span className="capitalize">Practice on: {practiceType}</span>
                            <span className="ml-2 text-[#FBA51A]">✕</span>
                        </div>
                    )}
                    {/* Filter Item */}
                    {facilities && (
                        <div className="flex items-center">
                            <span className="capitalize">Facilities: {facilities}</span>
                            <span className="ml-2 text-[#FBA51A]">✕</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Filter;

const SearchInput = ({
    filter,
    value,
    setSearchQuery,
    handleSearch,
}: {
    filter: boolean;
    value: string;
    setSearchQuery: (val: string) => void;
    handleSearch: () => void;
}) => (
    <input
        placeholder="Search here"
        value={value}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className={`bg-transparent ${
            filter ? '-ms-[600px] duration-500' : 'duration-500'
        } flex-1 h-[54px] min-w-full min-h-[200px] md:min-w-[600px] text-sm border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none border-transparent px-4 md:px-8 py-2 text-primaryText`}
    />
);

const FilterButton = ({ filter, setFilter }: { filter: boolean; setFilter: (value: boolean) => void }) => (
    <Button
        onClick={() => setFilter(!filter)}
        shape="round"
        icon={
            filter ? (
                <SearchOutlined size={20} className="text-white text-3xl" />
            ) : (
                <IoOptionsOutline className="text-3xl mx-3" size={20} />
            )
        }
        className="px-4 my-4 md:my-0"
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

const DropdownsContainer = ({
    filter,

    setLocation,
    setPrice,
    setPracticeType,
    setFacilities,
    handleSearch,
    locationOptions,
    priceOptions,
    practiceTypeOptions,
    facilitiesOptions,
}: {
    filter: boolean;
    location: string;
    price: string;
    practiceType: string;
    facilities: string;
    setLocation: (val: string) => void;
    setPrice: (val: string) => void;
    setPracticeType: (val: string) => void;
    setFacilities: (val: string) => void;
    handleSearch: () => void;
    locationOptions: Array<{ label: string; value: string }>;
    priceOptions: Array<{ label: string; value: string }>;
    practiceTypeOptions: Array<{ label: string; value: string }>;
    facilitiesOptions: Array<{ label: string; value: string }>;
}) => (
    <div
        className={`${
            filter ? 'ms-0 duration-500 ' : 'ms-[500px] duration-500'
        } flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center w-full my-5 h-auto md:h-[64px] mx-auto px-1  rounded-full`}
    >
        <CustomSelect
            options={locationOptions}
            placeholder={'Location'}
            onChange={setLocation}
            handleSearch={handleSearch}
        />
        <CustomSelect options={priceOptions} placeholder={'Price'} onChange={setPrice} handleSearch={handleSearch} />
        <CustomSelect
            options={practiceTypeOptions}
            placeholder={'Practice Type'}
            onChange={setPracticeType}
            handleSearch={handleSearch}
        />
        <CustomSelect
            options={facilitiesOptions}
            placeholder={'Facilities'}
            onChange={setFacilities}
            handleSearch={handleSearch}
        />
    </div>
);

const CustomSelect = ({
    options,
    placeholder,
    onChange,
    handleSearch,
}: {
    options: Array<{ label: string; value: string }>;
    placeholder: string;
    onChange: (val: string) => void;
    handleSearch: () => void;
}) => (
    <Select
        size="large"
        placeholder={placeholder}
        onChange={(value) => {
            onChange(value);
            handleSearch(); // Trigger search on dropdown selection
        }}
        suffixIcon={<FaChevronDown size={18} color="#0A8FDC" />}
        style={{
            width: '100%',
            maxWidth: '180px',
            height: 54,
            borderRadius: 40,
            color: '#4E4E4E',
        }}
    >
        {options.map((option) => (
            <Option key={option.value} value={option.value}>
                {option.label}
            </Option>
        ))}
    </Select>
);
