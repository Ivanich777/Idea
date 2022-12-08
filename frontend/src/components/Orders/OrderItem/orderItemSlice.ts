import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

export const addAsyncOrderItems = createAsyncThunk('orders/addAsyncOrderItems', (idOrder: number) =>
  fetch(`http://localhost:4000/api/order/${idOrder}`)
    .then((result) => result.json())
    .then((data) => data));

const initialState: State = {
  orderItems: [],
  error: {
    message: '',
  },
};

const orderItemsSlice = createSlice({
  name: 'orderItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncOrderItems.fulfilled, (state, action) => {
        state.orderItems = action.payload;
      })
      .addCase(addAsyncOrderItems.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export default orderItemsSlice.reducer;
