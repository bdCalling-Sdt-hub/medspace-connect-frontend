import { TApiResponse } from '@/src/types';
import { baseApi, imageUrl } from '../api/baseApi';
export interface TPackages {
      _id: string;
      name: string;
      price: number;
      priceId: string;
      features: string[];
      allowedSpaces: number;
      stripeProductId: string;
      paymentLink: string;
      deadline?: string;

      subscriptionDate?: string;
}

const packagesApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getMyPackage: build.query({
                  query: () => {
                        return {
                              url: '/package/subscribed',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TPackages>) => {
                        return response.data;
                  },
                  providesTags: ['Packages'],
            }),
            getAllPackages: build.query({
                  query: () => {
                        return {
                              url: '/package/get-all',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TPackages[]>) => {
                        return response.data;
                  },
                  providesTags: ['Packages'],
            }),
            createPackages: build.mutation({
                  query: (data) => {
                        return {
                              url: '/package/get-all',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
            getSinglePackage: build.mutation({
                  query: (args) => {
                        return {
                              url: `/package/get/${args.id}`,
                              method: 'GET',
                        };
                  },
            }),
            updatePackages: build.mutation({
                  query: (args) => {
                        return {
                              url: `/package/update/${args.id}`,
                              method: 'PATCH',
                              body: args.data,
                        };
                  },
            }),
            deletePackages: build.mutation({
                  query: (id) => {
                        return {
                              url: `/package/delete/${id}`,
                              method: 'DELETE',
                        };
                  },
            }),
            cancelPackages: build.mutation({
                  query: () => {
                        return {
                              url: `${imageUrl}/api/stripe/subscription/cancel`,
                              method: 'POST',
                        };
                  },
                  invalidatesTags: ['Packages'],
            }),
      }),
});

export const {
      useCreatePackagesMutation,
      useGetAllPackagesQuery,
      useGetSinglePackageMutation,
      useUpdatePackagesMutation,
      useDeletePackagesMutation,
      useGetMyPackageQuery,
      useCancelPackagesMutation,
} = packagesApi;
