import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "@/models";

export interface CartsListState {
  value: Cart[];
}

const initialState: CartsListState = {
  value: [],
};

export const cartsListSlice = createSlice({
  name: "cartsList",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Cart>) => {
      state.value = [...state.value, action.payload];
    },
    removeCart: (state, action: PayloadAction<Cart>) => {
      state.value = state.value.filter((cart) => cart.id !== action.payload.id);
    },
  },
});

export const { addCart, removeCart} =
  cartsListSlice.actions;

export default cartsListSlice.reducer;
