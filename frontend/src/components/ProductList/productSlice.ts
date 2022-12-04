import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState: State = {
  products: [],
};

export const asyncProductList = createAsyncThunk('products/asyncProductList', () => {
  return fetch('http://localhost:3000/')
    .then((result) => result.json())
    .then((data) => data);
});

const productListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export default productListSlice.reducer;