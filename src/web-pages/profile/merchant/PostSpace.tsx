'use client';
/* eslint-disable @next/next/no-img-element */
import Modal from '@/src/components/ui/Modal';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Button, Form, Input, DatePicker, Select, Upload, ConfigProvider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
const { Option } = Select;
const PostSpace = () => {
    const [modal, setModal] = useState(false);
    const onFinish = (values: any) => {
        console.log('Form Submitted:', values);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const body = (
        <Form className="p-2" layout="vertical" onFinish={onFinish}>
            <div className="flex items-center space-x-4 mb-6">
                <Form.Item
                    valuePropName="fileList" // Use fileList as the prop for value
                    getValueFromEvent={(e) => e.fileList}
                    name="images"
                >
                    <Upload multiple listType="picture-card" className="avatar-uploader" showUploadList={true}>
                        {uploadButton}
                    </Upload>
                </Form.Item>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Form.Item
                    label={<span className="custom-label">Post Title</span>}
                    name="postTitle"
                    rules={[{ required: true, message: 'Please enter the post title!' }]}
                >
                    <Input style={{ borderRadius: '24px', height: '48px' }} placeholder="Doctors Practice Room" />
                </Form.Item>

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
                    <Select placeholder="Select Price Type" style={{ height: '48px', borderRadius: 40 }}>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">Location</span>}
                    name="location"
                    rules={[{ required: true, message: 'Please enter the location!' }]}
                >
                    <Input style={{ borderRadius: '24px', height: '48px' }} placeholder="22/96A, New York, USA" />
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">Opening Date</span>}
                    name="openingDate"
                    rules={[{ required: true, message: 'Please enter the opening date!' }]}
                >
                    <DatePicker className="w-full" style={{ borderRadius: '24px', height: '48px' }} />
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">Practice for</span>}
                    name="practiceFor"
                    rules={[{ required: true, message: 'Please select practice type!' }]}
                >
                    <Select style={{ borderRadius: '24px', height: '48px' }} placeholder="Select Practice">
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

            <Form.Item label={<span className="custom-label">Description</span>} name="description">
                <TextArea
                    style={{ borderRadius: '24px', height: 'auto', paddingTop: 20 }}
                    rows={4}
                    cols={4}
                    placeholder="Asadujjaman"
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
    );
    return (
        <div className="flex items-center md:ms-[650px] gap-5">
            <h1 className="text-secondary text-xl">Remaining Post : 3/6</h1>
            <Button
                onClick={() => setModal(true)}
                icon={<FaPlus size={18} />}
                shape="round"
                className="px-6"
                style={{
                    height: '54px',
                    width: '141px',
                    backgroundColor: '#0A8FDC',
                    fontWeight: '500',
                    border: 'none',
                    color: '#fff',
                }}
            >
                New Post
            </Button>

            <Modal width={900} open={modal} setOpen={setModal} key={'post'} body={body} />
        </div>
    );
};

export default PostSpace;
