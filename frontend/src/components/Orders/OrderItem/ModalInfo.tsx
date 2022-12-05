import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

interface IModel {
  showModal: boolean,
  handleManualClose: () => void,
}

function ModalInfo({ showModal, handleManualClose }: IModel): JSX.Element {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
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

        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
