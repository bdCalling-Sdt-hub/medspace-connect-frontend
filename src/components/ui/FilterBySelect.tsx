'use client';
import { Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaChevronDown } from 'react-icons/fa6';
const { Option } = Select;
const FilterBySelect = () => {
    return (
        <div className="flex items-center w-fit my-5 h-[64px] mx-auto bg-white px-1 shadow-lg rounded-full ">
            {/* Search Icon */}
            <div className="flex items-center cursor-pointer justify-center bg-primary  size-[54px] mx-2 rounded-full">
                <SearchOutlined className="text-white text-3xl" />
            </div>

            {/* Dropdowns */}
            <div className="flex space-x-4 items-center">
                {/* Location Dropdown */}
                <Select
                    size="large"
                    defaultValue="Location"
                    suffixIcon={<FaChevronDown size={20} color="#0A8FDC" />}
                    style={{
                        width: 180,
                        height: 54,
                        borderRadius: 40,
                        color: '#4E4E4E',
                    }}
                >
                    <Option value="location1">Location 1</Option>
                    <Option value="location2">Location 2</Option>
                </Select>

                {/* Price Dropdown */}
                <Select
                    size="large"
                    defaultValue="Price"
                    suffixIcon={<FaChevronDown size={20} color="#0A8FDC" />}
                    style={{
                        width: 180,
                        height: 54,
                    }}
                >
                    <Option value="low">Low</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="high">High</Option>
                </Select>

                {/* Practice Type Dropdown */}
                <Select
                    size="large"
                    defaultValue="Practice Type"
                    suffixIcon={<FaChevronDown size={20} color="#0A8FDC" />}
                    style={{
                        width: 180,
                        height: 54,
                        borderRadius: 40,
                        color: '#4E4E4E',
                    }}
                >
                    <Option value="type1">Type 1</Option>
                    <Option value="type2">Type 2</Option>
                </Select>

                {/* Facilities Dropdown */}
                <Select
                    size="large"
                    defaultValue="Facilities"
                    suffixIcon={<FaChevronDown size={20} color="#0A8FDC" />}
                    style={{
                        width: 180,
                        height: 54,
                        borderRadius: 40,
                        color: '#4E4E4E',
                    }}
                >
                    <Option value="facility1">Facility 1</Option>
                    <Option value="facility2">Facility 2</Option>
                </Select>
            </div>
        </div>
    );
};

export default FilterBySelect;
