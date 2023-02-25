import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface AppError {
  errorMessage: string;
}

// Define a type for the slice state
export interface AppState {
  language: "en" | "hi";
  errors: AppError[];
}

// Define the initial state using that type
const initialState: AppState = {
  language: "en",
  errors: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateAppLanguage: (state, action: PayloadAction<AppState["language"]>) => {
      state.language = action.payload;
    },
  },
});

export const { updateAppLanguage } = appSlice.actions;
export default appSlice.reducer;
