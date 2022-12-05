import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ModalInfo from './ModalInfo';
import { Order } from '../types/state';
import { RootState, useAppDispatch } from '../../../store';
import { addAsyncOrderItems } from './orderItemSlice';

function OrderCard({ order }: { order: Order }): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleManualOpen = () => {
    const idOrder = order.id;
    dispatch(addAsyncOrderItems(idOrder));
    setShowModal(true);
  };

  const handleManualClose = () => {
    setShowModal(false);
  };

  const { orderItems } = useSelector((state: RootState) => state.orderItems);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingLeft: '15px', paddingRight: '15px', border: 'solid', borderRadius: '10px', margin: '2px' }}>
      <p>Номер заказа: {order.id}</p>
      <Button onClick={handleManualOpen}>Подробнее</Button>
      <ModalInfo
        orderItems={orderItems}
        showModal={showModal}
        handleManualClose={handleManualClose}
      />
      {order.status === 'Завершен' ? (<p>{order.status}     🟢</p>) : (order.status === 'Отменен' ? (<p>{order.status}     🔴</p>) : (<p>{order.status}     🟡</p>))}
    </Box>
  );
}

export default OrderCard;
