import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({
            baseUrl: 'https://api.medspaceconnect.com/api/v1',
            // credentials: 'include',

            prepareHeaders: (header, { getState }) => {
                  const { token } = (getState() as RootState).auth;

                  if (token) {
                        header.set('Authorization', `Bearer ${token}`);
                  }
            },
      }),
      endpoints: () => ({}),
      tagTypes: ['users', 'spaces', 'supports', 'favorite'],
});

export const imageUrl = 'https://api.medspaceconnect.com';
