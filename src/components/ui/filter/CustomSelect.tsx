import { ConfigProvider, Select } from 'antd';
import { CiCircleRemove } from 'react-icons/ci';
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
                    selectorBg: '#EEEEEE',
                    borderRadius: 50,
                    fontSizeIcon: 16,
                    colorIcon: '#0A8FDC',
                },
            },
        }}
    >
        <Select
            allowClear
            removeIcon={<CiCircleRemove style={{ color: '#FF0000', fontSize: '18px' }} />} // Custom clear icon with styles
            size="large"
            placeholder={<p className="mr-4">{placeholder}</p>}
            onChange={(value) => {
                onChange(value);
            }}
            suffixIcon={<FaChevronDown className="" size={18} color="#0A8FDC" />} // Custom dropdown icon
            style={{
                width: '100%',
                height: 54,
                borderRadius: 60,
                color: '#4E4E4E', // Text color
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
