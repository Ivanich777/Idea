import { Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Modal, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { actualOrder, makeOrder } from '../ProductCard/basketSlice';
import BasketItem from './BasketItem/BasketItem';
import { addAsyncOrders } from '../Orders/orderSlice';

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

function Basket() {
  const [open, setOpen] = React.useState(false);
  const [numberOrder, setNumberOrder] = React.useState(0);

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const { user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      dispatch(actualOrder(user.id!));
    }
    if (basket.length > 0) {
      setNumberOrder(basket[0].idOrder);
    }
  }, []);
  const { basket } = useSelector((state: RootState) => state.basket);

  const { products } = useSelector((state: RootState) => state.products);

  const bs = basket.map((item: any, index: number) => {
    const product = products.find((el) => el.id === item.idProduct);
    const id: number = basket[index]?.id!;
    return { ...product, orderCount: item.count, idOrderItem: id };
  });

  function sum() {
    const orderPrice = bs.map((el: any) => el.orderCount * el.price);
    return orderPrice.reduce((sum, el) => sum + el, 0);
  }

  const handleClickMakeOrder = () => {
    const numberOfOrder: number = Number(basket[0]?.idOrder);
    dispatch(makeOrder(numberOfOrder));
    setTimeout(() => dispatch(addAsyncOrders()), 0);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Grid item xs={12} md={6} sx={{ width: '800px' }}>
        <Typography
          sx={{ mt: 4, mb: 2 }}
          variant="h6"
          component="div"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '40px',
            letterSpacing: '4.6px',
            color: '#000000',
            fontWeight: 'normal',
            textDecoration: 'none',
            fontStyle: 'normal',
            paddingTop: '10px',
            fontVariant: 'small-caps',
            textAlign: 'center'
          }}
        >
          Корзина
        </Typography>
        <Demo style={{ borderRadius: '20px', backgroundColor: 'AntiqueWhite', width: '800px' }}>
          {basket.length > 0 ? (
            <List>
              {bs &&
                bs.map((item: any) =>
                  (<BasketItem item={item} key={item.id} />)
                )}
            </List>
          ) : (
            <Typography sx={{
              fontFamily: 'Georgia, serif',
              fontSize: '20px',
              letterSpacing: '2.6px',
              color: '#000000',
              textAlign: 'center'
            }}
            >Ваша корзина пуста
            </Typography>
          )}
        </Demo>
        {basket.length > 0 && (
          <Box>
            <Typography
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '2.0px', fontSize: '18px', marginTop: '10px', marginBottom: '30px' }}
            >
              {`Итоговая сумма заказа: ${sum()}₽`}
              <Button
                onClick={handleClickMakeOrder}
                style={{ color: 'black', marginLeft: '350px', fontFamily: 'Georgia, serif', fontSize: '15px', letterSpacing: '1.0px', backgroundColor: '#D2B48C', borderRadius: '10px' }}
              >Оформить заказ
              </Button>
            </Typography>
          </Box>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ваш заказ оформлен!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`Заказ №${numberOrder}`}
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}

export default Basket;
