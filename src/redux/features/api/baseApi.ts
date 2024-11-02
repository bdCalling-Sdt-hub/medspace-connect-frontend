import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.10.15:3000/api/v1' }),
      endpoints: () => ({}),
      tagTypes: ['users', 'spaces', 'supports'],
});
