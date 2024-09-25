import { useAppDispatch, useAppSelector } from "../Store";
import { useEffect } from "react";
import { setAccessToken, setSignedMsg } from "../Store/Auth";
import {
	useLoginQuery,
	useRegisterQuery,
	useLogoutQuery,
	useRefreshTokenQuery,
} from "../Store/Services/Service.Auth";

export default function useAuth() {
	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user.user);

	const clearAccessToken = () => {
		dispatch(
			setAccessToken({
				token: "",
				expiresIn: 0,
			})
		);
	};

	const refreshQuery = useRefreshTokenQuery(
		{ userNik:  user?.nik || "" },
		{
			skip: !!user,
			pollingInterval: 1000 * 60 * 5,
		}
	);

	useEffect(() => {
		if (refreshQuery.isFetching) return;
		if (refreshQuery.isSuccess) {
			dispatch(setAccessToken(refreshQuery.data.apiData.accessToken));
		}
		if (refreshQuery.isError) {
			clearAccessToken();
		}
	}, [refreshQuery]);

	useEffect(() => {}, []);

	const loginQuery = useLoginQuery(
		{
		userNik: user?.nik || "",
		passw: "111" ,
	},{
		skip: !!user,
		refetchOnMountOrArgChange: true
	}
);

	useEffect(() => {
		if (loginQuery.isFetching) return;
		if (loginQuery.isSuccess && refreshQuery.data?.apiData?.accessToken) {
			dispatch(setAccessToken(refreshQuery.data.apiData.accessToken));
			setSignedMsg("");
		}
		if (loginQuery.isError) {
			clearAccessToken();
			setSignedMsg("");
		}
	}, [loginQuery]);
	
}
