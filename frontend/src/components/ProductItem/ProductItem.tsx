import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { Button, CardActions, Typography } from '@mui/material';
import { RootState, useAppDispatch } from '../../store';
import AuthModal from '../ProductCard/authModal/AuthModal';
import { addNewOrder } from '../ProductCard/basketSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";



import {Pagination} from "swiper";

function ProductItem(): JSX.Element {
  const { productId } = useParams();
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((productItem) => productItem.id === Number(productId));
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.users);
  const handleClick = (): void => {
    const obj = { idProduct: product?.id, userId: user?.id };
    dispatch(addNewOrder(obj));
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>

        <Box sx={{ width: '300px', height: '350px' }}>
          <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
          >
            {
              product?.images.map((img) =>
                <SwiperSlide >
                  <img style={{width:'300px', height:'350px'}} src={img.path} />
                </SwiperSlide>
              )
            }
          </Swiper>
        </Box>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          {user ? (
            <Button
              size="small"
              color="primary"
              style={{ color: 'black', textAlign: 'center', margin: 'auto' }}
              onClick={handleClick}
            >
              В корзину
            </Button>
          ) : (
            <AuthModal />
          )}
        </CardActions>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px', padding: '20px' }}>
        <Typography
          variant="h5"
          color="black"
          margin="10px"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '28px',
            letterSpacing: '1.6px',
            wordSpacing: '0.8px',
            color: '#000000',
            fontWeight: 'normal',
            textDecoration: 'none',
            fontStyle: 'normal',
            fontVariant: 'small-caps',
            textTransform: 'none',
          }}
        >{product?.title}
        </Typography>
        <Typography
          margin="10px"
          style={{
            fontSize: '20px',
            fontFamily: 'Georgia, serif',
            letterSpacing: '1.2px',
          }}
        >{`art.${product?.article}`}
        </Typography>
        <Typography
          margin="10px"
          style={{
            fontSize: '25px',
            fontFamily: 'Georgia, serif',

          }}
        >{product?.price}₽
        </Typography>
        <Typography
          margin="10px"
          style={{
            fontSize: '20px',
            fontFamily: 'Georgia, serif',
          }}
        >{product?.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductItem;
