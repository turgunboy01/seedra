import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CartSlice";
import WishListSlice from "./WishlistSlice";
import SravSlice from "./SravSlice";
// import TodoSlice from "./test";
const Store = configureStore({
  reducer: {
    cart: CardSlice,
    like: WishListSlice,
    srav: SravSlice,
    // todos: TodoSlice,
  },
});

export default Store;
