import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

export const addNewOrder = createAsyncThunk('orders/addNewOrder', (idProduct: {}) =>
  fetch(`http://localhost:4000/api/basket`, {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(idProduct),
  })
    .then((result) => result.json())
    .then((data) => data));

export const actualOrder = createAsyncThunk('orders/actualOrder', (id:number) =>
  fetch(`http://localhost:4000/api/basket/?id=${id}`)
    .then((result) => result.json())
    .then((data) => data));

const initialState: State = {
  basket: [],
};

const orderItemsSlice = createSlice({
  name: 'orderItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewOrder.fulfilled, (state, action) => {
        state.basket.push(action.payload);
      })
      .addCase(actualOrder.fulfilled, (state, action) => {
        state.basket = action.payload;
      })
    // .addCase(addNewOrder.rejected, (state, action) => {
    //   state.error.message = action.error.message;
    // });
  }
});

export default orderItemsSlice.reducer;
