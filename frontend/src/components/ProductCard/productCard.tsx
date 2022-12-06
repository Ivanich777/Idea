import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { Product } from '../ProductList/types/state';
import { delAsyncProduct } from '../ProductList/productSlice';
import EditModal from './editModal/editModal';

function ProductCard({ product }: {
  product: Product
}): JSX.Element {
  const navigate = useNavigate();

 // const { user } = useSelector((state:RootState) => state.users)
 const user = {
  id: 1,
  admin: true,
};

  const handleNav = (): void => {
    navigate(`/product/${product.id}`);
  };

  const dispatch = useAppDispatch();
  const handleDel = ():void => {
    dispatch(delAsyncProduct(product.id!));
  };

  return (
    <Card sx={{ width: 250, height: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100"
          image={product?.images[0].path}
          alt="product"
        />
        <CardContent onClick={handleNav}>
          <Typography gutterBottom variant="h6" component="div">
            {product?.article}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          user.admin ? (
            <>
              <Button onClick={handleDel} size="small" color="primary">
                Удалить
              </Button>
              <EditModal id={product.id!} />
            </>
          ) : (
            <Button size="small" color="primary">
              В корзину
            </Button>
          )
        }
      </CardActions>
    </Card>
  );
}

export default ProductCard;
