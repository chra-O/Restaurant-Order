import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{
   
  }]
};

const slice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addorder: (state, action) => {},
    addindex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addorder, addindex } = slice.actions;
export default slice.reducer;
