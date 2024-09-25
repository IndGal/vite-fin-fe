import { createSlice } from "@reduxjs/toolkit";
import { TToken, TTokenPayload } from "../Models";

interface IAuth {
  access: TToken;
  tokenPayload?: TTokenPayload;
  signedMsg?: string;
}

const initialState: IAuth = {
  access: {
    token: "",
    expiresIn: 0,
  },
  tokenPayload: undefined,
  signedMsg: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access = action.payload;
    },
    setSignedMsg: (state, action) => {
      state.signedMsg = action.payload;
    },
  },
});

export const { setAccessToken, setSignedMsg } =
  authSlice.actions;
export default authSlice.reducer;
