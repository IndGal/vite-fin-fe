import { createSlice } from "@reduxjs/toolkit";

interface IApp {
  loadingMessage: string;
  errorMessage: string;
}

const initialState: IApp = {
  loadingMessage: "",
  errorMessage: ""
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoadingMessage: (state, action) => {
      state.loadingMessage = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setLoadingMessage, setErrorMessage } =
  appSlice.actions;
export default appSlice.reducer;
