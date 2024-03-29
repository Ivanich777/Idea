import React from 'react';
import { Container, Grid, TextField, Box, Button, FormControl, InputLabel, Select, MenuItem, Modal, Typography, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../store';
import { editAsyncProduct, addAsyncProduct, addAsyncImages } from '../ProductList/productSlice';
import { Feature } from '../ProductList/types/state';

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
  features: Feature[],
  categoryId: number | any,
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
  const [modalMsg, setModalMsg] = React.useState('');
  const [rows, setRows] = React.useState<Feature[]>([{ id: 1, title: 'Характеристика', description: 'Описание' }]);

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
      categoryId: 0,
      images: '',
      count: '',
      price: '',
      features: [],
    };
    if (!id) {
      newProduct = {
        article: data.get('article'),
        title: data.get('title'),
        description: data.get('description'),
        categoryId: categories?.find((item) => item?.title === category)?.id,
        images: images.map((img) => ({ path: `http://localhost:4000${img}` })),
        count: data.get('count'),
        price: data.get('price'),
        features: rows,
        category,
      };
    } else {
      newProduct = {
        id,
        article: data.get('article'),
        title: data.get('title'),
        description: data.get('description'),
        categoryId: categories?.find((item) => item?.title === category)?.id,
        images: images.map((img) => ({ path: `http://localhost:4000${img}` })),
        count: data.get('count'),
        price: data.get('price'),
        features: rows,
        category,
      };
    }

    if (products.find((item) => Number(item.article) === Number(newProduct.article))) {
      setModalMsg('Артикул не уникален');
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
      setModalMsg('Товар успешно добавлен');
      handleOpen();
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

  const handleAddFeature = (): void => {
    setRows([...rows, { id: rows.length, title: '', description: '' }]);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalMsg}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Товар с таким артикулом уже существует */}
          </Typography>
        </Box>
      </Modal>
      <Box component="form" onSubmit={handleSubmit} sx={{ m: 1 }}>
        <Grid container spacing={5} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
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

            <TextField
              value={image}
              name="images"
              type="file"
              id="file"
              onChange={handleChangleFiles}
              inputProps={{ multiple: true }}
              required
              style={{ paddingTop: '15px', paddingBottom: '15px' }}
              className="file"
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
  );
}
