import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TSocial {
      icon: string;
      url: string;
}

const socialApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getSocial: build.query({
                  query: () => {
                        return {
                              url: '/link',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TSocial[]>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetSocialQuery } = socialApi;
