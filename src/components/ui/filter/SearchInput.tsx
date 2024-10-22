export const SearchInput = ({
    filter,
    value,
    setSearchQuery,
}: // handleSearch,
{
    filter: boolean;
    value: string;
    setSearchQuery: (val: string) => void;
    // handleSearch: () => void;
}) => (
    <input
        placeholder="Search here"
        value={value}
        onChange={(e) => setSearchQuery(e.target.value)}
        // onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className={`${
            filter ? ' -ms-[600px] duration-500' : 'duration-500'
        } flex-1 w-[300px] md:min-w-[600px] text-sm border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none px-4 md:px-8 py-2 text-primaryText`}
    />
);