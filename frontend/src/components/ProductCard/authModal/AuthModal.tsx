import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './basket.css';

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
  const [reg, setReg] = React.useState(false);
  const [log, setLog] = React.useState(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const handleCloseReg = (): void => setReg(false);

  const handleCloseLog = (): void => setLog(false);

  const regToLog = (): void => {
    setReg(false);
    setLog(true);
  };

  const logToReg = (): void => {
    setLog(false);
    setReg(true);
  };

  function closerReg(): void {
    setOpen(false);
    setReg(true);
  }

  function closerLog(): void {
    setOpen(false);
    setLog(true);
  }

  return (
    <div className="cardBasket">
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
            style={{
              fontFamily: 'Comfortaa, cursive',
              fontSize: '20px',
            }}
          >
            Чтобы добавить товар в корзину, пройдите{' '}
            <span onClick={closerReg} style={{ color: 'var(--color-active)', textDecoration: 'underline', cursor: 'pointer' }}>
              регистрацию
            </span>
            {' '} или {' '}
            <span onClick={closerLog} style={{ color: 'var(--color-active)', textDecoration: 'underline', cursor: 'pointer' }}>войдите.</span>

          </Typography>
        </Box>
      </Modal>
      <RegistrationDesktop
        handleRegClose={handleCloseReg}
        open={reg}
        logopen={log}
        regToLog={regToLog}
      />
      <LoginDesktop handleLogClose={handleCloseLog} logopen={log} open={reg} logToReg={logToReg} />
    </div>
  );
}
