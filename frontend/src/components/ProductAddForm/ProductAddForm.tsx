import React, { useRef } from 'react';
import { Container, Grid, TextField, Box, Button, FormControl, InputLabel, Select, MenuItem, Modal, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../store';
import { editAsyncProduct, addAsyncProduct, addAsyncImages } from '../ProductList/productSlice';


const styleModal = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface INewProduct {
  id?: number,
  article: string | any,
  title: string | any,
  description: string | any,
  category: string | any,
  images: string | any,
  count: string | any,
  price: string | any,
}

export default function ProductAddForm({ id }: { id: number }): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [article, setArticle] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [count, setCount] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const handleChange = (event: any): void => {
    setCategory(event.target.value as string);
  };

  const dispatch = useAppDispatch();

  const { categories } = useSelector((state: RootState) => state.categories);
  const { products, images } = useSelector((state: RootState) => state.products);

  const handleChangleFiles = (event: any): void => {
    setImage(event.target.value);
    const pictures = [...event.target.files];
    const newFile = new FormData();
    pictures.forEach((img) => {
      newFile.append('homesImg', img);
    });
    dispatch(addAsyncImages(newFile));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let newProduct: INewProduct = {
      article: '',
      title: '',
      description: '',
      category: '',
      images: '',
      count: '',
      price: '',
    };
    if (!id) {
      newProduct = {
        article: data.get('article'),
        title: data.get('title'),
        description: data.get('description'),
        category: categories?.find((item) => item?.title === category)?.id,
        images: images.map((img) => ({ path: `http://localhost:4000${img}` })),
        count: data.get('count'),
        price: data.get('price'),
      };
    } else {
      newProduct = {
        id,
        article: data.get('article'),
        title: data.get('title'),
        description: data.get('description'),
        category: categories?.find((item) => item?.title === category)?.id,
        images: images.map((img) => ({ path: `http://localhost:4000${img}` })),
        count: data.get('count'),
        price: data.get('price'),
      };
    }

    if (products.find((item) => Number(item.article) === Number(newProduct.article))) {
      handleOpen();
      setImage('');
    } else if (!id) {
      dispatch(addAsyncProduct(newProduct));
      setArticle('');
      setTitle('');
      setDescription('');
      setImage('');
      setCount('');
      setPrice('');
    } else {
      dispatch(editAsyncProduct(newProduct));
      setArticle('');
      setTitle('');
      setDescription('');
      setImage('');
      setCount('');
      setPrice('');
    }
  };

  return (
    <>
      {/* <Typography sx={{ fontSize: '1rem', ml: 8, mt: 2 }}>Добавление товара: </Typography> */}
      <Container maxWidth='xl' sx={{ mt: 3}}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Артикул не уникален
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Товар с таким артикулом уже существует
            </Typography>
          </Box>
        </Modal>
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 1 }}>
          <Grid container spacing={5} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
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
            <Grid item xs={12} sm={6}>
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
              <TextField
                value={image}
                name="images"
                type="file"
                onChange={handleChangleFiles}
                inputProps={{ multiple: true }}
                required
                style={{ paddingTop: '15px', paddingBottom: '15px' }}
              />
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
    </>
  );
}
