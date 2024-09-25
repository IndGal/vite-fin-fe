import { configureStore } from "@reduxjs/toolkit";
import { serviceAuth } from "./Services/Service.Auth";
import { serviceUser } from "./Services/Service.User";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import auth from "./Auth";
import user from "./User";
import app from "./App";

export const store = configureStore({
	reducer: {
		auth,
		user,
		app,
		[serviceAuth.reducerPath]: serviceAuth.reducer,
		[serviceUser.reducerPath]: serviceUser.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([
			serviceAuth.middleware,
			serviceUser.middleware,
		]),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

//typed dispatcher and selector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//API hooks
export { useLoginQuery } from "./Services/Service.Auth";
export { useUserInfoQuery } from "./Services/Service.User";
