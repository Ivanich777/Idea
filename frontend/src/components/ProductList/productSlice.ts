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

export const delAsyncProduct = createAsyncThunk('products/delAsyncProducts', (id: number) => fetch(`http://localhost:4000/api/product/${id}`, {
    method: 'delete'
})
    .then((result) => result.json())
    .then((data) => data));

export const editAsyncProduct = createAsyncThunk('products/editAsyncProducts', (product: any) => fetch(`http://localhost:4000/api/product/${product.id}`, {
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(product),
})
    .then((result) => result.json())
    .then((data) => data));

export const addAsyncImages = createAsyncThunk('products/addAsyncImages', (files: any) => fetch('http://localhost:4000/api/images', {
    method: 'post',
    body: files,
})
    .then((result) => result.json())
    .then((data) => data));

const initialState: State = {
    products: [],
    images: [],
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
                    item.features = action.payload[i].Features;
                    item.category = action.payload[i].Category.title;
                    item.isDeletable = !action.payload[i].OrderItems.length;
                });
            })
            .addCase(addAsyncProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(delAsyncProduct.fulfilled, (state, action) => {
                const arr = state.products.filter((item) => item.id !== action.payload);
                state.products = arr;
            })
            .addCase(editAsyncProduct.fulfilled, (state, action) => {
                // const arr = state.products.map((item) => {
                //     if (item.id === action.payload.id) {
                //         return action.payload;
                //     }
                //         return item;
                // });
                // state.products = arr;
                const index = state.products.findIndex((item) => item.id === action.payload.id);
                state.products[index] = { ...state.products[index], ...action.payload };
            })
            .addCase(addAsyncImages.fulfilled, (state, action) => {
                state.images = action.payload;
            });
    }
});

export default productSlice.reducer;
