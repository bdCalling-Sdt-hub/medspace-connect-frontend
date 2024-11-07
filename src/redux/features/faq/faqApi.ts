import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TFaq {
      answer: string;
      question: string;
}

const faqApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllFaq: build.query({
                  query: () => {
                        return {
                              url: '/faq',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TFaq[]>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetAllFaqQuery } = faqApi;
