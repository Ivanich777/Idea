import React from 'react';
import { Container, Grid, TextField, Box, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../store';
import { addAsyncProduct } from '../ProductList/productSlice';

export default function ProductAddForm(): JSX.Element {
  const [category, setCategory] = React.useState('');
  const [article, setArticle] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [count, setCount] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleChange = (event: any): void => {
    setCategory(event.target.value as string);
  };

  const dispatch = useAppDispatch();

  const { categories } = useSelector((state: RootState) => state.categories);
  const { products } = useSelector((state: RootState) => state.products);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newProduct = {
      article: data.get('article'),
      title: data.get('title'),
      description: data.get('description'),
      category: categories?.find((item) => item?.title === category)?.id,
      image: data.get('image'),
      count: data.get('count'),
      price: data.get('price'),
    };

    if (products.find((item) => Number(item.article) === Number(newProduct.article))) {
      alert('Артикул не уникален');
    } else {
      dispatch(addAsyncProduct(newProduct));
      setArticle('');
      setTitle('');
      setDescription('');
      setImage('');
      setCount('');
      setPrice('');
    }
  };

  return (
    <Container maxWidth="lg">
      <Box component="form" onSubmit={handleSubmit} sx={{ m: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              id="article"
              name="article"
              label="Артикул"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <TextField
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              name="title"
              label="Название"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <FormControl fullWidth sx={{ mb: 1 }}>
              <InputLabel id="demo-simple-select-label">Категория</InputLabel>
              <Select
                required
                name="category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Категория"
                onChange={handleChange}
              >
                {categories.map((item: any) => (
                  <MenuItem
                    key={item.id}
                    value={item.title}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              required
              value={count}
              onChange={(e) => setCount(e.target.value)}
              id="count"
              name="count"
              label="Количество"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Добавить товар
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="outlined-multiline-flexible"
              name="description"
              label="Описание"
              multiline
              maxRows={6}
              rows={6}
              sx={{ width: '100%', mb: 1 }}
            />
            <TextField
              required
              //type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              id="image"
              name="image"
              label="Картинка"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <TextField
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              name="price"
              label="Цена"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
