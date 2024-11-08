import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

interface MediaFile {
      url?: string;
      fileType?: string;
}

export interface TMessage {
      _id: string;
      from: string;
      to: string;
      spaceID: string;
      conversationID: string;
      message: string;
      data: {
            mediaFiles: MediaFile[];
      };
      status: 'read' | 'unread' | 'deleted';
      date: string;
      createdAt: string;
}

const messageApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            sentMessage: build.mutation({
                  query: (args) => {
                        return {
                              url: `conversation/${args.id}/message`,
                              method: 'POST',
                              body: args.data,
                        };
                  },
            }),
            readMessagesByUserId: build.mutation({
                  query: (id) => {
                        return {
                              url: `conversation/${id}/read`,
                              method: 'PATCH',
                        };
                  },
                  //   transformResponse: (response: TApiResponse<any[]>) => {
                  //         return response.data;
                  //   },
            }),
            getMessagesByUserId: build.query({
                  query: (id) => {
                        return {
                              url: `conversation/${id}/search`,
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TMessage[]>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useReadMessagesByUserIdMutation, useGetMessagesByUserIdQuery, useSentMessageMutation } = messageApi;
export default messageApi;
