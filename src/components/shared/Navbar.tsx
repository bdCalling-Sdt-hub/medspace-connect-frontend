'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/assets/logo.png';
import Profile from '/public/assets/profile.png';
import { Badge, Button, Dropdown } from 'antd';
import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ProfileDropdown from '../ui/ProfileDropdown';
import Modal from '../ui/Modal';
import NavItems from './NavItems';
import MobileDrawer from './MobileDrawer';
import LoginForm from '../form/LoginForm';
import ForgetForm from '../form/ForgetForm';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const [registerModal, setRegisterModal] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const items = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'News', path: '/news' },
        { label: 'Supports', path: '/supports' },
        { label: 'Packages', path: '/packages' },
    ];

    const handleLogin = (values: any) => {
        // TODO: Implement login logic
        console.log('Login form submitted', values);
    };

    return (
        <header className="h-24 bg-[#F7F7F7]">
            <nav className="w-full h-full container px-3 md:mx-auto">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link href={'/'}>
                        <Image alt="Logo" src={Logo} width={180} height={40} />
                    </Link>

                    {/* Nav Items for Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavItems items={items} />
                    </div>

                    {/* Action Items for Desktop */}
                    <div className="hidden md:flex items-center gap-10">
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
                        <Badge color="#FBA51A" count={5}>
                            <AiOutlineBell size={24} color="#767676" />
                        </Badge>
                        <Dropdown placement="bottomRight" dropdownRender={ProfileDropdown} trigger={['click']}>
                            <div
                                style={{
                                    height: 44,
                                    width: 90,
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '50px',
                                    padding: '4px 10px',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Image width={40} height={40} alt="profile" src={Profile} />
                                <DownOutlined
                                    style={{
                                        fontSize: '16px',
                                        color: '#1890ff',
                                        paddingLeft: '8px',
                                        paddingRight: '8px',
                                    }}
                                />
                            </div>
                        </Dropdown>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <AiOutlineMenu onClick={showDrawer} className="text-primaryText cursor-pointer" size={24} />
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <MobileDrawer open={open} onClose={onClose} items={items} />

            {/* Modals */}
            <Modal
                body={<LoginForm setLoginModal={setLoginModal} onFinish={handleLogin} />}
                open={loginModal}
                setOpen={setLoginModal}
                key="login"
                width={600}
            />
        </header>
    );
};

export default Navbar;
