import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { Product } from '../ProductList/types/state';

function ProductCard({ product }: { product:Product
 }):JSX.Element {
    const navigate = useNavigate();

    function handleNav():void {
      navigate(`/product/${product.id}`);
    }

  return (
    <Card sx={{ width: 250, height: 350, margin: '15px', borderRadius: '20px', backgroundColor: 'AntiqueWhite' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          image={product?.images[0].path}
          alt="product"
          style={{ backgroundColor: 'AntiqueWhite', minHeight: '220px', maxHeight: '220px' }}
        />
        <CardContent onClick={handleNav}>
          <Typography
            variant="body2"
            color="text.secondary"
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
          >
           {product?.title}
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
            {product?.article}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          style={{ color: 'black', textAlign: 'center', margin: 'auto' }}
        >
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
