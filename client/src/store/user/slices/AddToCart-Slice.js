import { createSlice } from '@reduxjs/toolkit';

const addToCartSlice = createSlice({
  name: 'add-to-slice',
  initialState: {
    cartItems: [],
    totalAmount: 0,
  },
  reducers: {
    showAllItems: (state, action) => {
      const items = action.payload || [];
      state.cartItems = items;
      state.totalAmount = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item._id === id);
      if (item) {
        item.quantity += 1;
        state.totalAmount += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
        const id = action.payload;
        const itemIndex = state.cartItems.findIndex((item) => item._id === id);
      
        if (itemIndex !== -1) {
          const item = state.cartItems[itemIndex];
      
          if (item.quantity > 1) {
            item.quantity -= 1;
            state.totalAmount -= item.price;
          } else {
            // quantity is 1, so remove item
            state.totalAmount -= item.price;
            state.cartItems.splice(itemIndex, 1);
          }
        }
      },
      

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item._id === id);
      if (item) {
        state.totalAmount -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((item) => item._id !== id);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  showAllItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = addToCartSlice.actions;

export default addToCartSlice;
