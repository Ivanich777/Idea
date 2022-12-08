import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';
import ProductAddForm from '../../ProductAddForm/ProductAddForm';
import './basket.css'

import RegistrationDesktop from '../../Auth/Registration/RegistrationDesktop';

import LoginDesktop from '../../Auth/Login/LoginDesktop';

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
  fontFamile: 'Comfortaa, cursive',
  fontSize: '50px',
  p: 4,
};

export default function AuthModal(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [reg, Set] = React.useState(false);
  const [log, SetLog] = React.useState(false);

  const handleOpen = ():void => setOpen(true);
  const handleClose = ():void => setOpen(false);

  const handleOpenReg = ():void => Set(true);
  const handleCloseReg = ():void => Set(false);

const handleOpenLog = ():void => SetLog(true);
const handleCloseLog = ():void => SetLog(false);

  const regToLog = ():void => {
    Set(false);
    SetLog(true);
  };

  const logToReg = ():void => {
    SetLog(false);
    Set(true);
  };

  function closerReg():void {
   setOpen(false);
   Set(true);
  }

  function closerLog():void {
    setOpen(false);
    SetLog(true);
  }

  return (
    <div className='cardBasket'>
      <Button
        onClick={handleOpen}
        size="small"
        color="primary"
        style={{ color: 'black', textAlign: 'center', margin: 'auto' }}
      >
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
            style={{ fontFamily: 'Comfortaa, cursive',
          fontSize: '20px', }}
          >
            Чтобы добавить товар в корзину, пройдите{' '}
            <span onClick={closerReg} style={{ color: 'var(--color-active)', textDecoration: 'underline', cursor: 'pointer' }}>
              регистрацию
            </span>
            {' '} или {' '}
            {/* <NavLink to="/auth/login" style={{ color: 'var(--color-active)' }}>
              авторизируйтесь.
            </NavLink> */}
            <span onClick={closerLog} style={{ color: 'var(--color-active)', textDecoration: 'underline', cursor: 'pointer' }}>войдите.</span>

          </Typography>
        </Box>
      </Modal>
      <RegistrationDesktop handleRegClose={handleCloseReg} open={reg} logopen={log} regToLog={regToLog} />
      <LoginDesktop handleLogClose={handleCloseLog} logopen={log} open={reg} logToReg={logToReg} />
    </div>
  );
}
