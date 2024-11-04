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
import { useGetUserProfileQuery } from '@/src/redux/features/user/userApi';

const ProfileTab = () => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: myProfile, isFetching } = useGetUserProfileQuery([]);
      if (isFetching) {
            return <div>Loading...</div>;
      }

      console.log(myProfile);

      // Define tabs for each role
      const itemsForProvider: TabsProps['items'] = [
            { key: '1', label: 'Profile', children: <Profile myProfile={myProfile!} /> },
            { key: '2', label: 'My Post', children: <MyPost myProfile={myProfile!} /> },
            { key: '3', label: 'Package History', children: <MyPackage myProfile={myProfile!} /> },
            { key: '4', label: 'Change Password', children: <ChangePassword /> },
            { key: '5', disabled: true, label: <PostSpace myProfile={myProfile!} /> },
      ];

      const itemsForSeeker: TabsProps['items'] = [
            { key: '1', label: 'Profile Details', children: <DoctorProfile myProfile={myProfile!} /> },
            { key: '2', label: 'My Interests', children: <MyInterest myProfile={myProfile!} /> },
            { key: '3', label: 'My Favorites', children: <MyFavorite myProfile={myProfile!} /> },
            { key: '4', label: 'Change Password', children: <ChangePassword /> },
      ];

      // Determine tab items based on role using switch
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
