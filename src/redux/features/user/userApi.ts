import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';
export interface TUser {
      stripeAccountInfo?: StripeAccountInfo;
      user: {
            _id: string;
            name: string;
            role: string;
            email: string;
            contact: string;
            isSubscribed: boolean;
            profile: string;
            status: string;
            verified: boolean;

            subscription?: string;
      };
      allowedSpaces?: number;
      spacesPosted?: number;
}

export interface StripeAccountInfo {
      stripeCustomerId: string;
}

const authApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getUserProfile: build.query({
                  query: () => {
                        return {
                              url: '/user/profile',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TUser>) => {
                        return response.data;
                  },
            }),
            registerUser: build.mutation({
                  query: (data) => {
                        return {
                              url: '/user',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
            updateUserProfile: build.mutation({
                  query: (data) => {
                        return {
                              url: '/user',
                              method: 'PATCH',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useRegisterUserMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = authApi;
