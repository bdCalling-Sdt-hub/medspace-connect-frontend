'use client';
import MyMedicalSpacePostCard from '@/src/components/ui/MyMedicalSpacePostCard';
import Modal from '@/src/components/ui/Modal';
import { useState } from 'react';
import { Button, Form, Input, DatePicker, Select, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';

const MyPost = () => {
    const [editModal, setEditModal] = useState(false);
    const [editPostData, setEditPostData] = useState({
        images: [],
        postTitle: 'Doctors Practice Room',
        price: '150',
        priceType: 'demo',
        location: '22/96A, New York, USA',
        openingDate: '2024-10-01',
        practiceFor: 'dentalCare',
        facilities: ['furnished', 'newest'],
        description: 'Description of the practice room...',
    });

    const onFinish = (values: any) => {
        console.log('Form Submitted:', values);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    // Form layout and fields with initial values
    const renderForm = () => (
        <Form
            className="p-2"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                postTitle: editPostData.postTitle,
                price: editPostData.price,
                priceType: editPostData.priceType,
                location: editPostData.location,
                openingDate: moment(editPostData.openingDate),
                practiceFor: editPostData.practiceFor,
                facilities: editPostData.facilities,
                description: editPostData.description,
            }}
        >
            {/* Image Upload */}
            <div className="flex items-center space-x-4 mb-6">
                <Form.Item
                    name="images"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e.fileList}
                    rules={[{ required: true, message: 'Please select an image' }]}
                >
                    <Upload multiple listType="picture-card" className="avatar-uploader" showUploadList={true}>
                        {uploadButton}
                    </Upload>
                </Form.Item>
            </div>

            {/* Post Title, Price, and Location Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                <Form.Item
                    name="postTitle"
                    label="Post Title"
                    rules={[{ required: true, message: 'Please enter the post title!' }]}
                >
                    <Input style={{ borderRadius: '24px', height: '48px' }} placeholder="Doctors Practice Room" />
                </Form.Item>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: 'Please enter the price!' }]}
                    >
                        <Input style={{ borderRadius: '24px', height: '48px' }} placeholder="$150" />
                    </Form.Item>

                    <Form.Item
                        name="priceType"
                        label="Price Type"
                        rules={[{ required: true, message: 'Please select the price type!' }]}
                    >
                        <Select placeholder="Select Price Type" style={{ height: '48px', borderRadius: 40 }}>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                </div>

                <Form.Item
                    name="location"
                    label="Location"
                    rules={[{ required: true, message: 'Please enter the location!' }]}
                >
                    <Input style={{ borderRadius: '24px', height: '48px' }} placeholder="22/96A, New York, USA" />
                </Form.Item>

                <Form.Item
                    name="openingDate"
                    label="Opening Date"
                    rules={[{ required: true, message: 'Please enter the opening date!' }]}
                >
                    <DatePicker className="w-full" style={{ borderRadius: '24px', height: '48px' }} />
                </Form.Item>

                <Form.Item
                    name="practiceFor"
                    label="Practice for"
                    rules={[{ required: true, message: 'Please select practice type!' }]}
                >
                    <Select style={{ borderRadius: '24px', height: '48px' }} placeholder="Select Practice">
                        <Select.Option value="dentalCare">Dental Care</Select.Option>
                        <Select.Option value="surgery">Surgery</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="facilities"
                    label="Facilities"
                    rules={[{ required: true, message: 'Please select the facilities!' }]}
                >
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
            <Form.Item name="description" label="Description">
                <TextArea
                    style={{ borderRadius: '24px', height: 'auto', paddingTop: 20 }}
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
            {[...Array(2)].map((_, index) => (
                <MyMedicalSpacePostCard index={index} setEditModal={setEditModal} key={index} />
            ))}

            <Modal body={renderForm()} open={editModal} setOpen={setEditModal} key="editModal" width={900} />
        </div>
    );
};

export default MyPost;
