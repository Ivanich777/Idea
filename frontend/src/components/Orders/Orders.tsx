import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncOrders } from './orderSlice';

function Orders(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(addAsyncOrders());
  const { orders } = useSelector((state: RootState) => state.orders);

  return (
    <div>
      <div>Orders</div>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
