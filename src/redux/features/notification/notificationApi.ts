import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TNotification {
      _id: string;
      title: string;
      message: string;
      receiverId: string;
      createdAt: string;
      data: Object;
}

export const notificationApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getNotification: build.query({
                  query: () => {
                        return {
                              url: '/notification',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: any) => {
                        const { notifications, unreadCount } = response.data;
                        return { notifications, unreadCount };
                  },
            }),
            readNotification: build.mutation({
                  query: () => {
                        return {
                              url: '/notification/read',
                              method: 'PATCH',
                        };
                  },
            }),
      }),
});

export const { useGetNotificationQuery, useReadNotificationMutation } = notificationApi;
