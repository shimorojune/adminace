import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface UserState {
  employeeId: string | null;
  employeeName: string | null;
  isAdmin: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  employeeId: null,
  employeeName: null,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<
        Pick<UserState, "employeeId" | "employeeName" | "isAdmin">
      >
    ) => {
      // PAYLOAD
      const { employeeId, employeeName, isAdmin } = action.payload;

      // SETTER
      state.employeeId = employeeId;
      state.employeeName = employeeName;
      state.isAdmin = isAdmin;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
