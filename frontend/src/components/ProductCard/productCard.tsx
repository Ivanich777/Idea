import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { Product } from '../ProductList/types/state';
import { delAsyncProduct } from '../ProductList/productSlice';
import EditModal from './editModal/editModal';
import AuthModal from './authModal/AuthModal';
import { addNewOrder } from './basketSlice';

function ProductCard({ product }: {
  product: Product
}): JSX.Element {
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.users);

  const handleNav = (): void => {
    navigate(`/product/${product.id}`);
  };

  const dispatch = useAppDispatch();
  const handleDel = (): void => {
    dispatch(delAsyncProduct(product.id!));
  };
  const handleClick = (): void => {
    const obj = { idProduct: product.id, userId: user?.id };
    dispatch(addNewOrder(obj));
  };

  return (
    <Card sx={{ width: 250, height: 400, margin: '15px', borderRadius: '20px', backgroundColor: 'AntiqueWhite', boxShadow: '5px 2px 5px 5px rgba(109, 80, 23, 0.43) ' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          onClick={handleNav}
          width="100"
          image={product?.images[0] ? product?.images[0].path : '123'}
          alt="product"
          style={{
            backgroundColor: 'AntiqueWhite',
            minHeight: '220px',
            maxHeight: '220px'
          }}
        />
        <CardContent onClick={handleNav}>
          <Typography
            gutterBottom
            variant="h6"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '20px',
              letterSpacing: '1.6px',
              wordSpacing: '0.8px',
              color: '#000000',
              fontWeight: 'normal',
              textDecoration: 'none',
              fontStyle: 'normal',
              fontVariant: 'small-caps',
              textTransform: 'none',
            }}
            component="div"
          >
            {product?.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              fontSize: '12px',
              letterSpacing: '1.7px'
            }}
          >
            {`art.${product?.article}`}

          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              fontSize: '16px',
              letterSpacing: '1.7px',
            }}
          >
            {`${product?.price}₽`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          user?.admin ? (
            <>
              {product.isDeletable && (
                <Button
                  onClick={handleDel}
                  size="small"
                  color="primary"
                  style={{ color: 'black', textAlign: 'center', margin: 'auto', backgroundColor: '#FAEBD7' }}
                >
                  Удалить
                </Button>
              )}

              <EditModal id={product.id!} />

            </>
          ) : (
            <div>
              {user ? (
                <Button
                  size="small"
                  color="primary"
                  style={{ color: 'black', textAlign: 'center', margin: 'auto', backgroundColor: '#FAEBD7', borderRadius: '10px' }}
                  onClick={handleClick}
                >
                  В корзину
                </Button>
              ) : (
                <AuthModal />
              )}

            </div>
          )
        }
      </CardActions>
    </Card>
  );
}

export default ProductCard;
