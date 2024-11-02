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
      const [userType, setUserType] = useState('SPACESEEKER');

      const [form] = Form.useForm();
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
            <div className="md:p-4">
                  <div className="space-y-5 mb-5">
                        <h2 className="text-3xl text-[#333333] font-semibold text-center">Sign up</h2>
                        <p className="text-center text-gray-500 mb-6">Please Enter Your Personal Data</p>
                  </div>
                  {/* User Type Toggle */}
                  <div className="flex justify-center space-x-4 mb-6">
                        <Button
                              onClick={() => setUserType('SPACESEEKER')}
                              type="primary"
                              size="large"
                              className="rounded-full px-6"
                              style={{
                                    backgroundColor: userType === 'SPACESEEKER' ? '#0A8FDC' : '#F7F7F7',
                                    color: userType === 'SPACESEEKER' ? 'white' : '#999999',
                              }}
                        >
                              I am looking for a space
                        </Button>
                        <Button
                              onClick={() => setUserType('SPACEPROVIDER')}
                              type="primary"
                              size="large"
                              className="rounded-full px-6"
                              style={{
                                    backgroundColor: userType === 'SPACEPROVIDER' ? '#0A8FDC' : '#F7F7F7',
                                    color: userType === 'SPACEPROVIDER' ? 'white' : '#999999',
                              }}
                        >
                              I am listing a space
                        </Button>
                  </div>

                  {/* Signup Form */}
                  <Form
                        form={form}
                        layout="vertical"
                        name="signup"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                  >
                        {/* Hidden field for role */}
                        <Form.Item name="role" hidden>
                              <Input />
                        </Form.Item>

                        <Form.Item
                              label={<span className="custom-label">User Name</span>}
                              name="name"
                              rules={[{ required: true, message: 'Please enter your username!' }]}
                        >
                              <Input
                                    size="large"
                                    placeholder="User name"
                                    style={{ borderRadius: '24px', height: '48px' }}
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="custom-label">Email</span>}
                              name="email"
                              rules={[{ required: true, message: 'Please enter your email!' }]}
                        >
                              <Input
                                    size="large"
                                    placeholder="example@gmail.com"
                                    style={{ borderRadius: '24px', height: '48px' }}
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="custom-label">Contact No</span>}
                              name="contact"
                              rules={[{ required: false, message: 'Please enter your contact number!' }]}
                        >
                              <Input
                                    size="large"
                                    placeholder="+18053333333"
                                    style={{ borderRadius: '24px', height: '48px' }}
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="custom-label">Password</span>}
                              name="password"
                              rules={[
                                    { required: true, message: 'Please enter your password!' },
                                    { min: 8, message: 'Password must be at least 8 characters long!' },
                              ]}
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
                              dependencies={['password']}
                              rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                          validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                      return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The confirm passwords do not match!'));
                                          },
                                    }),
                              ]}
                        >
                              <Input.Password
                                    size="large"
                                    placeholder="Confirm your password"
                                    style={{ borderRadius: '24px', height: '48px' }}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                              />
                        </Form.Item>
                        <Form.Item
                              name="agreement"
                              valuePropName="checked"
                              rules={[
                                    {
                                          validator: (_, value) =>
                                                value
                                                      ? Promise.resolve()
                                                      : Promise.reject(
                                                              new Error(
                                                                    'Please accept the terms & condition and user agreement.'
                                                              )
                                                        ),
                                    },
                              ]}
                        >
                              <Checkbox>
                                    I agree to the{' '}
                                    <a href="terms-&-condition" className="text-primary">
                                          Terms & Condition
                                    </a>{' '}
                                    and{' '}
                                    <a href="/user-agreement" className="text-primary">
                                          user agreement
                                    </a>
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
