import { Box, Typography, TextField, FormControl, Select, MenuItem, FormLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import OrderCard from './OrderItem/OrderCard';
import { Order } from './types/state';

function Orders(): JSX.Element {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [searchNumber, setSearchNumber] = useState('');
  const [searchUser, setSearchUser] = useState('');
  const [searchStatus, setSearchStatus] = useState('Все');

  const { user } = useSelector((state: RootState) => state.users);
  const { orders } = useSelector((state: RootState) => state.orders);

  const handleSearchNumber = (event: any): void => {
    setSearchNumber((event.target.value));
    if (event.target.value) {
      setOrderList(orderList.filter((item) => String(item.id).includes(event.target.value)));
    } else {
      setOrderList(orders);
    }
  };

  const handleSearchUser = (event: any): void => {
    setSearchUser((event.target.value));
    if (event.target.value) {
      setOrderList(orderList.filter((item) => String(item.email).includes(event.target.value)));
    } else {
      setOrderList(orders);
    }
  };

  const handleSearchStatus = (event: any): void => {
    setSearchStatus((event.target.value));
    if (event.target.value !== 'Все') {
      setOrderList(orderList.filter((item) => item.status === event.target.value));
    } else {
      setOrderList(orders);
    }
  };

  useEffect(() => {
    if (user?.admin) {
      setOrderList(orders);
    } else {
      setOrderList(orders.filter((order: Order) => order.idUser === user?.id));
    }
  }, []);

  const answerFromBack = useSelector((state: RootState) => state.orders);
  return (
    <div>
      {user?.admin && (
        <>
          <Box sx={{ mt: 2 }}>Поиск заказов: </Box>
          <Box sx={{ mb: 2, mt: 1, display: 'flex', justifyContent: 'space-around' }}>
            <TextField
              id="outlined-required"
              label="Номер заказа"
              defaultValue=""
              value={searchNumber}
              onChange={handleSearchNumber}
            />
            <TextField
              id="outlined-required"
              label="Имя пользователя"
              defaultValue=""
              value={searchUser}
              onChange={handleSearchUser}
            />
            <FormControl>
              <Select
                id="demo-simple-select"
                value={searchStatus}
                label="Статус"
                onChange={handleSearchStatus}
                sx={{ width: '250px', height: '56px' }}
              >
                <MenuItem value="Все">Все</MenuItem>
                <MenuItem value="Завершен">Завершен</MenuItem>
                <MenuItem value="В обработке">В обработке</MenuItem>
                <MenuItem value="Отменен">Отменен</MenuItem>
                <MenuItem value="Принят">Принят</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </>
      )}
      {user?.admin
        ?
        (
          <Box sx={{ mb: 1 }}>
            Все заказы:
          </Box>
        )
        : (
          <Box sx={{ mb: 1 }}>
            Ваши заказы:
          </Box>
        )}
      {(!user?.admin && answerFromBack.error.message === 'У вас нет заказов') && (
        <Typography>{answerFromBack.error.message}</Typography>
      )}
      {(!user?.admin && answerFromBack.error.message !== 'У вас нет заказов') && (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {orderList.map((order: any) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </Box>
      )}
      {user?.admin && (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {orderList.map((order: any) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </Box>
      )}
    </div>
  );
}

export default Orders;
