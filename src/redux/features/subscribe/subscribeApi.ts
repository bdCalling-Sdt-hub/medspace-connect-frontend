import { baseApi } from '../api/baseApi';

export interface StripeAccountInfo {
      stripeCustomerId: string;
}

const subscribeApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            subscribeEmail: build.mutation({
                  query: (data) => {
                        return {
                              url: '/subscriber/create',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useSubscribeEmailMutation } = subscribeApi;
