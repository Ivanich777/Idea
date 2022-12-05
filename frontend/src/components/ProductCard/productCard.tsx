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
    <Card sx={{ maxWidth: 170 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100"
          image={product?.Images[0].path}
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
        <Button size="small" color="primary">
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
