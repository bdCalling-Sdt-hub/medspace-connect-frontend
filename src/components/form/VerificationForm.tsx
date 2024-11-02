import { useForgetPasswordMutation } from '@/src/redux/features/auth/authApi';
import { Form, Input, Button, notification } from 'antd';
import { useEffect, useState } from 'react';

const VerificationForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
      const [email, setEmail] = useState('');
      const [resentOtp] = useForgetPasswordMutation();

      useEffect(() => {
            const storedEmail = localStorage.getItem('email') || '';
            setEmail(storedEmail);
      }, []);
      const handleResentOtp = async () => {
            try {
                  const res = await resentOtp({ email }).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to resent otp',
                  });
            }
      };
      return (
            <div className="p-8">
                  <div className="space-y-5 mb-5">
                        <h2 className="text-3xl text-[#333333] font-semibold text-center">Verification code</h2>
                        <p className="text-center max-w-[60ch] mx-auto text-gray-500 mb-6">
                              We sent a reset link to {email} enter 4 digit code that is mentioned in the email
                        </p>
                  </div>

                  <Form
                        layout="vertical"
                        name="onVerification"
                        initialValues={{ email, oneTimeCode: '' }}
                        onFinish={onFinish}
                        className="space-y-4"
                  >
                        <div className="flex justify-center items-center">
                              <Form.Item
                                    style={{}}
                                    name="oneTimeCode"
                                    rules={[{ required: true, message: 'Please enter the otp here!' }]}
                              >
                                    <Input.OTP
                                          size="large"
                                          length={4}
                                          style={{
                                                border: 'blue',
                                          }}
                                    />
                              </Form.Item>
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
                                    Send Code
                              </Button>
                        </Form.Item>
                  </Form>
                  <div className="text-center my-5">
                        <span className="text-primaryText">You have not received the email? </span>
                        <a onClick={handleResentOtp} className="text-secondary hover:text-secondary/90">
                              Resent
                        </a>
                  </div>
            </div>
      );
};

export default VerificationForm;
