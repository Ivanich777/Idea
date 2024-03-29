import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { Button, CardActions, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { RootState, useAppDispatch } from '../../store';
import AuthModal from '../ProductCard/authModal/AuthModal';
import { addNewOrder } from '../ProductCard/basketSlice';
import 'swiper/css';
import 'swiper/css/navigation';

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
            direction="vertical"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              product?.images.map((img) => (
                <SwiperSlide>
                  <img style={{ width: '300px', height: '350px', borderRadius: '15px' }} src={img.path} alt={img.path} />
                </SwiperSlide>
              )
              )
            }
          </Swiper>
        </Box>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          {!user && <AuthModal />}
          {user && !user.admin &&
            (
              <Button
                size="small"
                color="primary"
                style={{ color: 'black', textAlign: 'center', margin: 'auto', backgroundColor: '#D2B48C', borderRadius: '10px', padding: '12px', fontFamily: 'Georgia, serif', fontSize: '18px' }}
                onClick={handleClick}
              >
                В корзину
              </Button>
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
        {product?.features.length! > 0 && product?.features.map((item: any) => (
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ marginRight: '5px', fontSize: '20px', fontFamily: 'Georgia, serif', letterSpacing: '1.2px', marginLeft: '10px' }}>{item.title}:</Box>
            <Box sx={{ fontSize: '20px', fontFamily: 'Georgia, serif', letterSpacing: '1.2px', marginLeft: '10px', mb: '1' }}>{item.description}</Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
}

export default ProductItem;
