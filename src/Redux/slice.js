import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: JSON.parse(localStorage.getItem("food")) || [],
  counter: 0,
  theme: JSON.parse(localStorage.getItem('theme') ) || false

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
  
    },
    dec(state, action) {
      state.counter -= action.payload;
      
    },
    toggle(state){
      state.theme = !state.theme
      localStorage.setItem('theme', state.theme)
  },
   
  },
});

export const { deleteorder, addindex, dec, inc, toggle } = slice.actions;
export default slice.reducer;
