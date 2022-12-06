import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

export const addAsyncOrders = createAsyncThunk('orders/addAsyncOrders', () =>
  fetch('http://localhost:4000/api/profile')
    .then((result) => result.json())
    .then((data) => data));

export const editAsyncOrder = createAsyncThunk('orders/editAsyncOrder', (object: any) =>
  fetch(`http://localhost:4000/api/order/${String(object.id)}`, {
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(object),
  })
    .then((result) => result.json())
    .then((data) => data));

const initialState: State = {
  orders: [],
  error: {
    message: '',
  },
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncOrders.fulfilled, (state, action) => {
        if (!action.payload.error) {
          state.orders = action.payload;
          state.orders.forEach((order, i) => {
            order.email = action.payload[i].User.email;
            order.createdAt = action.payload[i].createdAt;
          });
        } else {
          state.error.message = action.payload.error.message;
        }
      })
      .addCase(addAsyncOrders.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(editAsyncOrder.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.orders
      });
  }
});

export default orderSlice.reducer;
