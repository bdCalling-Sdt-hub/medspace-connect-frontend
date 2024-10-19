import { ConfigProvider, Select } from 'antd';
import { FaChevronDown } from 'react-icons/fa6';
const { Option } = Select;
export const CustomSelect = ({
    options,
    placeholder,
    onChange,
}: {
    options: Array<{ label: string; value: string }>;
    placeholder: string;
    onChange: (val: string) => void;
    // handleSearch: () => void;
}) => (
    <ConfigProvider
        theme={{
            components: {
                Select: {
                    // colorText: 'red',
                },
            },
        }}
    >
        <Select
            size="large"
            placeholder={<p className="mr-4">{placeholder} </p>}
            onChange={(value) => {
                onChange(value);
                // handleSearch();
            }}
            suffixIcon={<FaChevronDown className="mx-4" size={16} color="#0A8FDC" />}
            style={{
                width: '100%',
                // maxWidth: '180px',
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
    </ConfigProvider>
);
