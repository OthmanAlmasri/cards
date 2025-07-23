import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  statusTab: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          //productId لا يساوي  item.productId داخل مصفوفة الجديدة يكون  فيها
          // في مثال بنهاية
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});
export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;

// state = {
//   items: [
//     { productId: 1, name: "iPhone" },
//     { productId: 2, name: "Samsung" },
//     { productId: 3, name: "Xiaomi" }
//   ]
// }

// productId = 2;  // لنحذف هذا المنتج
// بعد التنفيذ:

// javascript
// state.items = [
//   { productId: 1, name: "iPhone" },
//   { productId: 3, name: "Xiaomi" }
// ]
