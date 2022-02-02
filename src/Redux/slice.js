import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("food")) || [],
};

const slice = createSlice({
  name: "food",
  initialState,
  reducers: {
    deleteorder: (state, action) => {
      state.value.splice(action.payload, 1);
      localStorage.setItem("food", JSON.stringify(state.value));
    },
    addindex: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("food", JSON.stringify(state.value));
    },
  },
});

export const { deleteorder, addindex } = slice.actions;
export default slice.reducer;
