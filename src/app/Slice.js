import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

const Slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addTolist: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTolist } = Slice.actions;

export default Slice.reducer;
