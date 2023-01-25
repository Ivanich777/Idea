import { Box, TextField, Modal } from '@mui/material';
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import './style.css';
import ProductCard from '../../ProductCard/productCard';
import { Product } from '../../ProductList/types/state';

function Find({ products }: { products: Product[] }): JSX.Element {
  const [open, setOpen] = useState(false);
  const [matches, setMatch] = useState<Product[]>([]);
  const [str, setStr] = useState('');

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
    overflow: 'auto',
  };
  const bx = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  const inp = {
    width: 400,
    height: 55,
    background: 'white',
  };
  const fuse = new Fuse(products, {
    keys: ['title'],
  });

  const searh = (a: string): void => {
    setStr(a);
    fuse.search(str);
    const match = fuse.search(str);
    const res = match.map((el) => el.item);
    const prod = res.filter((el, i) => i <= 4);
    setMatch(prod);
  };

  return (
    <div>
      <TextField
        sx={inp}
        onClick={() => setOpen(true)}
        disabled={open}
        placeholder="Поиск"
        style={{ borderRadius: '10px' }}
        color="warning"
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="container"
          sx={style}
          style={{ position: 'fixed', left: '50%', top: '50%', width: '1200px', height: '600px', backgroundColor: '#FFFAF0', borderRadius: '30px' }}
        >
          <TextField
            sx={inp}
            id="find"
            onChange={(e) => searh(e.target.value)}
            placeholder="Поиск"
            color="warning"
            style={{ display: 'flex', flexDirection: 'column', paddingLeft: '400px', backgroundColor: '#FFFAF0' }}
          />
          <Box
            sx={bx}
            style={{ position: 'absolute', marginTop: '80px', backgroundColor: '#FFFAF0' }}
          >
            {
              matches.map((match) => <ProductCard key={match.article} product={match} />)
            }

          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Find;
