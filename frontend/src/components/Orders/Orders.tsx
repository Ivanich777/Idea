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
  // const { orders } = useSelector((state: RootState) => state.orders);
  const answerFromBack = useSelector((state: RootState) => state.orders);
  // const { error } = useSelector((state: RootState) => state.orders);

  console.log(answerFromBack, 'answerFromBack');

  return (
    <div>
      <div>Заказы</div>
      {(answerFromBack.error.message === 'У вас нет заказов') ? (
        <Typography>{answerFromBack.error.message}</Typography>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {answerFromBack.orders.map((order) => (
            <OrderCard order={order} />
          ))}
        </Box>
      )}
    </div>
  );
}

export default Orders;
