'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/assets/logo.png';
import Profile from '/public/assets/profile.png';
import { Badge, Button, Checkbox, Drawer, Dropdown, Form, Input } from 'antd';
import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import { DownOutlined } from '@ant-design/icons';

import { useState } from 'react';
import ProfileDropdown from '../ui/ProfileDropdown';
import Modal from '../ui/Modal';
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
    const pathname = usePathname();
    const items = [
        {
            label: 'Home',
            path: '/',
        },

        {
            label: 'About',
            path: '/about',
        },
        {
            label: 'News',
            path: '/news',
        },
        {
            label: 'Supports',
            path: '/supports',
        },
        {
            label: 'Packages',
            path: '/packages',
        },
    ];

    const handleLogin = (values: any) => {
        // TODO: Implement login logic
        console.log('Login form submitted', values);
    };
    const loginForm = (
        <div className="p-8">
            <div className="space-y-5">
                <h2 className="text-3xl text-[#333333] font-semibold text-center">Log in to your account</h2>
                <p className="text-center text-gray-500 mb-6">Please enter your email and password to continue</p>
            </div>

            <Form
                layout="vertical"
                name="login"
                initialValues={{ remember: true }}
                onFinish={handleLogin}
                className="space-y-4"
            >
                <Form.Item
                    label={<span className="custom-label">Email</span>}
                    name="email"
                    rules={[{ required: true, message: 'Please enter your eamil!' }]}
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

                    <a className="text-secondary hover:text-secondary">Forgot Password?</a>
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
    );

    return (
        <header className=" h-24 bg-[#F7F7F7]">
            <nav className="w-full h-full container px-3 md:mx-auto">
                <div className="flex justify-between items-center h-full">
                    {/* logo section */}
                    <div className="logo">
                        <Link href={'/'}>
                            <Image className="" alt="Logo" src={Logo} width={180} height={40} />
                        </Link>
                    </div>
                    {/* items section */}

                    <div className="hidden md:flex items-center gap-8">
                        {items.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    className={`text-primaryText leading-4
                    
                    
                    ${pathname === item.path ? 'text-secondary' : ''}
                    
                    `}
                                    href={item.path}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        <div>
                            <Button
                                onClick={() => setLoginModal(true)}
                                color="default"
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
                                    padding: '10px',
                                    color: '#0A8FDC',
                                    borderRadius: '60px',
                                }}
                                color="primary"
                            >
                                Create Account
                            </Button>
                        </div>
                        <div>
                            <Badge color="#FBA51A" count={5}>
                                <AiOutlineBell size={24} color="#767676" />
                            </Badge>
                        </div>
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
                                {/* Avatar */}
                                <Image width={40} height={40} alt="profile" src={Profile} />

                                {/* Down Arrow */}
                                <DownOutlined
                                    style={{
                                        fontSize: '16px',
                                        color: '#1890ff',
                                        fontWeight: 'bold',
                                        // padding: "10px",
                                        paddingLeft: '8px',
                                        paddingRight: '8px',
                                    }}
                                />
                            </div>
                        </Dropdown>
                    </div>
                    <div className="md:hidden ">
                        {/* mobile drawer open icon */}
                        <AiOutlineMenu onClick={showDrawer} className="text-primaryText cursor-pointer " size={24} />
                    </div>
                </div>
            </nav>
            {/* mobile drawer */}
            <Drawer placement="left" onClose={onClose} open={open}>
                <div className="flex flex-col items-center gap-8">
                    {items.map((item, index) => {
                        return (
                            <Link
                                onClick={onClose}
                                key={index}
                                className={`text-primaryText leading-4
                    
                    
                    ${pathname === item.path ? 'text-secondary' : ''}
                    
                    `}
                                href={item.path}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
                <div className=" flex justify-center items-center gap-10 my-5">
                    <div>
                        <Button
                            style={{
                                lineHeight: '24px',
                                height: '48px',
                                width: '174px',
                                backgroundColor: '#F7F7F7',
                                padding: '10px',
                                color: '#0A8FDC',
                                borderRadius: '60px',
                                border: '1px solid #0A8FDC',
                            }}
                            color="primary"
                        >
                            Create Account
                        </Button>
                    </div>
                </div>
            </Drawer>

            {/* modals */}
            <Modal body={loginForm} open={loginModal} setOpen={setLoginModal} key={'login'} width={600} />
        </header>
    );
};

export default Navbar;
