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
import { useAppSelector } from '@/src/redux/hooks';

const ProfileTab = () => {
    const { user } = useAppSelector((state) => state.auth);
    console.log(user);
    const itemsForProvider: TabsProps['items'] = [
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

    const itemsForSeeker: TabsProps['items'] = [
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
    const tabItems = user === 'space-seeker' ? itemsForSeeker : itemsForProvider;
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
                <Tabs defaultActiveKey="1" items={tabItems} />
            </ConfigProvider>
        </div>
    );
};

export default ProfileTab;
