import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import OrderCard from './OrderItem/OrderCard';
import { addAsyncOrders } from './orderSlice';

function Orders(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAsyncOrders());
  }, []);
  const { orders, error } = useSelector((state: RootState) => state.orders);

  return (
    <div>
      <div>Заказы</div>
      {orders.length < 1 ? (
        <Typography>{error.message}</Typography>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {orders.map((order) => (
            <OrderCard order={order} />
          ))}
        </Box>

      )}
    </div>
  );
}

export default Orders;
