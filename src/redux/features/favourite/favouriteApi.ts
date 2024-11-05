import { TApiResponse } from '@/src/types';
import { baseApi } from '../api/baseApi';

const favoriteApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getFavorite: build.query({
                  query: () => {
                        return {
                              url: '/favourite',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<any>) => {
                        return response.data;
                  },
                  providesTags: ['favorite'],
            }),
            addFavorite: build.mutation({
                  query: (data) => {
                        return {
                              url: '/favourite/create',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['favorite'],
            }),
            removeFavorite: build.mutation({
                  query: (id) => {
                        return {
                              url: `/favourite/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['favorite'],
            }),
      }),
});

export const { useAddFavoriteMutation, useGetFavoriteQuery, useRemoveFavoriteMutation } = favoriteApi;
