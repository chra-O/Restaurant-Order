import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slice";

 const store =configureStore({
  reducer: {
    food: Slice,
  },
});
export default store