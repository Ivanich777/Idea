import { Box, Button, Modal, Typography, TableFooter } from '@mui/material';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NamedTupleMember } from 'typescript';
import { OrderItem } from './types/state';
import { Order } from '../types/state';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

interface IModel {
  order: Order,
  orderItems: OrderItem[],
  showModal: boolean,
  handleManualClose: () => void,
}

function ModalInfo({ order, orderItems, showModal, handleManualClose }: IModel): JSX.Element {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontSize: '12px'
  };

  function sum(): number {
    const arrWithOrder: number[] = orderItems.map((order: OrderItem) => {
      if (order) {
        return order.count > 1 ?
          (order['Product.price'] * order.count) :
          order['Product.price'];
      }
      return 0;
    });
    const wasd: number = arrWithOrder.reduce((summa, price) => summa + price, 0);
    return wasd;
  }

  const getDate = (string: string): string => new Date(string).toLocaleString("en-GB", { timeZone: 'Europe/Moscow' }); 

  const { user } = useSelector((state: RootState) => state.users);

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleManualClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {user?.admin
              ? (
                <>
                  Номер: {order.id}<br />
                  Дата: {getDate(order.createdAt)}<br />
                  Пользователь: {`${order.surname} ${order.name}`}<br />
                  e-mail: {order.email}<br />
                  Телефон: {order.phone}
                </>
              )
              : 'Ваш заказ'}
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Номер</TableCell>
                  <TableCell align="left">Название товара</TableCell>
                  <TableCell align="left">Цена, 1 шт/руб</TableCell>
                  <TableCell align="left">Количество</TableCell>
                  <TableCell align="left">Итоговая сумма, шт/руб</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderItems.map((orderItem, index) => (
                  <TableRow
                    key={orderItem.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {orderItem['Product.title']}
                    </TableCell>
                    <TableCell align="left">{orderItem['Product.price']}</TableCell>
                    <TableCell align="left">{orderItem.count}</TableCell>
                    <TableCell align="right">{orderItem.count * orderItem['Product.price']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell sx={{ fontSize: '1rem'}} align="right">{`Итого: ${sum()} ₽`}</TableCell>
              </TableFooter>
            </Table>
          </TableContainer>

        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
