import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:JSON.parse(localStorage.getItem("food")) ||  []
};

const slice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addorder: (state, action) => {},
    addindex: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("food", JSON.stringify(state.value));
    },
  },
});

export const { addorder, addindex } = slice.actions;
export default slice.reducer;
