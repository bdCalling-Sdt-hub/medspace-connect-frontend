import { TApiResponse, TQueryParams } from '@/src/types';
import { baseApi } from '../api/baseApi';
export type TSpace = {
      spaceImages: string[];

      _id: string;
      title: string;
      price: number;
      priceType: string;
      status?: string;
      location: string;
      openingDate: string;
      practiceFor: string;
      facilities: string[];
      description: string;
      activeSince?: string;
      interestedSince?: string;
      providerId?: {
            profile: string;
            name: string;
      };
};

const spaceApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getAllSpace: build.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((item: TQueryParams) => {
                                    params.append(item.name, item.value as string);
                              });
                        }

                        return {
                              url: '/space',
                              method: 'GET',
                              params,
                        };
                  },
                  providesTags: ['spaces'],
                  transformResponse: (response: TApiResponse<TSpace[]>) => {
                        return { data: response.data, meta: response.pagination };
                  },
            }),
            getRecentSpace: build.query({
                  query: () => {
                        return {
                              url: '/space/recent',
                              method: 'GET',
                        };
                  },
                  providesTags: ['spaces'],
                  transformResponse: (response: TApiResponse<TSpace[]>) => {
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
            getMyInterestedSpace: build.query({
                  query: () => {
                        return {
                              url: '/space/interested-spaces',
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
            createInterested: build.mutation({
                  query: (data) => {
                        return {
                              url: '/conversation/start',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['spaces'],
            }),
            getSingleSpace: build.query({
                  query: (id) => {
                        return {
                              url: `/space/${id}`,
                              method: 'GET',
                        };
                  },

                  transformResponse: (response: TApiResponse<TSpace>) => {
                        return response.data;
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
      }),
});

export const {
      useCreateSpaceMutation,
      useGetMySpaceQuery,
      useUpdateSpaceMutation,
      useGetAllSpaceQuery,
      useGetRecentSpaceQuery,
      useGetSingleSpaceQuery,
      useCreateInterestedMutation,
      useGetMyInterestedSpaceQuery,
} = spaceApi;
