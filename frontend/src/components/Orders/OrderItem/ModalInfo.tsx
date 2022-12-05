import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useEffect } from 'react';
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
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontSize: '12px'
  };

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
          {orderItems.map((orderItem) => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{orderItem['Product.title']}</p>
              <p>{orderItem['Product.price']}</p>
              <p>Кол-во: {orderItem.count}</p>
              <p>Всего: {orderItem.count * orderItem['Product.price']}</p>
            </div>
          ))}

        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
