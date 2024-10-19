export const FilterItem = ({
    label,
    value,
    clearFilter,
}: {
    label: string;
    value: string;
    clearFilter: () => void;
}) => (
    <div className="flex items-center">
        <span className="capitalize">
            {label}: {value}
        </span>
        <button onClick={clearFilter} className="ml-2 text-[#FBA51A]">
            ✕
        </button>
    </div>
);
