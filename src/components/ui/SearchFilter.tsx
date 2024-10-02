import { Button } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';

const SearchFilter = ({ filter, setFilter }: { filter: boolean; setFilter: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="flex items-center w-full ">
            {/* Search Input */}

            <input
                placeholder="Search here"
                className="flex-1 h-[54px] text-sm w-[141px] border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none border-transparent px-8 py-2 text-primaryText"
            />

            {/* Filter Button */}

            <Button
                onClick={() => setFilter(!filter)}
                shape="round"
                icon={<IoOptionsOutline size={20} />}
                className="px-6"
                style={{
                    height: '54px',
                    width: '141px',
                    backgroundColor: '#0A8FDC',
                    color: '#fff',
                }}
            >
                Filter
            </Button>
        </div>
    );
};

export default SearchFilter;
