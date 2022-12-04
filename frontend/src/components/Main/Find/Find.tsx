import { Box, TextField, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

function Find() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <div>
            <TextField onClick={handleOpen} style={{ cursor: 'move' }} disabled={open} placeholder="Поиск" />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <TextField placeholder="Поиск" />
                </Box>
            </Modal>
        </div>
    );
}

export default Find;
