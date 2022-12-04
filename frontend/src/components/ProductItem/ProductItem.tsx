import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { height } from '@mui/system';
import { RootState } from '../../store';

function ProductItem():JSX.Element {
  const { productId } = useParams();
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((productItem) => productItem.id === Number(productId));
  return (
    // <Container fixed>
    //   <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    <div className="product_page__container">
    <h1 className="prod_page__title">{product?.title}</h1>
    <img className="prod_page__img" src={product?.image} alt="prod_img" style={{ width: '100px', height: '150px' }} />
    <p>{product?.price}</p>
    <p>{product?.description}</p>
    </div>
    // </Container>
  );
}

export default ProductItem;
