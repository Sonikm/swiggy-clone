import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    sum: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.sum = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    increaseItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      existingItem.quantity += 1;

      state.sum = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    decreaseItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
       state.items = state.items.filter((item) => item.id !== existingItem.id);
      }

     state.sum = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.sum = state.items.reduce((total, item) => total + item.price, 0);
    },

    clearItem: (state) => {
      state.items = [];
      state.sum = 0;
    },
  },
});

export const { addItem, removeItem, clearItem , increaseItem, decreaseItem} = cartSlice.actions;
export default cartSlice.reducer;
