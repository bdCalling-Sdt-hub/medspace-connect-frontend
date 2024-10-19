import { IoOptionsOutline } from 'react-icons/io5';
import { SearchOutlined } from '@ant-design/icons';

interface FilterButtonProps {
    filter: boolean;
    setFilter: (value: boolean) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ filter, setFilter }) => (
    <button
        onClick={() => setFilter(!filter)}
        className={`${
            filter ? 'w-[60px]' : ''
        } px-4 flex items-center justify-center gap-5 my-4 md:my-0 h-[54px] w-[141px] bg-[#0A8FDC] text-white rounded-full`}
        style={{ height: '54px' }}
    >
        {filter ? <SearchOutlined className="text-2xl" /> : <IoOptionsOutline className="text-2xl" />}
        {!filter && 'Filter'}
    </button>
);
