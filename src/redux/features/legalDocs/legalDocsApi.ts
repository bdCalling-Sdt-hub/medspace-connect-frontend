import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

export interface TLegalDoc {
      name: string;
      content: string;
}

const legalDocsApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getUserAgreement: build.query({
                  query: () => {
                        return {
                              url: '/info?name=USERAGRREEMENT ',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TLegalDoc>) => {
                        return response.data;
                  },
            }),
            getTermsCondition: build.query({
                  query: () => {
                        return {
                              url: '/info?name=TERMSANDCONDITIONS',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TLegalDoc>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetUserAgreementQuery, useGetTermsConditionQuery } = legalDocsApi;
