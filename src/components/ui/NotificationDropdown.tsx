'use client';
import { TNotification } from '@/src/redux/features/notification/notificationApi';
import { AiOutlineFrown } from 'react-icons/ai';

const NotificationDropdown = ({ notifications }: { notifications: TNotification[] }) => {
      return (
            <div>
                  <div className="w-[400px] max-h-[400px] mx-auto rounded-lg bg-white shadow-sm overflow-y-scroll p-5">
                        <h2 className="text-primary text-xl font-semibold mb-4">Notification</h2>

                        <div className="my-5">
                              {/* Notification List */}
                              {notifications?.length > 0 ? (
                                    notifications?.map((notification, index) => (
                                          <div key={index} className="flex items-center w-full space-y-2 mb-2">
                                                <div className="flex flex-col w-full p-3 rounded-md shadow-md">
                                                      <h1 className="text-primaryText font-semibold">
                                                            {notification.title || 'Notification topic'}
                                                      </h1>
                                                      <p className="text-primaryText">
                                                            {notification.message ||
                                                                  'Short summary for you, click and go to that page'}
                                                      </p>
                                                      <p className="text-primaryText">
                                                            {new Date(notification.createdAt).toLocaleString() ||
                                                                  '20-Dec-2024, 3:00 PM'}
                                                      </p>
                                                </div>
                                          </div>
                                    ))
                              ) : (
                                    <div className="grid place-items-center justify-center text-center items-center">
                                          <AiOutlineFrown className="text-4xl text-gray-500 mb-4" />
                                          <h2 className="text-lg font-semibold text-gray-600">
                                                No Notifications available
                                          </h2>
                                          <p className="text-gray-500 mt-2">Please check back later</p>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default NotificationDropdown;
