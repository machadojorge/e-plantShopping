import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newPlant = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newPlant.name
      );

      if (!existingItem) {
        state.items.push({
          ...newPlant,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const nameToRemove =
        action.payload?.name ?? action.payload;

      state.items = state.items.filter(
        (item) => item.name !== nameToRemove
      );
    },

    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find(
        (cartItem) => cartItem.name === name
      );

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;