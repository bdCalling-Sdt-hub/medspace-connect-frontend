import { Drawer, Button, Dropdown, Badge, notification } from 'antd';
import NavItems from './NavItems';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { useGetUserProfileQuery } from '@/src/redux/features/user/userApi';
import ProfileDropdown from '../ui/ProfileDropdown';
import NotificationDropdown from '../ui/NotificationDropdown';
import { AiOutlineBell } from 'react-icons/ai';
import Image from 'next/image';
import { imageUrl } from '@/src/redux/features/api/baseApi';
import { useEffect } from 'react';
import { connectSocket } from '@/src/utils/socket';
import { addNotification } from '@/src/redux/features/notification/notificationSlice';
import {
      useGetNotificationQuery,
      useReadNotificationMutation,
} from '@/src/redux/features/notification/notificationApi';
import { useRouter } from 'next/navigation';

const MobileDrawer = ({
      open,
      onClose,
      items,
      setLoginModal,
      setRegisterModal,
}: {
      open: boolean;
      onClose: () => void;
      items: any[];
      setLoginModal: any;
      setRegisterModal: any;
}) => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: myProfile } = useGetUserProfileQuery(undefined, {
            skip: !user,
      });
      const [readNotification] = useReadNotificationMutation();
      const { data: notifications, refetch } = useGetNotificationQuery([]);
      const notificationData = useAppSelector((state) => state.notification);
      const dispatch = useAppDispatch();
      useEffect(() => {
            const socket = connectSocket('http://192.168.10.15:3000');

            socket.on(`new_notification::${user?.id.toString()}`, (newData) => {
                  dispatch(addNotification(newData));
            });

            return () => {
                  if (socket) socket.disconnect();
            };
      }, [user, dispatch]);

      const router = useRouter();

      const handleReadNotification = async () => {
            try {
                  await readNotification(undefined).unwrap();
                  refetch();
                  router.refresh();
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to get notification',
                  });
            }
      };

      return (
            <Drawer placement="left" onClose={onClose} open={open}>
                  <div className="flex flex-col items-center gap-8">
                        <NavItems items={items} onClose={onClose} />
                  </div>
                  <div className="flex md:hidden justify-center my-5 items-center gap-5">
                        {user ? (
                              <>
                                    <div onClick={() => handleReadNotification()}>
                                          <Dropdown
                                                className="cursor-pointer"
                                                placement="bottom"
                                                dropdownRender={() => (
                                                      <NotificationDropdown
                                                            notifications={notificationData.notifications}
                                                      />
                                                )}
                                                trigger={['click']}
                                          >
                                                <div>
                                                      <Badge color="#FBA51A" count={notificationData?.unreadCount}>
                                                            <AiOutlineBell size={24} color="#767676" />
                                                      </Badge>
                                                </div>
                                          </Dropdown>
                                    </div>
                                    <Dropdown
                                          placement="bottom"
                                          dropdownRender={() => <ProfileDropdown myProfile={myProfile} />}
                                          trigger={['click']}
                                    >
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
                                                <Image
                                                      width={40}
                                                      height={40}
                                                      alt="profile"
                                                      className="size-[40px] rounded-full"
                                                      src={`${imageUrl}/${myProfile?.user?.profile}`}
                                                />
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
            </Drawer>
      );
};

export default MobileDrawer;
