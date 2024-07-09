import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("data")) || [],
  },
  reducers: {
    addToCart(state, action) {
      const existingItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update its amount
        state.data[existingItemIndex].amount = action.payload.amount;
      } else {
        // If the item doesn't exist, add it to the cart with the specified amount
        state.data.push({ ...action.payload, amount: action.payload.amount });
      }
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    removeItem: (state, action) => {
      const tempCart = state.data.filter((item) => item.id !== action.payload);
      state.data = tempCart;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    increment: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    descrement: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      }
      localStorage.setItem("data", JSON.stringify(state.data));
    },
  },
});
export const { addToCart, removeItem, increment, descrement } =
  CardSlice.actions;

export const selectCard = (state) => state.cart.data;
export default CardSlice.reducer;
