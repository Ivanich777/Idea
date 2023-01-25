import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

export const addAsyncCategories = createAsyncThunk('cattegories/getAsyncCategories', () => fetch('http://localhost:4000/api/category')
    .then((result) => result.json())
    .then((data) => data));

const initialState: State = {
    categories: []
};

const productSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAsyncCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            });
    }
});

export default productSlice.reducer;
