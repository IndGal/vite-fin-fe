import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../Models/User";

interface IUser {
  user: TUser | null;
}

const initialState: IUser = {
	user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
