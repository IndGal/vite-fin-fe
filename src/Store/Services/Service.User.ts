import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';



type TUserInfo = {
  nik: string
}


const userQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASEURL,
  credentials: "omit"
});

export const serviceUser = createApi({
	reducerPath: "serviceUser",
	baseQuery: userQuery,
	endpoints: builder => ({
		userInfo: builder.query({
			query: (payload: TUserInfo) => ({
				url: `/getuser`,
				method: "POST",
				body: payload,
			}),
		}),		
	}),
});

export const { useUserInfoQuery } = serviceUser;