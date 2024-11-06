import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TSupport {
      title: string;
      description: string;
      _id: string;
      createdAt: string;
      type: string;
}

const supportApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getSupport: build.query({
                  query: () => {
                        return {
                              url: '/support-item',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TSupport[]>) => {
                        return response.data;
                  },
            }),

            createSupport: build.mutation({
                  query: (data) => {
                        return {
                              url: '/support-item',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useCreateSupportMutation, useGetSupportQuery } = supportApi;
