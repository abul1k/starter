import { configureStore } from "@reduxjs/toolkit";

// layout changes
import layoutActions from "./layoutActions/layout.actionSlice";

// slices
import products from "./products/products";

export const store = configureStore({
  reducer: {
    layoutActions: layoutActions,
    products: products,
  },
  devTools: true,
});
