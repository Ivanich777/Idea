import React, { useEffect } from 'react';
import { Container, Grid, TextField, Box, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { addAsyncCategories } from './categorySlice';
import { useAppDispatch, RootState } from '../../store';

export default function ProductAddForm(): JSX.Element {
  const [category, setCategory] = React.useState('');

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAsyncCategories());
  }, []);


  const handleChange = (event: SelectChangeEvent<string>): void => {
    setCategory(event.target.value as string);
  };

  const { categories } = useSelector((state: RootState) => state.categories);
  console.log(categories);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      article: data.get('article'),
      title: data.get('title'),
      description: data.get('description'),
      // category: categories?.find((item) => item.title === category).id,
      category: data.get('category'),
    });
  };

  return (
    <Container maxWidth="lg">
      <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="article"
              name="article"
              label="Артикул"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <TextField
              required
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
              id="outlined-multiline-flexible"
              name="description"
              label="Описание"
              multiline
              maxRows={6}
              rows={6}
              sx={{ width: '100%', mb: 1 }}
            // value={value}
            // onChange={handleChange}
            />
            <TextField
              required
              id="image"
              name="image"
              label="Картинка"
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
