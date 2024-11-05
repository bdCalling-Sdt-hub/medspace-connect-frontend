import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';
import { TUser } from '../user/userApi';
export type TSpace = {
      spaceImages: string[];

      title: string;
      price: number;
      priceType: string;
      status?: string;
      location: string;
      openingDate: string;
      practiceFor: string;
      facilities: string[];
      description: string;

      providerId?: {
            profile: string;
      };
};

const spaceApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllSpace: build.query({
                  query: () => {
                        return {
                              url: '/space',
                              method: 'GET',
                        };
                  },
                  providesTags: ['spaces'],
                  transformResponse: (response: TApiResponse<TSpace>) => {
                        return response.data;
                  },
            }),
            getMySpace: build.query({
                  query: () => {
                        return {
                              url: '/space/my-spaces',
                              method: 'GET',
                        };
                  },
                  providesTags: ['spaces'],
                  transformResponse: (response: TApiResponse<TSpace[]>) => {
                        return response.data;
                  },
            }),

            createSpace: build.mutation({
                  query: (data) => {
                        return {
                              url: '/space/create-space',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['spaces'],
            }),
            getSingleSpace: build.mutation({
                  query: (args) => {
                        return {
                              url: `/space/${args.id}`,
                              method: 'GET',
                        };
                  },
            }),
            updateSpace: build.mutation({
                  query: (args) => {
                        return {
                              url: `/space/${args.id}`,
                              method: 'PATCH',
                              body: args.data,
                        };
                  },
                  invalidatesTags: ['spaces'],
            }),
            updateSpaceImage: build.mutation({
                  query: (args) => {
                        return {
                              url: `/space/${args.id}`,
                              method: 'PATCH',
                              body: args.data,
                        };
                  },
            }),
            // deletePackages: build.mutation({
            //       query: (id) => {
            //             return {
            //                   url: `/package/delete/${id}`,
            //                   method: 'DELETE',
            //             };
            //       },
            // }),
      }),
});

export const { useCreateSpaceMutation, useGetMySpaceQuery, useUpdateSpaceMutation } = spaceApi;
