import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const addAsyncOrders = createAsyncThunk('orders/addAsyncOrders', () => fetch('http://localhost:4000/profile')
  .then((result) => result.json())
  .then((data) => data));

const initialState: State = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(addAsyncOrders.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export const addAsyncOrders;
