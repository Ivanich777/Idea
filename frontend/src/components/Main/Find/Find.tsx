import { Box, TextField, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import ProductCard from '../../ProductCard/productCard';
import { flexbox } from '@mui/system';

function Find({ products }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1500,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  };
  const bx = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
  const inp = {
    width: 400,
    height: 55,
    background: 'white',
  };
  const fuse = new Fuse(products, {
    keys: ['title'],
  });
  const [str, setStr] = useState('');
  const [matches, setMatch] = useState([]);
  const searh = (a) => {
    setStr(a);
    fuse.search(str);
    const match = fuse.search(str);
    const res = match.map((el) => el.item);
    setMatch(res);
  };
  return (
    <div>
      <TextField sx={inp} onClick={handleOpen} disabled={open} placeholder="Поиск" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField sx={inp} onChange={(e) => searh(e.target.value)} placeholder="Поиск" />
          <Box sx={bx}>
            {
              matches.map((match, i) => <ProductCard key={i} product={match} />)
            }
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Find;
