import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get base url
import { BASE_URL } from "../../utils/constants";

// get all products
export const getProduct = createAsyncThunk(
  "products/getProducts",
  async (params, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}/products?${params}`);
      return res.data;
    } catch (err) {
      alert(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);

// create a product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`${BASE_URL}/products`, payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
