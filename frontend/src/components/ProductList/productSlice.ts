import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

export const addAsyncProducts = createAsyncThunk('products/addAsyncProducts', () => fetch('http://locakhost:4000/api/products')
    .then((result) => result.json())
    .then((data) => data));

const initialState: State = {
    products: [
        {
            id: 1,
            article: 228228,
            title: 'doska',
            price: 1000
        }
    ]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (product) => {
        product
        .addCase(addAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    }
});

export default productSlice.reducer;
