import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: {
  },
  reducers: {
    dummy(state, action: PayloadAction<unknown>) {
      console.log(state, action);
    },
  },
});
export default todoSlice.reducer;
export const { dummy } = todoSlice.actions;
