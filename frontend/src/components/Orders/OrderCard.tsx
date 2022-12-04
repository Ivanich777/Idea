import { Box } from '@mui/material';
import React from 'react';
import { Order } from './types/state';

function OrderCard({ order }: { order: Order }): JSX.Element {
  return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingLeft: '15px', paddingRight: '15px', border: 'solid', borderRadius: '10px', margin: '2px' }}>
        <p>Номер заказа: {order.id}</p>
        {order.status === 'Завершен' ? (<p>{order.status}     🟢</p>) : (order.status === 'Отменен' ? (<p>{order.status}     🔴</p>) : (<p>{order.status}     🟡</p>))}

      </Box>
  );
}

export default OrderCard;
