import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    removeItem: (store, action) => {
      let index = store.items.findIndex(
        (item) => item.id === action.payload.id
      );
      store.items.splice(index, 1);
    },
    clearCart: () => {
      store.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
