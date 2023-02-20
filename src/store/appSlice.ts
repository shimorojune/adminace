import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface AppState {
  language: "en" | "hi";
}

// Define the initial state using that type
const initialState: AppState = {
  language: "en",
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateAppLanguage: (state, action: PayloadAction<AppState["language"]>) => {
      state.language = action.payload;
    },
  },
});

export const { updateAppLanguage } = appSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.app.language;

export default appSlice.reducer;
