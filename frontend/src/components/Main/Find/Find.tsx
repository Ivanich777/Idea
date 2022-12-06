import { Box, TextField, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import ProductCard from '../../ProductCard/productCard';
import { Product } from '../../ProductList/types/state';

function Find({ products }:{products:Product[]}):JSX.Element {
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
      const fuse = new Fuse(products, {
        keys: ['title'],
      });
      const [str, setStr] = useState('');
      const [matches, setMatch] = useState<Product[]>([]);
      const searh = (a:string):void => {
        setStr(a);
        fuse.search(str);
        const match = fuse.search(str); 
        const res = match.map((el)=> el.item)
        setMatch(res)
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
                <TextField onChange={(e) => searh(e.target.value)} placeholder="Поиск" />
                <ul>
                    {
                        matches.map((match, i) => <ProductCard key={i} product={match} />)
                    }
                </ul>
                </Box>
            </Modal>
        </div>
    );
}

export default Find;
