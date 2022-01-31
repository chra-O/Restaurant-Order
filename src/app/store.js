import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./Slice";
export const store = configureStore({
  reducer: {
    order: orderSlice,
  },
});
