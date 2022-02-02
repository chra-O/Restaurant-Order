import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: JSON.parse(localStorage.getItem("food")) || [],
  counter: JSON.parse(localStorage.getItem("q")) || null,
  index: null,
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
    inc(state, action) {
      state.counter += action.payload;
      localStorage.setItem("q", JSON.stringify(state.value));
    },
    dec(state, action) {
      state.counter -= action.payload;
    },
    setindex(state, action) {
      state.index = action.payload;
    },
  },
});

export const { deleteorder, addindex, dec, inc, setindex } = slice.actions;
export default slice.reducer;
