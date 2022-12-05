import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

export const addAsyncProducts = createAsyncThunk('products/addAsyncProducts', () => fetch('http://localhost:4000/api/products')
    .then((result) => result.json())
    .then((data) => data));

export const addAsyncProduct = createAsyncThunk('products/addAsyncProduct', (product: any) => fetch('http://localhost:4000/api/product', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(product),
})
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
                 item.images = action.payload[i].Images;
            });
        })
        .addCase(addAsyncProduct.fulfilled, (state, action) => {
            console.log(action.payload);
            state.products.push(action.payload);
        });
    }
 });

export default productSlice.reducer;
