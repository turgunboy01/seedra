import { createSlice } from "@reduxjs/toolkit";

const SravSlice = createSlice({
  name: "srav",
  initialState: {
    data: JSON.parse(localStorage.getItem("srav")) || [],
  },
  reducers: {
    setTosrav(state, action) {
      const existingItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex === -1) {
        state.data = [...state.data, { ...action.payload, srav: true }];
      } else {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      }

      localStorage.setItem("srav", JSON.stringify(state.data));
    },
  },
});
export const { setTosrav } = SravSlice.actions;

export const SelectSrav = (srav) => srav.srav.data;
export default SravSlice.reducer;
