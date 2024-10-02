'use client';
import { Form, Input, Button, Checkbox } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import Modal from '../ui/Modal';
import ForgetForm from './ForgetForm';
import VerificationForm from './VerificationForm';

const LoginForm = ({
    onFinish,
    setLoginModal,
}: {
    onFinish: (values: any) => void;
    setForgetModal?: Dispatch<SetStateAction<boolean>>;
    setLoginModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const [forgetModal, setForgetModal] = useState(false);
    const [otpModal, setOtpModal] = useState(false);

    const handleForget = (values: any) => {
        // TODO: Implement login logic
        console.log('Login form submitted', values);

        //? after success set otp modal true
        setForgetModal(false);
        setOtpModal(true);
    };
    const handleVerifyOtp = (values: any) => {
        // TODO: Implement login logic
        console.log('Login form submitted', values);
    };
    return (
        <>
            <div className="p-8">
                <div className="space-y-5 mb-5">
                    <h2 className="text-3xl text-[#333333] font-semibold text-center">Log in to your account</h2>
                    <p className="text-center text-gray-500 mb-6">Please enter your email and password to continue</p>
                </div>

                <Form
                    layout="vertical"
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    className="space-y-4"
                >
                    <Form.Item
                        label={<span className="custom-label">Email</span>}
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email!' }]}
                    >
                        <Input
                            type="email"
                            placeholder="Enter valid email address"
                            style={{ borderRadius: '24px', height: '48px' }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<span className="custom-label">Password</span>}
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password
                            placeholder="Enter current password"
                            style={{ borderRadius: '24px', height: '48px' }}
                        />
                    </Form.Item>

                    <div className="flex justify-between items-center my-5">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember Password</Checkbox>
                        </Form.Item>
                        <a
                            onClick={() => {
                                setForgetModal(true);
                                setLoginModal(false);
                            }}
                            className="text-secondary hover:text-secondary"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <Form.Item>
                        <Button
                            htmlType="submit"
                            shape="round"
                            className="px-6"
                            style={{
                                height: '50px',
                                width: '100%',
                                backgroundColor: '#0A8FDC',
                                fontWeight: '500',
                                border: 'none',
                                color: '#fff',
                            }}
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center my-5">
                    <span className="text-primaryText">Do not have any account? </span>
                    <a className="text-blue-500">Sign Up</a>
                </div>
            </div>
            <Modal
                body={<ForgetForm onFinish={handleForget} />}
                open={forgetModal}
                setOpen={setForgetModal}
                key="forget"
                width={600}
            />
            <Modal
                body={<VerificationForm onFinish={handleVerifyOtp} />}
                open={otpModal}
                setOpen={setOtpModal}
                key="otp"
                width={600}
            />
        </>
    );
};

export default LoginForm;
