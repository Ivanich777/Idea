import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function ProductCard({product}):JSX.Element {
    //const { products } = useSelector((state:RootState) => state.products);

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="product"
        />
        <CardContent>
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
