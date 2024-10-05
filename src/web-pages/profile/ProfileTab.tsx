'use client';
import { ConfigProvider, Tabs, TabsProps } from 'antd';
import Profile from './merchant/Profile';
import MyPost from './merchant/MyPost';
import MyPackage from './merchant/MyPackage';
import ChangePassword from './shared/ChangePassword';
import DoctorProfile from './doctor/DoctorProfile';
import MyInterest from './doctor/MyInterest';
import MyFavorite from './doctor/MyFavorite';
import PostSpace from './merchant/PostSpace';
import { useEffect, useState } from 'react';

const ProfileTab = () => {
    const [role, setRole] = useState<string | null>('provider');

    const itemsForMerchant: TabsProps['items'] = [
        {
            key: '1',
            label: 'Profile',
            children: <Profile />,
        },
        {
            key: '2',
            label: 'My Post',
            children: <MyPost />,
        },
        {
            key: '3',
            label: 'Package History',
            children: <MyPackage />,
        },
        {
            key: '4',
            label: 'Change Password',
            children: <ChangePassword />,
        },
        {
            key: '5',
            disabled: true,
            label: <PostSpace />,
        },
    ];

    const itemsForDoctor: TabsProps['items'] = [
        {
            key: '1',
            label: 'Profile Details',
            children: <DoctorProfile />,
        },
        {
            key: '2',
            label: 'My Interests',
            children: <MyInterest />,
        },
        {
            key: '3',
            label: 'My Favorites',
            children: <MyFavorite />,
        },
        {
            key: '4',
            label: 'Change Password',
            children: <ChangePassword />,
        },
    ];

    const getTabItems = () => {
        if (role === 'provider') {
            return itemsForMerchant;
        } else if (role === 'doctor') {
            return itemsForDoctor;
        } else {
            return []; // Return an empty array or handle undefined role
        }
    };

    return (
        <div className="container mx-auto">
            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            itemColor: '#6B6B6B',
                            fontFamily: 'inherit',
                        },
                    },
                }}
            >
                {role && <Tabs defaultActiveKey="1" items={getTabItems()} />}
            </ConfigProvider>
        </div>
    );
};

export default ProfileTab;
