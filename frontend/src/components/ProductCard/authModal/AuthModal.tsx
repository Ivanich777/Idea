import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductAddForm from '../../ProductAddForm/ProductAddForm';
import { NavLink } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  backgroundColor: '#FAEBD7',
  borderRadius: '15px',
  fontFamile:'Comfortaa, cursive', 
  fontSize: '50px',
  p: 4,
};

export default function AuthModal(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        size="small"
        color="primary"
        style={{ color: 'black', textAlign: 'center', margin: 'auto' }}>
        В корзину
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
          style={{fontFamily:'Comfortaa, cursive', 
          fontSize: '20px',}}>
            Чтобы добавить товар в корзину, пройдите{' '}
            <NavLink to='/auth/reg' style={{ color: 'var(--color-active)' }}>
              регистрацию 
            </NavLink>
            {' '} или {' '}
            <NavLink to='/auth/login' style={{ color: 'var(--color-active)' }}>
              авторизируйтесь.
            </NavLink>


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}