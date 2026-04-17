import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },

  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (type === "increase") item.quantity++;
      if (type === "decrease" && item.quantity > 1) item.quantity--;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
