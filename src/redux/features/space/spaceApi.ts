import { TApiResponse, TQueryParams } from '@/src/types';
import { baseApi } from '../api/baseApi';
import { TUser } from '../user/userApi';
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

      providerId?: {
            profile: string;
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
      }),
});

export const {
      useCreateSpaceMutation,
      useGetMySpaceQuery,
      useUpdateSpaceMutation,
      useGetAllSpaceQuery,
      useGetRecentSpaceQuery,
} = spaceApi;
