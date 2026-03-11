import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery,
  //baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
