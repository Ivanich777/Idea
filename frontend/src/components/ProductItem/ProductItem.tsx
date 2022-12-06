import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { Button, CardActions, Typography } from '@mui/material';
import { RootState } from '../../store';

function ProductItem():JSX.Element {
  const { productId } = useParams();
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((productItem) => productItem.id === Number(productId));
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>

   <img src={product?.images[0].path} alt="prod_img" style={{ width: '300px', height: '350px', borderRadius: '20px' }} />
   <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          size="large"
          color="primary"
          style={{ color: 'black', border: '2px solid black', borderRadius: '10px' }}
        >
          В корзину
        </Button>
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
