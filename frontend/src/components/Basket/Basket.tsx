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
    <div
    style={{display:'flex', justifyContent:'center'}}
    >
      <Grid item xs={12} md={6} sx={{ width: '800px'}}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div"
        style={{fontFamily:'Georgia, serif',fontSize:'40px', letterSpacing:'4.6px',
        color:'#000000', fontWeight:'normal',textDecoration:'none', fontStyle:'normal',fontVariant:'small-caps', textAlign:'center'}}>
          Корзина
        </Typography>
        <Demo style={{borderRadius:'20px', backgroundColor:'AntiqueWhite', width:'800px'}}>
          <List>
            {/* WARNING!!! AHTUNG! wasd123 */}
            {bs &&
              bs.map((item: any) =>
                (<BasketItem item={item} key={item.id} />)
              )
            }
          </List>

        </Demo>
        <Box>
          <Typography
          style={{fontFamily:'Georgia, serif', letterSpacing:'2.0px', marginTop:'10px',marginBottom:'30px'}}>{`Итоговая сумма заказа: `}</Typography>
        </Box>
      </Grid>
    </div>
  )
}

export default Basket