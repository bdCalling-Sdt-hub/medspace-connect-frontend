'use client';
import { Form, Input, Button, Checkbox, notification, FormProps } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import Modal from '../ui/Modal';
import ForgetForm from './ForgetForm';
import VerificationForm from './VerificationForm';
import NewPasswordForm from './NewPasswordFrom';
import { useAppDispatch } from '@/src/redux/hooks';
import { useRouter } from 'next/navigation';
import {
      useForgetPasswordMutation,
      useLoginUserMutation,
      useResetPasswordMutation,
      useVerifyEmailMutation,
} from '@/src/redux/features/auth/authApi';
import { decodedUser } from '@/src/utils/decodeUser';
import { setUser } from '@/src/redux/features/auth/authSlice';
import { setAccessToken } from '@/src/utils/accessToken';
type TLoginFormProps = {
      onFinish: (values: any) => void;
      setForgetModal?: Dispatch<SetStateAction<boolean>>;
      setLoginModal: Dispatch<SetStateAction<boolean>>;
      setRegisterModal: Dispatch<SetStateAction<boolean>>;
};
const LoginForm = ({ onFinish, setLoginModal, setRegisterModal }: TLoginFormProps) => {
      // *<<<==========✅✅============>>>
      // ?           RTK Hooks
      const dispatch = useAppDispatch();
      const [forgetPassword] = useForgetPasswordMutation();
      const [verifyEmail] = useVerifyEmailMutation();
      const [resetPassword] = useResetPasswordMutation();
      const [loginUser] = useLoginUserMutation();
      // *<<<==========✅✅============>>>

      const [forgetModal, setForgetModal] = useState(false);
      const [otpModal, setOtpModal] = useState(false);
      const [newPasswordModal, setNewPasswordModal] = useState(false);
      const router = useRouter();

      const handleForget = async (values: any) => {
            try {
                  const res = await forgetPassword(values).unwrap();

                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                        localStorage.setItem('email', values.email);
                        setForgetModal(false);
                        setOtpModal(true);
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to sent forgot otp',
                  });
            }
      };

      const handleLogin: FormProps<Record<string, string>>['onFinish'] = async (values) => {
            try {
                  const res = await loginUser(values).unwrap();

                  if (res.success) {
                        const user = decodedUser(res.data);
                        const decodedData = {
                              user,
                              token: res.data,
                        };
                        dispatch(setUser(decodedData));
                        setAccessToken(res.data);
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                        setLoginModal(false);
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to login',
                  });
            }
      };
      const handleVerifyOtp = async (values: any) => {
            const verifyData = {
                  email: localStorage.getItem('email'),
                  oneTimeCode: Number(values.oneTimeCode),
            };
            try {
                  const res = await verifyEmail(verifyData).unwrap();

                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                        localStorage.setItem('oneTimeToken', res.data);
                        localStorage.removeItem('email');
                        //? after success set new password modal true
                        setOtpModal(false);
                        setNewPasswordModal(true);
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to verify otp',
                  });
            }
      };
      const handleSetNewPassword = async (values: FormData) => {
            try {
                  const res = await resetPassword(values).unwrap();

                  if (res.success) {
                        notification.success({
                              message: res.message,
                              placement: 'topRight',
                              duration: 5,
                        });
                        localStorage.removeItem('email');
                        setNewPasswordModal(false);
                        notification.success({
                              message: 'Please login again with your new password',
                              placement: 'topRight',
                              duration: 5,
                        });
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to sent set new password',
                  });
            }
      };

      const handleModal = () => {
            setLoginModal(false);
            setRegisterModal(true);
      };
      return (
            <>
                  <div className="md:p-8">
                        <div className="space-y-5 mb-5">
                              <h2 className="text-3xl text-[#333333] font-semibold text-center">
                                    Log in to your account
                              </h2>
                              <p className="text-center text-gray-500 mb-6">
                                    Please enter your email and password to continue
                              </p>
                        </div>

                        <Form layout="vertical" name="login" initialValues={{ remember: true }} onFinish={onFinish}>
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
                                          <Checkbox>Stay Logged In</Checkbox>
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
                              <a onClick={handleModal} className="text-blue-500">
                                    Sign Up
                              </a>
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
                  <Modal
                        body={<NewPasswordForm onFinish={handleSetNewPassword} />}
                        open={newPasswordModal}
                        setOpen={setNewPasswordModal}
                        key="newPassword"
                        width={600}
                  />
            </>
      );
};

export default LoginForm;
