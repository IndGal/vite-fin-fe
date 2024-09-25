import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

type TLogin = {
	userNik: string;
	passw: string;
	signedMsg?: string;
};
type TRegister = {
	nik: string;
	passw: string;
	email?: string;
	firstName?: string;
	secondName?: string;
	signedMsg?: string;
};

type TLogOut = {
	userId: number;
};

type TRefreshToken = {
	userNik: string;
};

const authQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_BASEURL,
	credentials: "omit",
});

export const serviceAuth = createApi({
	reducerPath: "serviceAuth",
	baseQuery: authQuery,
	endpoints: builder => ({
		login: builder.query({
			query: (payload: TLogin) => ({
				url: `/login`,
				credentials: "include",
				method: "POST",
				body: payload,
			}),
		}),
		register: builder.query({
			query: (payload: TRegister) => ({
				url: `/sign`,
				credentials: "include",
				method: "POST",
				body: payload,
			}),
		}),
		refreshToken: builder.query({
			query: (payload: TRefreshToken) => ({
				url: `/refreshtoken`,
				credentials: "include",
				method: "POST",
				body: payload,
			}),
		}),
		logout: builder.query({
			query: (payload: TLogOut) => ({
				url: `/login`,
				credentials: "include",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const {
	useLoginQuery,
	useRegisterQuery,
	useRefreshTokenQuery,
	useLogoutQuery,
} = serviceAuth;
