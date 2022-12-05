import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './OrderItem/state';

export const addAsyncOrders = createAsyncThunk('orders/addAsyncOrders', () =>
  fetch('http://localhost:4000/api/profile')
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
          // state.orders = action.payload;
          // state.error.message = action.payload.error.message;
          // console.log(action.payload, 'state.orders');
          // console.log(action.payload, '123');

        if (!action.payload.error) {
          state.orders = action.payload;
          console.log(action.payload, 'state.orders');
        } else {
          state.error.message = action.payload.error.message;
          console.log(state.error.message, 'state.error.message');
        }
      })
      .addCase(addAsyncOrders.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export default orderSlice.reducer;
