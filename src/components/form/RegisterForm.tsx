'use client';
import { Button, Checkbox, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const RegisterForm = ({
    onFinish,
    setLoginModal,
    setRegisterModal,
}: {
    onFinish: (values: any) => void;
    setLoginModal: Dispatch<SetStateAction<boolean>>;
    setRegisterModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const [userType, setUserType] = useState('doctor');

    const [form] = Form.useForm();

    // Update the role field when the userType changes
    useEffect(() => {
        form.setFieldsValue({
            role: userType,
        });
    }, [userType, form]);
    const handleModal = () => {
        setLoginModal(true);
        setRegisterModal(false);
    };
    return (
        <div className="md:p-6">
            <div className="space-y-5 mb-5">
                <h2 className="text-3xl text-[#333333] font-semibold text-center">Sign up</h2>
                <p className="text-center text-gray-500 mb-6">Please Enter Your Personal Data</p>
            </div>
            {/* User Type Toggle */}
            <div className="flex justify-center space-x-4 mb-6">
                <Button
                    onClick={() => setUserType('doctor')}
                    type="primary"
                    size="large"
                    className="rounded-full px-6"
                    style={{
                        backgroundColor: userType === 'doctor' ? '#0A8FDC' : '#F7F7F7',
                        color: userType === 'doctor' ? 'white' : '#999999',
                    }}
                >
                    Doctor
                </Button>
                <Button
                    onClick={() => setUserType('merchant')}
                    type="primary"
                    size="large"
                    className="rounded-full px-6"
                    style={{
                        backgroundColor: userType === 'merchant' ? '#0A8FDC' : '#F7F7F7',
                        color: userType === 'merchant' ? 'white' : '#999999',
                    }}
                >
                    Space Provider
                </Button>
            </div>

            {/* Signup Form */}
            <Form
                form={form}
                layout="vertical"
                name="signup"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className="space-y-4"
            >
                {/* Hidden field for role */}
                <Form.Item name="role" hidden>
                    <Input />
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">User Name</span>}
                    name="username"
                    rules={[{ required: true, message: 'Please enter your username!' }]}
                >
                    <Input size="large" placeholder="Asadujjaman" style={{ borderRadius: '24px', height: '48px' }} />
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">Email</span>}
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email!' }]}
                >
                    <Input
                        size="large"
                        placeholder="Asadujjaman@gmail.com"
                        style={{ borderRadius: '24px', height: '48px' }}
                    />
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">Contact No</span>}
                    name="contactNo"
                    rules={[{ required: true, message: 'Please enter your contact number!' }]}
                >
                    <Input
                        size="large"
                        placeholder="Asadujjaman@gmail.com"
                        style={{ borderRadius: '24px', height: '48px' }}
                    />
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">Password</span>}
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password
                        size="large"
                        placeholder="Enter your password"
                        style={{ borderRadius: '24px', height: '48px' }}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>

                <Form.Item
                    label={<span className="custom-label">Confirm Password</span>}
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                    <Input.Password
                        size="large"
                        placeholder="Confirm your password"
                        style={{ borderRadius: '24px', height: '48px' }}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: 'Please accept the terms of service and privacy policy to proceed.',
                        },
                    ]}
                    name="agreement"
                    valuePropName="checked"
                >
                    <Checkbox>
                        I agree to the <a className="text-primary">Terms of Service</a> and{' '}
                        <a className="text-primary">Privacy Policy</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="w-full rounded-full"
                        style={{
                            backgroundColor: '#0A8FDC',
                            height: '50px',
                            fontWeight: '500',
                            color: '#fff',
                        }}
                        size="large"
                    >
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>

            <div className="text-center mt-4">
                <span>Don’t have any account? </span>
                <a onClick={handleModal} className="text-blue-500">
                    Log In
                </a>
            </div>
        </div>
    );
};

export default RegisterForm;
