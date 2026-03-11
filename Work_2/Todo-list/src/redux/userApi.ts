import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body) => ({
        url: `user/add`,
        method: "POST",
        body,
      }),
    }),
    signInUser: builder.mutation({
      query: () => ({
        url: `auth/login`,
        method: "POST",
        body: {
          username: "emilys",
          password: "emilyspass",
        },
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useSignInUserMutation } = userApi;
