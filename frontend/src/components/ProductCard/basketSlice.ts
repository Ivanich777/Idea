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

export const actualOrder = createAsyncThunk('orders/actualOrder', (id: number) =>
  fetch(`http://localhost:4000/api/basket/?id=${id}`)
    .then((result) => result.json())
    .then((data) => data));

export const deleteBasketItem = createAsyncThunk('orders/deleteBasketItem', (id: number) => {
  fetch(`http://localhost:4000/api/basket/${id}`, { method: 'DELETE' });
})

export const makeOrder = createAsyncThunk('orders/makeOrder', (numberOfOrder: number):Promise<{id: number, status: string }> => {
  return fetch(`http://localhost:4000/api/makeOrder`, {
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ id: numberOfOrder }),
  })
  .then((result)=> result.json())
})

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
        console.log(action.payload, 'action.payload');
        console.log(state.basket, 'state.basket');
        return {
          ...state,
          basket: state.basket.concat([action.payload])
        }
      })
      .addCase(actualOrder.fulfilled, (state, action) => {
        state.basket = action.payload;
      })
      .addCase(makeOrder.fulfilled, (state, action) => {
                
        return {
          ...state,
          basket: state.basket.map((el) =>  el.idOrder === action.payload.id ? {...el, status: action.payload.status } : el )
          }
      })
  }
});

export default orderItemsSlice.reducer;
