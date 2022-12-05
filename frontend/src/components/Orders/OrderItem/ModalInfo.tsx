import { Box, Button, Modal, Typography, TableFooter } from '@mui/material';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { State } from './types/state';

interface IModel {
  orderItems: State,
  showModal: boolean,
  handleManualClose: () => void,
}

function ModalInfo({ orderItems, showModal, handleManualClose }: IModel): JSX.Element {
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

  function sum() {
    const arrWithOrder = orderItems.map((orderItem) => orderItem.count > 1 ? (orderItem['Product.price'] * orderItem.count) : orderItem['Product.price']);
    const wasd = arrWithOrder.reduce((sum, orderItem) => sum + orderItem, 0);
    return wasd;
  }

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
            Ваш заказ:
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Номер заказа</TableCell>
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
                    <TableCell align="rigth">{orderItem.count * orderItem['Product.price']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="right">{sum()}</TableCell>
              </TableFooter>
            </Table>
          </TableContainer>

        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
