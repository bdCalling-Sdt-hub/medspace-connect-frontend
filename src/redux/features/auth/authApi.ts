import { baseApi } from '../api/baseApi';

const authApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            loginUser: build.mutation({
                  query: (data) => {
                        return {
                              url: '/auth/login',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['users'],
            }),
            verifyEmail: build.mutation({
                  query: (data) => {
                        return {
                              url: '/auth/verify-email',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
            forgetPassword: build.mutation({
                  query: (data) => {
                        return {
                              url: '/auth/forget-password',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
            resetPassword: build.mutation({
                  query: (data) => {
                        return {
                              url: '/auth/reset-password',
                              method: 'POST',
                              body: data,
                              headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${localStorage.getItem('oneTimeToken')}`,
                              },
                        };
                  },
            }),
            changePassword: build.mutation({
                  query: (data) => {
                        return {
                              url: '/auth/change-password',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
      }),
});

export const {
      useLoginUserMutation,
      useChangePasswordMutation,
      useForgetPasswordMutation,
      useResetPasswordMutation,
      useVerifyEmailMutation,
} = authApi;
