import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TAbout {
      _id: string;
      image: string;
      title: string;
      description: string;
}

const aboutApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAbout: build.query({
                  query: () => {
                        return {
                              url: '/about',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TAbout[]>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetAboutQuery } = aboutApi;
