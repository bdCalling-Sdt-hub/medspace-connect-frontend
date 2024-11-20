import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TAbout {
      _id: string;
      image: string;
      title: string;
      description: string;
      type: string;
      need: string;
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

            getPracticeNeed: build.query({
                  query: () => {
                        return {
                              url: '/practiceneed',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TAbout[]>) => {
                        return response.data;
                  },
            }),

            getPracticeType: build.query({
                  query: () => {
                        return {
                              url: '/practicetype',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TAbout[]>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetAboutQuery, useGetPracticeNeedQuery, useGetPracticeTypeQuery } = aboutApi;
