'use client';
import MyMedicalSpacePostCard from '@/src/components/ui/MyMedicalSpacePostCard';
import Modal from '@/src/components/ui/Modal';
import { useState, useEffect } from 'react';
import { Button, Form, Input, DatePicker, Select, Upload, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';
import { useGetMySpaceQuery, useUpdateSpaceMutation } from '@/src/redux/features/space/spaceApi';
import { imageUrl } from '@/src/redux/features/api/baseApi';
import { practiceNeedOptions } from '@/src/const/const';
const { Option } = Select;
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
      spaceImages?: string[];
};

const MyPost = () => {
      const [form] = Form.useForm();
      const { data: mySpace, isFetching } = useGetMySpaceQuery([]);
      const [updateSpace] = useUpdateSpaceMutation();

      const [editModal, setEditModal] = useState(false);
      const [modalData, setModalData] = useState<SpaceData>();
      const [fileList, setFileList] = useState<any[]>([]); // State to handle file list
      const [removedImages, setRemovedImages] = useState<string[]>([]); // State to track removed images

      // Function to create file list for Upload from URLs
      const getFileListFromUrls = (urls: string[]) => {
            return urls.map((url, index) => ({
                  uid: `${index}`,
                  name: `image-${index}.png`,
                  status: 'done',
                  url: `${imageUrl}/${url}`,
            }));
      };

      // Set form initial values and fileList when modalData changes
      useEffect(() => {
            if (modalData) {
                  form.setFieldsValue({
                        title: modalData.title,
                        price: modalData.price,
                        location: modalData.location,
                        description: modalData.description,
                        images: getFileListFromUrls(modalData.spaceImages || []),
                        openingDate: modalData.openingDate ? moment(modalData.openingDate) : null,
                        priceType: modalData.priceType,
                        speciality: modalData.speciality,
                        practiceFor: modalData.practiceFor,
                        facilities: modalData.facilities,
                  });
                  setFileList(getFileListFromUrls(modalData.spaceImages || []));
            }
      }, [modalData, form]);

      // Handle file change in Upload component
      const handleFileChange = ({ fileList: newFileList }: any) => {
            setFileList(newFileList);
      };

      // Track removed images
      const handleRemove = (file: any) => {
            if (file.url) {
                  const removedUrl = file.url.replace(`${imageUrl}/`, ''); // Extract relative path
                  setRemovedImages((prev) => [...prev, removedUrl]);
            }
            return true; // Allow removal in the UI
      };

      const onFinish = async (values: any) => {
            const newImages = values?.images?.filter((file: any) => file.size);
            console.log(newImages, removedImages);

            const formData = new FormData();

            // Append new images if they exist
            if (newImages) {
                  newImages.forEach((file: any) => formData.append('addImages', file.originFileObj));
            }

            // Manually append all other data fields

            formData.append('title', values.title);
            formData.append('price', values.price);
            formData.append('location', values.location);
            formData.append('description', values.description);
            formData.append('openingDate', values.openingDate ? values.openingDate.toISOString() : '');
            formData.append('priceType', values.priceType);
            formData.append('practiceFor', values.practiceFor);
            formData.append('facilities', values.facilities);
            formData.append('speciality', values.speciality);

            // Append removed images array as JSON string
            formData.append('removeImages', JSON.stringify(removedImages));

            try {
                  const updateSpaceInfo = {
                        id: modalData?._id,
                        data: formData,
                  };

                  // Uncomment and use the following line once you're ready to send the request
                  const res = await updateSpace(updateSpaceInfo).unwrap();
                  console.log(res);

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

      // console.log(removedImages);

      const renderForm = () => (
            <Form className="p-2" layout="vertical" form={form} onFinish={onFinish}>
                  {/* Image Upload */}
                  <div className="flex items-center space-x-4 mb-6">
                        <Form.Item name="images" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                              <Upload
                                    multiple
                                    listType="picture-card"
                                    fileList={fileList} // Controlled fileList state
                                    onChange={handleFileChange} // Update file list on file change
                                    onRemove={handleRemove} // Track removed files
                                    beforeUpload={() => false} // Prevent auto-upload
                                    className="avatar-uploader"
                                    showUploadList={true}
                              >
                                    {uploadButton}
                              </Upload>
                        </Form.Item>
                  </div>

                  {/* Title, Price, Location, Date, Practice For, and Facilities Fields */}
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
                                    {practiceNeedOptions?.map((option) => (
                                          <Option key={option.value} value={option.value}>
                                                {option.label}
                                          </Option>
                                    ))}
                              </Select>
                        </Form.Item>
                        <Form.Item name="facilities" label="Facilities">
                              <Select
                                    mode="tags"
                                    // mode="multiple"
                                    style={{ borderRadius: '24px', height: '48px' }}
                                    placeholder="Select Facilities"
                              >
                                    <Select.Option value="furnished">Furnished</Select.Option>
                                    <Select.Option value="newest">Newest</Select.Option>
                                    <Select.Option value="hospital">Hospital</Select.Option>
                              </Select>
                        </Form.Item>
                  </div>

                  {/* Specialty and Description Fields */}
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
