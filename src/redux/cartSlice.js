import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload.title);
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.forEach((product, index) => {
        if (product.id === action.payload) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
