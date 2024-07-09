import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "like",
  initialState: {
    data: JSON.parse(localStorage.getItem("like")) || [],
  },
  reducers: {
    setToWishList(state, action) {
      const existingItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex === -1) {
        state.data = [...state.data, { ...action.payload, srav: true }];
      } else {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      }

      localStorage.setItem("like", JSON.stringify(state.data));
    },
  },
});

export const { setToWishList } = WishlistSlice.actions;
export const SelectWishList = (state) => state.like.data;
export default WishlistSlice.reducer;
