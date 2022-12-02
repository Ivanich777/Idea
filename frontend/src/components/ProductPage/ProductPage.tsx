import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function ProductPage() {
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
            Артикуль товара
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Название и что то  о товаре
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

export default ProductPage