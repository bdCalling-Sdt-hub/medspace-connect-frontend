import { ConfigProvider, Select } from 'antd';
import { CiCircleRemove } from 'react-icons/ci';
import { FaChevronDown, FaXmark } from 'react-icons/fa6';
const { Option } = Select;

export const CustomSelect = ({
      options,
      placeholder,
      onChange,
}: {
      options: Array<{ label: string; value: string }>;
      placeholder: string;
      onChange: (val: string) => void;
}) => (
      <ConfigProvider
            theme={{
                  components: {
                        Select: {
                              selectorBg: '#EEEEEE',
                              borderRadius: 50,
                              fontSizeIcon: 16,
                              colorIcon: 'red',
                        },
                  },
            }}
      >
            <Select
                  allowClear
                  clearIcon={
                        <FaXmark
                              style={{
                                    color: 'red',
                                    fontSize: 20,
                                    margin: '0px 0px 10px 0px',
                                    backgroundColor: 'inherit',
                              }}
                        />
                  } // Custom clear icon with red color and larger size
                  size="large"
                  placeholder={<p className="mr-4">{placeholder}</p>}
                  onChange={(value) => {
                        onChange(value);
                  }}
                  suffixIcon={<FaChevronDown size={18} color="#0A8FDC" />} // Custom dropdown icon
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
