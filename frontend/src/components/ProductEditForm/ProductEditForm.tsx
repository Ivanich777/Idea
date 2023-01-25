import React from 'react';
import { Container, Grid, TextField, Box, Button, IconButton, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../store';
import { editAsyncProduct, addAsyncProduct } from '../ProductList/productSlice';
import { Feature } from '../ProductList/types/state';

interface INewProduct {
  id?: number,
  article: string | any,
  title: string | any,
  description: string | any,
  category: string | any,
  count: string | any,
  price: string | any,
  features: Feature[],
  categoryId: number | any,
}

interface IProductEditForm {
  id: number,
  closeFunc: Function,
}
export default function ProductEditForm({ id, closeFunc }: IProductEditForm): JSX.Element {
  const { products } = useSelector((state: RootState) => state.products);
  const { categories } = useSelector((state: RootState) => state.categories);
  const product = products.find((productItem) => productItem.id === id);

  const [category, setCategory] = React.useState(product?.category);
  const [article, setArticle] = React.useState(String(product?.article));
  const [title, setTitle] = React.useState(product?.title);
  const [description, setDescription] = React.useState(product?.description);
  const [count, setCount] = React.useState(String(product?.count));
  const [price, setPrice] = React.useState(String(product?.price));
  const [rows, setRows] = React.useState<Feature[]>(product?.features!);

  const handleChange = (event: any): void => {
    setCategory(event.target.value as string);
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let newProduct: INewProduct = {
      article: '',
      title: '',
      description: '',
      category: '',
      categoryId: '0',
      count: '',
      price: '',
      features: [],
    };
    if (!id) {
      newProduct = {
        article: data.get('article'),
        title: data.get('title'),
        description: data.get('description'),
        category,
        categoryId: categories?.find((item) => item?.title === category)?.id,
        count: data.get('count'),
        price: data.get('price'),
        features: rows,
      };
    } else {
      newProduct = {
        id,
        article: data.get('article'),
        title: data.get('title'),
        description: data.get('description'),
        category,
        categoryId: categories?.find((item) => item?.title === category)?.id,
        count: data.get('count'),
        price: data.get('price'),
        features: rows,
      };
    }

    if (!id) {
      dispatch(addAsyncProduct(newProduct));
      setArticle('');
      setTitle('');
      setDescription('');
      setCount('');
      setPrice('');
      closeFunc();
    } else {
      dispatch(editAsyncProduct(newProduct));
      setArticle('');
      setTitle('');
      setDescription('');
      setCount('');
      setPrice('');
      closeFunc();
    }
  };

  const handleAddFeature = (): void => {
    setRows([...rows, { id: rows.length, title: '', description: '' }]);
  };

  return (
    <Container maxWidth="lg">
      <Box component="form" onSubmit={handleSubmit} sx={{ m: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography>Характеристики:</Typography>
              <IconButton onClick={handleAddFeature}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box>
              {rows.map((row, i) => (
                <Box key={row.id} sx={{ display: 'flex' }}>
                  <TextField required type="text" value={row.title} onChange={(e) => setRows(rows.map((rowItem, idx) => i === idx ? { ...rowItem, title: e.target.value } : rowItem))} />
                  <TextField required type="text" value={row.description} onChange={(e) => setRows(rows.map((rowItem, idx) => i === idx ? { ...rowItem, description: e.target.value } : rowItem))} />
                  <IconButton color="inherit" onClick={() => setRows(rows.filter((item, idx) => i !== idx))}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="outlined-multiline-flexible"
              name="description"
              label="Описание"
              multiline
              rows={6}
              sx={{ width: '100%', mb: 1 }}
            />
            {/* <input
              value={image}
              name="images"
              type="file"
              onChange={handleChangleFiles}
              multiple
              required
              style={{paddingTop:'15px', paddingBottom:'15px'}}
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              style={{ backgroundColor: 'black' }}
            >
              {id ? ('Изменить') : ('Добавить товар')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
