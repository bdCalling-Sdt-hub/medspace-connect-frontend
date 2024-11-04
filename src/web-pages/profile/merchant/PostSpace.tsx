'use client';
import Modal from '@/src/components/ui/Modal';
import { Dispatch, SetStateAction } from 'react';

import { Button, Form, Input, DatePicker, Select, Upload, message, ConfigProvider, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { BiChevronDown } from 'react-icons/bi';
import { MdOutlineCalendarMonth } from 'react-icons/md';

import { useCreateSpaceMutation } from '@/src/redux/features/space/spaceApi';
type TProps = {
      setModal: Dispatch<SetStateAction<boolean>>;
      modal: boolean;
};
const PostSpace = ({ modal, setModal }: TProps) => {
      const [createSpace] = useCreateSpaceMutation();
      const [form] = Form.useForm();
      const onFinish = async (values: any) => {
            try {
                  const obj = { ...values, price: Number(values.price) };
                  const data = JSON.stringify(obj);
                  const spaceImages = values.spaceImages.fileList;
                  const formData = new FormData();
                  formData.append('spaceImages', spaceImages);
                  formData.append('data', data);

                  const res = await createSpace(formData).unwrap();

                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                        form.resetFields();
                        setModal(false);
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to create space',
                  });
            }
      };

      const uploadButton = (
            <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
            </div>
      );
      const body = (
            <ConfigProvider
                  theme={{
                        components: {
                              Select: {
                                    multipleItemBg: 'transparent',
                                    fontSizeIcon: 16,
                                    colorIcon: '#0A8FDC',
                                    colorIconHover: 'red',
                              },
                        },
                  }}
            >
                  <Form form={form} className="p-2" layout="vertical" onFinish={onFinish}>
                        <div className="flex items-center space-x-4 mb-6">
                              <Form.Item
                                    name="spaceImages"
                                    label="Upload Images"
                                    rules={[
                                          {
                                                required: true,
                                                message: 'Please select at least 4 images!',
                                          },
                                          {
                                                validator: (_, value) => {
                                                      if (value && value.fileList.length < 4) {
                                                            return Promise.reject(
                                                                  new Error('You must upload at least 4 images!')
                                                            );
                                                      }
                                                      return Promise.resolve();
                                                },
                                          },
                                    ]}
                              >
                                    <Upload
                                          maxCount={5}
                                          multiple
                                          listType="picture-card"
                                          className="avatar-uploader"
                                          showUploadList={true}
                                          onChange={(info) => {
                                                if (info.file.status === 'done') {
                                                      message.success(`${info.file.name} file uploaded successfully`);
                                                } else if (info.file.status === 'error') {
                                                      message.error(`${info.file.name} file upload failed.`);
                                                }
                                          }}
                                    >
                                          {uploadButton}
                                    </Upload>
                              </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                              <Form.Item
                                    label={<span className="custom-label">Post Title</span>}
                                    name="title"
                                    rules={[{ required: true, message: 'Please enter the post title!' }]}
                              >
                                    <Input
                                          type="text"
                                          style={{ borderRadius: '24px', height: '48px' }}
                                          placeholder="Doctors Practice Room"
                                    />
                              </Form.Item>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full ">
                                    <Form.Item
                                          label={<span className="custom-label">Price</span>}
                                          name="price"
                                          rules={[{ required: true, message: 'Please enter the price!' }]}
                                    >
                                          <Input style={{ borderRadius: '24px', height: '48px' }} placeholder="$150" />
                                    </Form.Item>

                                    <Form.Item
                                          label={<span className="custom-label">Price Type</span>}
                                          name="priceType"
                                          rules={[{ required: true, message: 'Please select the price type!' }]}
                                    >
                                          <Select
                                                suffixIcon={<BiChevronDown size={26} className="text-primary" />}
                                                placeholder="Select Price Type"
                                                style={{ height: '48px', borderRadius: 40 }}
                                          >
                                                <Select.Option value="monthly">Monthly</Select.Option>
                                                <Select.Option value="yearly">Yearly</Select.Option>
                                          </Select>
                                    </Form.Item>
                              </div>

                              <Form.Item
                                    label={<span className="custom-label">Location</span>}
                                    name="location"
                                    rules={[{ required: true, message: 'Please enter the location!' }]}
                              >
                                    <Input
                                          style={{ borderRadius: '24px', height: '48px' }}
                                          placeholder="22/96A, New York, USA"
                                    />
                              </Form.Item>

                              <Form.Item
                                    label={<span className="custom-label">Opening Date</span>}
                                    name="openingDate"
                                    rules={[{ required: true, message: 'Please enter the opening date!' }]}
                              >
                                    <DatePicker
                                          suffixIcon={<MdOutlineCalendarMonth size={24} className="text-primary" />}
                                          className="w-full"
                                          style={{ borderRadius: '24px', height: '48px' }}
                                    />
                              </Form.Item>

                              <Form.Item
                                    label={<span className="custom-label">Practice for</span>}
                                    name="practiceFor"
                                    rules={[{ required: true, message: 'Please select practice type!' }]}
                              >
                                    <Select
                                          suffixIcon={<BiChevronDown size={26} className="text-primary" />}
                                          style={{ borderRadius: '24px', height: '48px' }}
                                          placeholder="Select Practice"
                                    >
                                          <Select.Option key={1} value="dentalCare">
                                                Dental Care
                                          </Select.Option>
                                          <Select.Option value="surgery">Surgery</Select.Option>
                                    </Select>
                              </Form.Item>

                              <Form.Item
                                    label={<span className="custom-label">Facilities</span>}
                                    name="facilities"
                                    rules={[{ required: true, message: 'Please select the facilities!' }]}
                              >
                                    <Select
                                          suffixIcon={<BiChevronDown size={26} className="text-primary" />}
                                          mode="multiple"
                                          style={{ borderRadius: '24px', height: '48px' }}
                                          placeholder="Select Facilities"
                                    >
                                          <Select.Option value="furnished">Furnished</Select.Option>
                                          <Select.Option value="newest">Newest</Select.Option>
                                          <Select.Option value="hospital">Hospital</Select.Option>
                                    </Select>
                              </Form.Item>
                        </div>

                        <Form.Item
                              rules={[{ required: true, message: 'Please enter ideal occupant specialty' }]}
                              label={<span className="custom-label">Ideal occupant specialty</span>}
                              name="specialty"
                        >
                              <TextArea
                                    style={{ borderRadius: '10px', height: 'auto', paddingTop: 10 }}
                                    rows={2}
                                    cols={2}
                                    placeholder="Please type ideal occupant specialty"
                              />
                        </Form.Item>
                        <Form.Item
                              label={<span className="custom-label">Description</span>}
                              name="description"
                              rules={[{ required: true, message: 'Please enter the description!' }]}
                        >
                              <TextArea
                                    style={{ borderRadius: '10px', height: 'auto', paddingTop: 10 }}
                                    rows={3}
                                    cols={3}
                                    placeholder="Please type a description"
                              />
                        </Form.Item>

                        <Form.Item>
                              <div className="flex justify-center">
                                    <Button
                                          htmlType="submit"
                                          shape="round"
                                          className="px-6"
                                          style={{
                                                height: '54px',
                                                width: '350px',
                                                margin: 'auto',
                                                backgroundColor: '#0A8FDC',
                                                fontWeight: '500',
                                                border: 'none',
                                                color: '#fff',
                                          }}
                                    >
                                          Save & Publish
                                    </Button>
                              </div>
                        </Form.Item>
                  </Form>
            </ConfigProvider>
      );
      return (
            <div className="flex items-center gap-5">
                  <Modal width={900} open={modal} setOpen={setModal} key={'post'} body={body} />
            </div>
      );
};

export default PostSpace;
