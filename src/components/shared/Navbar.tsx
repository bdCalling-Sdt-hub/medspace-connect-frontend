'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/assets/logo.svg';
import LogoOwn from '/public/assets/logo-own.svg';
import Profile from '/public/assets/profile.png';
import { Badge, Button, Dropdown, FormProps } from 'antd';
import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import ProfileDropdown from '../ui/ProfileDropdown';
import Modal from '../ui/Modal';
import NavItems from './NavItems';
import MobileDrawer from './MobileDrawer';
import LoginForm from '../form/LoginForm';
import RegisterForm from '../form/RegisterForm';
import VerificationForm from '../form/VerificationForm';
import NotificationDropdown from '../ui/NotificationDropdown';
import { useAppSelector } from '@/src/redux/hooks';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [otpModal, setOtpModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const { user } = useAppSelector((state) => state.auth);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const commonItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        // { label: 'News', path: '/news' },
        { label: 'Supports', path: '/supports' },
    ];
    const items = user === 'space-provider' ? [...commonItems, { label: 'Packages', path: '/packages' }] : commonItems;

    const handleLogin: FormProps<Record<string, string>>['onFinish'] = (values) => {
        // TODO: Implement login logic
        console.log('Login form submitted', values);
        setLoginModal(false);
    };
    const handleRegister: FormProps<Record<string, string>>['onFinish'] = (values) => {
        // TODO: Implement login logic
        console.log('Login form submitted', values);

        //? after registration is successful
        setRegisterModal(false);
        setOtpModal(true);
    };
    const verifyOtp: FormProps<Record<string, string>>['onFinish'] = (values) => {
        console.log('otv verify', values);
        setOtpModal(false);
    };

    return (
        <header className="h-24 bg-[#F7F7F7]">
            <nav className="w-full h-full container px-3 md:mx-auto">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link href={'/'}>
                        {/* <Image className="size-[80px]" alt="Logo" src={LogoOwn} width={180} height={40} /> */}
                        <Image className="w-full" alt="Logo" src={Logo} width={180} height={50} />
                    </Link>

                    {/* Nav Items for Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavItems items={items} />
                    </div>

                    {/* Action Items for Desktop */}
                    <div className="hidden md:flex items-center gap-5">
                        {user ? (
                            <>
                                <Dropdown
                                    className="cursor-pointer"
                                    placement="bottomRight"
                                    dropdownRender={NotificationDropdown}
                                    trigger={['click']}
                                >
                                    <Badge color="#FBA51A" count={5}>
                                        <AiOutlineBell size={24} color="#767676" />
                                    </Badge>
                                </Dropdown>
                                <Dropdown placement="bottomRight" dropdownRender={ProfileDropdown} trigger={['click']}>
                                    <div
                                        style={{
                                            height: 44,
                                            width: 90,
                                            display: 'flex',
                                            alignItems: 'center',
                                            backgroundColor: '#f5f5f5',
                                            gap: 5,
                                            borderRadius: '50px',
                                            padding: '4px 10px',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <Image width={40} height={40} alt="profile" src={Profile} />
                                        <svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.34473 9.67603L12.3447 15.676L18.3447 9.67603"
                                                stroke="#0A8FDC"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </Dropdown>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={() => setLoginModal(true)}
                                    type="link"
                                    style={{
                                        lineHeight: '24px',
                                        fontWeight: 500,
                                        backgroundColor: 'transparent',
                                        color: '#0A8FDC',
                                    }}
                                >
                                    Login
                                </Button>
                                <Button
                                    onClick={() => setRegisterModal(true)}
                                    style={{
                                        border: '1px solid #0A8FDC',
                                        lineHeight: '24px',
                                        height: '48px',
                                        fontWeight: 500,
                                        width: '174px',
                                        backgroundColor: '#F7F7F7',
                                        color: '#0A8FDC',
                                        borderRadius: '60px',
                                    }}
                                >
                                    Create Account
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <AiOutlineMenu onClick={showDrawer} className="text-primaryText cursor-pointer" size={24} />
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <MobileDrawer
                setRegisterModal={setRegisterModal}
                setLoginModal={setLoginModal}
                open={open}
                onClose={onClose}
                items={items}
            />

            {/* Modals */}
            <Modal
                body={
                    <LoginForm
                        setLoginModal={setLoginModal}
                        setRegisterModal={setRegisterModal}
                        onFinish={handleLogin}
                    />
                }
                open={loginModal}
                setOpen={setLoginModal}
                key="login"
                width={600}
            />
            <Modal
                body={
                    <RegisterForm
                        setLoginModal={setLoginModal}
                        setRegisterModal={setRegisterModal}
                        onFinish={handleRegister}
                    />
                }
                open={registerModal}
                setOpen={setRegisterModal}
                key="register"
                width={693}
            />
            <Modal
                body={<VerificationForm onFinish={verifyOtp} />}
                open={otpModal}
                setOpen={setOtpModal}
                key="register-otp"
                width={693}
            />
        </header>
    );
};

export default Navbar;
