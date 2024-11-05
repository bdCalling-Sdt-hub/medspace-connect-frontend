'use client';
import { Button, ConfigProvider, Tabs, TabsProps } from 'antd';
import { FaPlus } from 'react-icons/fa6';
import { useState } from 'react';
import { useAppSelector } from '@/src/redux/hooks';
import { useGetUserProfileQuery } from '@/src/redux/features/user/userApi';

// Importing components based on roles
import Profile from './merchant/Profile';
import MyPost from './merchant/MyPost';
import MyPackage from './merchant/MyPackage';
import ChangePassword from './shared/ChangePassword';
import DoctorProfile from './doctor/DoctorProfile';
import MyInterest from './doctor/MyInterest';
import MyFavorite from './doctor/MyFavorite';
import PostSpace from './merchant/PostSpace';

const ProfileTab = () => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: myProfile, isFetching } = useGetUserProfileQuery([]);
      const [modal, setModal] = useState(false);

      // Loading state for profile data
      if (isFetching) {
            return <div>Loading...</div>;
      }

      const ButtonModal = (
            <div onClick={() => setModal(true)} className="flex items-center gap-2">
                  <h1 className="text-secondary text-nowrap text-lg">
                        Remaining Post : {myProfile?.spacesPosted}/{myProfile?.allowedSpaces}
                  </h1>
                  <Button
                        icon={<FaPlus size={18} />}
                        shape="round"
                        className="px-6"
                        style={{
                              height: '50px',
                              width: '141px',
                              backgroundColor: '#0A8FDC',
                              fontWeight: '500',
                              border: 'none',
                              color: '#fff',
                        }}
                  >
                        New Post
                  </Button>
            </div>
      );

      // Tab items for the provider role
      const itemsForProvider: TabsProps['items'] = [
            { key: '1', label: 'Profile', children: <Profile myProfile={myProfile!} /> },
            { key: '2', label: 'My Post', children: <MyPost /> },
            { key: '3', label: 'Package History', children: <MyPackage myProfile={myProfile!} /> },
            { key: '4', label: 'Change Password', children: <ChangePassword /> },
            {
                  key: '5',
                  label: <div>{ButtonModal}</div>,
                  children: <PostSpace modal={modal} setModal={setModal} />,
            },
      ];

      const itemsForSeeker: TabsProps['items'] = [
            { key: '1', label: 'Profile Details', children: <DoctorProfile myProfile={myProfile!} /> },
            { key: '2', label: 'My Interests', children: <MyInterest myProfile={myProfile!} /> },
            { key: '3', label: 'My Favorites', children: <MyFavorite /> },
            { key: '4', label: 'Change Password', children: <ChangePassword /> },
      ];

      // Function to determine tabs based on user role
      const getTabItems = () => {
            switch (user?.role) {
                  case 'SPACESEEKER':
                        return itemsForSeeker;
                  case 'SPACEPROVIDER':
                  default:
                        return itemsForProvider;
            }
      };

      // Getting the appropriate tabs for the current user role
      const tabItems = getTabItems();

      return (
            <div className="container relative mx-auto">
                  <ConfigProvider
                        theme={{
                              components: {
                                    Tabs: {
                                          itemColor: '#6B6B6B',
                                          fontFamily: 'inherit',
                                          colorBorder: 'red',
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
