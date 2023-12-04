import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (username: string) => `users/${username}/repos`,
    }),
  }),
});

export const { useGetReposQuery } = apiSlice;
