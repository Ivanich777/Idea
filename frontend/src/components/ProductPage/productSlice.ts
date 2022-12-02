import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State, Product } from './types/state';

const initialState: State = {
  product: {
    article: 0,
    title: '',
    description: '',
    count: 0,
    price: 0,
    idCategory: 0,
  },
};

export const asyncCardProduct = createAsyncThunk('cardproduct/asyncCardProduct', () => {
  return fetch('http://localhost:3000/product/:id')
    .then((result) => result.json())
    .then((data) => data);
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export default productSlice.reducer;
