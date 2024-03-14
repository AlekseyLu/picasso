import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (start = 0) => ({
        url: "/posts",
        params: {
          _limit: 10,
          _start: start,
        },
      }),
    }),
    getCurrentPost: build.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetCurrentPostQuery } = postsApi;
