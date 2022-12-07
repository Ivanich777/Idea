import { Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { actualOrder, makeOrder } from '../ProductCard/basketSlice';
import BasketItem from './BasketItem/BasketItem';
import { addAsyncOrders } from '../Orders/orderSlice';


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
  
  const { products } = useSelector((state: RootState) => state.products);
  
  const bs = basket.map((item: any, index:number) => {
    const product = products.find((el) => el.id === item.idProduct);
    const id: number = basket[index]?.id!;
    return { ...product, orderCount: item.count, idOrderItem: id };
  })
  // console.log(bs);


  function sum () {
    const orderPrice = bs.map((el: any) => el.orderCount * el.price);
    return orderPrice.reduce((sum, el) => sum + el, 0);
  }

  const handleClickMakeOrder = () => {
    const numberOfOrder:number = Number(basket[0]?.idOrder);   
    dispatch(makeOrder(numberOfOrder));
    dispatch(addAsyncOrders());
  }

  return (
    <div
    style={{display:'flex', justifyContent:'center'}}
    >
      <Grid item xs={12} md={6} sx={{ width: '800px'}}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div"
        style={{fontFamily:'Georgia, serif',fontSize:'40px', letterSpacing:'4.6px',
        color:'#000000', fontWeight:'normal',textDecoration:'none', fontStyle:'normal',paddingTop:'10px', fontVariant:'small-caps', textAlign:'center'}}>
          Корзина
        </Typography>
        <Demo style={{borderRadius:'20px', backgroundColor:'AntiqueWhite', width:'800px'}}>
          <List>
            {/* WARNING!!! AHTUNG! wasd123 */}
            {bs &&
              bs.map((item: any) =>
                (<BasketItem item={item} key={item.id} />)
              )}
          </List>

        </Demo>
        <Box>
          <Typography
          style={{fontFamily:'Georgia, serif', letterSpacing:'2.0px', marginTop:'10px',marginBottom:'30px'}}>
          {`Итоговая сумма заказа: ${sum()}₽`}
          <Button onClick={handleClickMakeOrder}
          style={{color:'black', marginLeft:'350px',fontFamily:'Georgia, serif',letterSpacing:'1.0px'}}>Оформить заказ</Button>
          </Typography>
        </Box>
      </Grid>
    </div>
  )
}

export default Basket