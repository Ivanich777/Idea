import { Box, Button, List, ListItem, Modal } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Category } from '../../ProductAddForm/types/state';

function Catalog({ categories }: { categories: Category[] }): JSX.Element {
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '15px',
    boxShadow: 24,
    backgroundColor: '#FAEBD7',
    p: 4,
  };
  const btn = {
    width: 200,
    height: 50,
    background: '#FFE4B5',
    marginRight: 30,
    marginLeft: 30,
    border: 'solid 1px black',
    color: 'black',
    fontSize: '17px',
    fontFamily: 'Georgia, serif',
  };
  return (
    <div>
      <Button
        sx={btn}
        onClick={() => setOpen(true)}
      >Каталог
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <List>
            {
              categories.map((el) => (
                <ListItem key={el.id}>
                  <NavLink to={`/categories/${el.title}`} style={{ textDecoration: 'none', color: 'var(--color-active)', fontFamily: 'Comfortaa, cursive', fontSize: '20px' }}>
                    {el.title}
                  </NavLink>
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Modal>
    </div>
  );
}

export default Catalog;
