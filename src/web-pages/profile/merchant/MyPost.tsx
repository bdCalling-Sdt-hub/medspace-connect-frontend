'use client';
import MyMedicalSpacePostCard from '@/src/components/ui/MyMedicalSpacePostCard';
import Modal from '@/src/components/ui/Modal';
import { useEffect, useState } from 'react';
import { Button, Form, Input, DatePicker, Select, Upload, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';
import { TUser } from '@/src/redux/features/user/userApi';
import { useGetMySpaceQuery, useUpdateSpaceMutation } from '@/src/redux/features/space/spaceApi';
type SpaceData = {
      _id: string;
      title: string;
      price: string;
      location: string;
      description: string;
      images: { url: string }[];
      openingDate?: string;
      priceType?: string;
      practiceFor?: string;
      facilities?: string[];
      speciality?: string;
};
const MyPost = () => {
      const [form] = Form.useForm();
      const { data: mySpace, isFetching } = useGetMySpaceQuery([]);
      const [updateSpace] = useUpdateSpaceMutation();

      const [editModal, setEditModal] = useState(false);
      const [modalData, setModalData] = useState<SpaceData>();

      const onFinish = async (values: any) => {
            try {
                  const updateSpaceInfo = {
                        id: modalData?._id,
                        data: {
                              title: values.title,
                              price: values.price,
                              location: values.location,
                              description: values.description,
                              // images: values.images.map((img: any) => ({ url: img.originFileObj.url })),
                              openingDate: values.openingDate ? values.openingDate.toISOString() : '',
                              priceType: values.priceType,
                              practiceFor: values.practiceFor,
                              facilities: values.facilities,
                              speciality: values.speciality,
                        },
                  };
                  const res = await updateSpace(updateSpaceInfo).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                        setEditModal(false);
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to update space',
                  });
            }
      };

      const uploadButton = (
            <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
            </div>
      );

      const renderForm = () => (
            <Form
                  className="p-2"
                  layout="vertical"
                  onFinish={onFinish}
                  initialValues={{
                        title: modalData?.title || '',
                        price: modalData?.price || '',
                        location: modalData?.location || '',
                        description: modalData?.description || '',
                        images: modalData?.images || [],
                        openingDate: modalData?.openingDate ? moment(modalData.openingDate) : null,
                        priceType: modalData?.priceType || '',
                        speciality: modalData?.speciality || '',
                        practiceFor: modalData?.practiceFor || '',
                        facilities: modalData?.facilities || [],
                  }}
            >
                  {/* Image Upload */}
                  <div className="flex items-center space-x-4 mb-6">
                        <Form.Item
                              name="images"
                              valuePropName="fileList"
                              getValueFromEvent={(e) => e.fileList}
                              // rules={[{ required: true, message: 'Please select an image' }]}
                        >
                              <Upload
                                    multiple
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={true}
                              >
                                    {uploadButton}
                              </Upload>
                        </Form.Item>
                  </div>

                  {/* Post Title, Price, and Location Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                        <Form.Item name="title" label="Post Title">
                              <Input
                                    style={{ borderRadius: '24px', height: '48px' }}
                                    placeholder="Doctors Practice Room"
                              />
                        </Form.Item>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                              <Form.Item name="price" label="Price">
                                    <Input style={{ borderRadius: '24px', height: '48px' }} placeholder="$150" />
                              </Form.Item>

                              <Form.Item name="priceType" label="Price Type">
                                    <Select
                                          placeholder="Select Price Type"
                                          style={{ height: '48px', borderRadius: 40 }}
                                    >
                                          <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                              </Form.Item>
                        </div>

                        <Form.Item name="location" label="Location">
                              <Input
                                    style={{ borderRadius: '24px', height: '48px' }}
                                    placeholder="22/96A, New York, USA"
                              />
                        </Form.Item>

                        <Form.Item name="openingDate" label="Opening Date">
                              <DatePicker className="w-full" style={{ borderRadius: '24px', height: '48px' }} />
                        </Form.Item>

                        <Form.Item name="practiceFor" label="Practice for">
                              <Select style={{ borderRadius: '24px', height: '48px' }} placeholder="Select Practice">
                                    <Select.Option value="dentalCare">Dental Care</Select.Option>
                                    <Select.Option value="surgery">Surgery</Select.Option>
                              </Select>
                        </Form.Item>

                        <Form.Item name="facilities" label="Facilities">
                              <Select
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

                  {/* Description Field */}
                  <Form.Item name="speciality" label="Ideal occupant specialty">
                        <TextArea
                              style={{ borderRadius: '10px', height: 'auto', paddingTop: 20 }}
                              rows={4}
                              placeholder="Enter a description"
                        />
                  </Form.Item>
                  <Form.Item name="description" label="Description">
                        <TextArea
                              style={{ borderRadius: '10px', height: 'auto', paddingTop: 20 }}
                              rows={4}
                              placeholder="Enter a description"
                        />
                  </Form.Item>

                  {/* Submit Button */}
                  <Form.Item>
                        <div className="flex justify-center">
                              <Button
                                    htmlType="submit"
                                    shape="round"
                                    className="px-6"
                                    style={{
                                          height: '54px',
                                          width: '350px',
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
      );

      return (
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {/* Render Medical Post Cards */}
                  {mySpace?.map((space, index) => (
                        <MyMedicalSpacePostCard
                              setModalData={setModalData}
                              space={space}
                              index={index}
                              setEditModal={setEditModal}
                              key={index}
                        />
                  ))}

                  <Modal body={renderForm()} open={editModal} setOpen={setEditModal} key="editModal" width={900} />
            </div>
      );
};

export default MyPost;
