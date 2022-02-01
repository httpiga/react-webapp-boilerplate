import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiEndpoint } from '../settings'
import { User } from '../types'
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiEndpoint }),
  endpoints: (builder) => ({
    getUserList: builder.query<User[], undefined>({
      query: () => `user`, // call api/user
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserListQuery } = userApi
