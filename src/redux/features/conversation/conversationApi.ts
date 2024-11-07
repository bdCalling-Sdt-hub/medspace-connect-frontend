import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TConversation {
      profile: string;
      name: string;
      occupation: string;
      conversationStarted: string;
      conversationId: string;
}

const conversationApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getMyConversation: build.query({
                  query: () => {
                        return {
                              url: '/conversation',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TConversation[]>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetMyConversationQuery } = conversationApi;
