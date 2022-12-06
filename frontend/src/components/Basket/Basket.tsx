import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { actualOrder } from '../ProductCard/basketSlice';



function Basket() {
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const { user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actualOrder(user.id!));
  }, []);
  const {basket} = useSelector((state:RootState) => state.basket);
  const {products} = useSelector((state:RootState) => state.products)
  const bs = basket.map((item)=>{
    const product = products.find((el) => el.id === item.idProduct)
    return product
  })
  
  return (
    <div>
      <Grid item xs={12} md={6} sx={{ width: '800px', margin: '100px' }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Корзина
        </Typography>
        <Demo>
          <List >
            {
              bs.map((item) =>
              <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              {item?.title} {' '} {item?.price} {' рублей'}
            </ListItem>
              )
            }
          </List>
        </Demo>
      </Grid>
    </div>
  )
}

export default Basket