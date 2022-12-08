import { Box, Typography, TextField, FormControl, Select, MenuItem, Button, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import OrderCard from './OrderItem/OrderCard';
import { addAsyncOrders } from './orderSlice';
import { Order } from './types/state';

const styles = {
  labelSearch: {
    mt: 2,
    textAlign: 'left',
    paddingTop: '10px',
    ml: 2,
    fontSize: '1rem',
    textDecoration: 'underline',
  },
  btnFilter: {
    fontSize: '1rem',
  }
}

function Orders(): JSX.Element {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [searchNumber, setSearchNumber] = useState('');
  const [searchUser, setSearchUser] = useState('');
  const [searchStatus, setSearchStatus] = useState('Все');
  const dispatch = useAppDispatch();


  const { user } = useSelector((state: RootState) => state.users);
  const { orders } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    if (user?.admin) {
      setOrderList(orders);
    } else {
      setOrderList(orders.filter((order: Order) => order.idUser === user?.id));
      // dispatch(addAsyncOrders())
    }
  }, []);

  const handleSearchNumber = (event: any): void => {
    setSearchNumber((event.target.value));
    let fOrders = orders;
    if (event.target.value) {
      fOrders = fOrders.filter((item) => String(item.id).includes(event.target.value));
    }
    if (searchUser) {
      fOrders = fOrders.filter((item) => String(item.email).includes(searchUser));
    }
    if (searchStatus !== 'Все') {
      fOrders = fOrders.filter((item) => item.status === searchStatus);
    }
    setOrderList(fOrders);
  };

  const handleSearchUser = (event: any): void => {
    setSearchUser((event.target.value));
    let fOrders = orders;
    if (event.target.value) {
      fOrders = fOrders.filter((item) => String(item.email).includes(event.target.value));
    }
    if (searchNumber) {
      fOrders = fOrders.filter((item) => String(item.id).includes(searchNumber));
    }
    if (searchStatus !== 'Все') {
      fOrders = fOrders.filter((item) => item.status === searchStatus);
    }
    setOrderList(fOrders);
  };


  const handleSearchStatus = (event: any): void => {
    setSearchStatus((event.target.value));
    let fOrders = orders;
    if (event.target.value !== 'Все') {
      fOrders = fOrders.filter((item) => item.status === event.target.value);
    }
    if (searchNumber) {
      fOrders = fOrders.filter((item) => String(item.id).includes(searchNumber));
    }
    if (searchUser) {
      fOrders = fOrders.filter((item) => String(item.email).includes(searchUser));
    }
    setOrderList(fOrders);
  };

  const handleDefault = (): void => {
    setSearchNumber('');
    setSearchUser('');
    setSearchStatus(('Все'));
    setOrderList(orders);
  };


  const answerFromBack = useSelector((state: RootState) => state.orders);
  return (
    <div>
      {user?.admin && (
        <>
          <Box sx={styles.labelSearch}>Поиск заказов: </Box>
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
              label="Пользователь"
              defaultValue=""
              value={searchUser}
              onChange={handleSearchUser}
            />
            <FormControl>
              <InputLabel id="demo-simple-select">Статус</InputLabel>
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
            <Button
              onClick={handleDefault}
              sx={styles.btnFilter}
            >
              Сбросить фильтры
            </Button>
          </Box>
        </>
      )}
      {user?.admin
        ?
        (
          <Box sx={styles.labelSearch}>
            Все заказы:
          </Box>
        )
        : (orderList.length === 0 ? (
          <Box sx={styles.labelSearch}>
            У вас еще нет заказов
          </Box>
        ) : (
          <div>
            <Box sx={styles.labelSearch}>
              Ваши заказы:
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              {orderList.map((order: any) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </Box>
          </div>
        )
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
