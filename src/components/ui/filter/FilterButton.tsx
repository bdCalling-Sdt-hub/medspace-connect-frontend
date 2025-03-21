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
            filter ? 'w-[65px]' : ''
        } px-5 flex items-center justify-center gap-3 my-4 md:my-0 h-[54px] w-[141px] bg-[#0A8FDC] text-white rounded-full`}
        style={{ height: '54px' }}
    >
        {filter ? (
            <SearchOutlined className="text-2xl" />
        ) : (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM3 16.25C2.58579 16.25 2.25 16.5858 2.25 17C2.25 17.4142 2.58579 17.75 3 17.75V16.25ZM9 17.75C9.41421 17.75 9.75 17.4142 9.75 17C9.75 16.5858 9.41421 16.25 9 16.25V17.75ZM21 17.75C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25V17.75ZM15 6.25C14.5858 6.25 14.25 6.58579 14.25 7C14.25 7.41421 14.5858 7.75 15 7.75V6.25ZM21 7.75C21.4142 7.75 21.75 7.41421 21.75 7C21.75 6.58579 21.4142 6.25 21 6.25V7.75ZM3 7.75H6V6.25H3V7.75ZM3 17.75H9V16.25H3V17.75ZM18 17.75H21V16.25H18V17.75ZM15 7.75H21V6.25H15V7.75ZM17.25 17C17.25 18.2426 16.2426 19.25 15 19.25V20.75C17.0711 20.75 18.75 19.0711 18.75 17H17.25ZM15 19.25C13.7574 19.25 12.75 18.2426 12.75 17H11.25C11.25 19.0711 12.9289 20.75 15 20.75V19.25ZM12.75 17C12.75 15.7574 13.7574 14.75 15 14.75V13.25C12.9289 13.25 11.25 14.9289 11.25 17H12.75ZM15 14.75C16.2426 14.75 17.25 15.7574 17.25 17H18.75C18.75 14.9289 17.0711 13.25 15 13.25V14.75ZM11.25 7C11.25 8.24264 10.2426 9.25 9 9.25V10.75C11.0711 10.75 12.75 9.07107 12.75 7H11.25ZM9 9.25C7.75736 9.25 6.75 8.24264 6.75 7H5.25C5.25 9.07107 6.92893 10.75 9 10.75V9.25ZM6.75 7C6.75 5.75736 7.75736 4.75 9 4.75V3.25C6.92893 3.25 5.25 4.92893 5.25 7H6.75ZM9 4.75C10.2426 4.75 11.25 5.75736 11.25 7H12.75C12.75 4.92893 11.0711 3.25 9 3.25V4.75Z"
                    fill="#EEEEEE"
                />
            </svg>
        )}
        {!filter && 'Filter'}
    </button>
);
