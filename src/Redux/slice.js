import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("food")) || [],

 
  count: 1,
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
      const val = state.value.find(
        (food) => food.index === action.payload.index
      );
      if (!val) {
        state.value.push(action.payload);
        localStorage.setItem("food", JSON.stringify(state.value));
      }
    },
    inc: (state, action) => {
      const indrement = state.value.find(
        (food) => food.name === action.payload
      );
      if (indrement) {
        indrement.qualety += 1;
      }
      state.count=indrement.qualety
    },

    ///////////////////////////
    dec: (state, action) => {
      const decrement = state.value.find(
        (food) => food.name === action.payload
      );
      if (decrement) {
        if (decrement.qualety > 0) {
          decrement.qualety -= 1;
        }
        state.count=decrement.qualety
      }
    },
    
  },
});

export const { deleteorder, addindex, dec, inc, toggle } = slice.actions;
export default slice.reducer;
