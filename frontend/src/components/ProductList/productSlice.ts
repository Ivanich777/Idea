import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

export const addAsyncProducts = createAsyncThunk('products/addAsyncProducts', () => fetch('http://localhost:4000/api/products')
    .then((result) => result.json())
    .then((data) => data));

const initialState: State = {
    products: []
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (product) => {
        product
        .addCase(addAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.products.forEach((item, i) => {
                 item.image = action.payload[i]['Images.path'];
            });
        });
    }
});

export default productSlice.reducer;
