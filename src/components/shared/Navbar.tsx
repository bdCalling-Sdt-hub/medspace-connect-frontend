'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/assets/logo.png';
import Profile from '/public/assets/profile.png';
import { Badge, Button, Drawer, Dropdown } from 'antd';
import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import { DownOutlined } from '@ant-design/icons';

import { useState } from 'react';
import ProfileDropdown from '../ui/ProfileDropdown';
const Navbar = () => {
    const [open, setOpen] = useState(false);

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
        </header>
    );
};

export default Navbar;
