import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/api/v1/movies`,
      providesTags: ["Movies"],
    }),

    getMovie: builder.query({
      query: (id) => `/api/v1/movies/${id}`,
      providesTags: ["Movies"],
    }),

    createReview: builder.mutation({
      query: ({ reviewBody, imdbId }) => ({
        url: "/api/v1/reviews",
        method: "POST",
        body: { reviewBody, imdbId },
      }),
      invalidatesTags: ["Movies"],
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useCreateReviewMutation } =
  moviesApi;
