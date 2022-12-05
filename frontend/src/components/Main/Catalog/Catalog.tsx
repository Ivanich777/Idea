import { withTheme } from '@emotion/react';
import { Box, Button, List, ListItem, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

function Catalog() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const btn = {
        width: 200,
        height: 50,
        background: 'white',
        marginRight: 30,
        marginLeft: 30,
        border: 'solid 1px #1976d2'
    }
    return (
        <div>
            <Button
              sx={btn}
              onClick={handleOpen}
            >Каталог
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <List>
                        <ListItem>
                            1
                        </ListItem>
                        <ListItem>
                            2
                        </ListItem>
                        <ListItem>
                            3
                        </ListItem>
                    </List>
                </Box>
            </Modal>
        </div>
    );
}

export default Catalog;
