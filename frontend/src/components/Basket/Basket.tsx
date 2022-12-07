import { Avatar, Box, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { actualOrder } from '../ProductCard/basketSlice';
import BasketItem from './BasketItem/BasketItem';


function Basket() {
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const { user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  // wasd123
  useEffect(() => {
    if (user) {
      dispatch(actualOrder(user.id!));
    }
  }, []);
  const { basket } = useSelector((state: RootState) => state.basket);
  // console.log(basket);

  const { products } = useSelector((state: RootState) => state.products);

  const bs = basket.map((item: any) => {
    const product = products.find((el) => el.id === item.idProduct);
    return { ...product, orderCount: item.count };
  })

  console.log(bs);

  return (
    <div>
      <Grid item xs={12} md={6} sx={{ width: '800px', margin: '100px' }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Корзина
        </Typography>
        <Demo>
          <List >
            {/* WARNING!!! AHTUNG! wasd123 */}
            {bs &&
              bs.map((item: any) =>
                (<BasketItem item={item} key={item.id} />)
              )
            }
          </List>

        </Demo>
        <Box>
          <Typography>{`Итоговая сумма заказа: `}</Typography>
        </Box>
      </Grid>
    </div>
  )
}

export default Basket