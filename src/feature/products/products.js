import { createSlice } from "@reduxjs/toolkit";

// initialState
import { initialState } from "./state";

// actions
import { getProduct } from "./actions";

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    // loading untill all products come
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });

    // if success set comed datas to state & stop loading
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });

    // with error & stop Loading
    builder.addCase(getProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
