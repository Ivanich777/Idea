import { Box, Button, FormControl, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalInfo from './ModalInfo';
import { Order } from '../types/state';
import { RootState, useAppDispatch } from '../../../store';
import { addAsyncOrderItems } from './orderItemSlice';
import { editAsyncOrder } from '../orderSlice';

function OrderCard({ order }: { order: Order }): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<string>(order.status);

  const dispatch = useAppDispatch();

  const handleManualOpen = (): void => {
    const idOrder = order.id;
    dispatch(addAsyncOrderItems(idOrder));
    setShowModal(true);
  };

  const handleManualClose = (): void => {
    setShowModal(false);
  };

  const handleChange = (event: any): void => {
    dispatch(editAsyncOrder({ id: order.id, status: event.target.value }));
    setOrderStatus(event.target.value);
  };

  const getDate = (string: string): string => new Date(string).toLocaleString("en-GB", { timeZone: 'Europe/Moscow' }); 

  const { orderItems } = useSelector((state: RootState) => state.orderItems);
  const { user } = useSelector((state: RootState) => state.users);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', pl: '15px', pr: '15px', border: 'solid', borderRadius: '10px', ml: '25px', mr: '25px', mt: '10px' }}>
      <p>Номер заказа: {order.id}</p>
      <p>Дата: {getDate(order.createdAt)}</p>

      {user?.admin &&
      (
        <>
          <p>Пользователь: {order.email}</p>
          <p>Телефон: {order.phone}</p>
        </>
      )}
      <Button onClick={handleManualOpen}>Подробнее</Button>
      <ModalInfo
        order={order}
        orderItems={orderItems}
        showModal={showModal}
        handleManualClose={handleManualClose}
      />
      {user?.admin && (
        <FormControl sx={{ alignSelf: 'center', justifySelf: 'end' }}>
          <Select
            id="demo-simple-select"
            value={orderStatus}
            label="Статус"
            onChange={handleChange}
            sx={{ width: '150px', height: '40px' }}
          >
            <MenuItem value="Завершен">Завершен</MenuItem>
            <MenuItem value="В обработке">В обработке</MenuItem>
            <MenuItem value="Отменен">Отменен</MenuItem>
            <MenuItem value="Принят">Принят</MenuItem>
          </Select>
        </FormControl>
      )}
      {user?.admin && orderStatus === 'Завершен' && <p>🔵</p>}
      {user?.admin && orderStatus === 'Отменен' && <p>🔴</p>}
      {user?.admin && orderStatus === 'В обработке' && <p>🟡</p>}
      {user?.admin && orderStatus === 'Принят' && <p>🟢</p>}
      {!user?.admin && orderStatus === 'Завершен' && <p>{order.status}     🔵</p>}
      {!user?.admin && orderStatus === 'Отменен' && <p>{order.status}     🔴</p>}
      {!user?.admin && orderStatus === 'В обработке' && <p>{order.status}     🟡</p>}
      {!user?.admin && orderStatus === 'Принят' && <p>{order.status}     🟢</p>}
    </Box>
  );
}

export default OrderCard;
