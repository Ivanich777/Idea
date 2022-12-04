import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncOrders } from './orderSlice';

function Orders(): JSX.Element {
  const { orders } = useSelector((state: RootState) => state.orders);
  console.log(orders);

  const dispatch = useAppDispatch();

  function wasd(): void {
    dispatch(addAsyncOrders());
  }

  return (
    <div>
      <div>Orders</div>
      <button onClick={() => wasd()} type="button">
        add async orders
      </button>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
