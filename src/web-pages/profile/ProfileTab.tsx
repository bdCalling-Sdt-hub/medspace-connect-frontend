'use client';
import { Button, ConfigProvider, notification, Tabs, TabsProps } from 'antd';
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
import { useRouter } from 'next/navigation';

const ProfileTab = () => {
      const router = useRouter();
      const { user } = useAppSelector((state) => state.auth);
      const { data: myProfile, isFetching } = useGetUserProfileQuery([]);

      const [modal, setModal] = useState(false);
      const [activeKey, setActiveKey] = useState('1');

      if (isFetching) {
            return <div>Loading...</div>;
      }

      const handleNewPost = () => {
            if (myProfile?.user?.isSubscribed === false) {
                  notification.success({
                        message: 'Please subscribe a package to post a space',
                  });

                  router.push('/packages');
                  return;
            }
            setModal(true);
      };

      const ButtonModal = (
            <div className="flex items-center gap-2">
                  <h1 className="text-secondary text-nowrap text-lg">
                        Remaining Post : {myProfile?.spacesPosted}/{myProfile?.allowedSpaces}
                  </h1>
                  <Button
                        onClick={handleNewPost}
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

      const itemsForProvider: TabsProps['items'] = [
            { key: '1', label: 'Profile', children: <Profile myProfile={myProfile!} /> },
            { key: '2', label: 'My Post', children: <MyPost /> },
            { key: '3', label: 'Package History', children: <MyPackage /> },
            { key: '4', label: 'Change Password', children: <ChangePassword /> },
            {
                  key: '5',
                  label: <div>{ButtonModal}</div>,
                  children: null,
            },
      ];

      const itemsForSeeker: TabsProps['items'] = [
            { key: '1', label: 'Profile Details', children: <DoctorProfile myProfile={myProfile!} /> },
            { key: '2', label: 'My Interests', children: <MyInterest /> },
            { key: '3', label: 'My Favorites', children: <MyFavorite /> },
            { key: '4', label: 'Change Password', children: <ChangePassword /> },
      ];

      const getTabItems = () => {
            switch (user?.role) {
                  case 'SPACESEEKER':
                        return itemsForSeeker;
                  case 'SPACEPROVIDER':
                  default:
                        return itemsForProvider;
            }
      };

      const tabItems = getTabItems();

      const handleTabChange = (key: string) => {
            if (key === '5') {
                  setModal(true);
            } else {
                  setActiveKey(key);
            }
      };

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
                        <Tabs activeKey={activeKey} onChange={handleTabChange} items={tabItems} />
                  </ConfigProvider>

                  {/* Render PostSpace component in a modal */}
                  {modal && <PostSpace modal={modal} setModal={setModal} />}
            </div>
      );
};

export default ProfileTab;
