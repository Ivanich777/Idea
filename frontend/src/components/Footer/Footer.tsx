import React from 'react';
import { Container, Grid, Box, Link } from '@mui/material';

export default function Footer(): JSX.Element {
  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="text.secondary"
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>КОНТАКТЫ</Box>
            <Box>
              <Link href="/" color="inherit">
                Наша компания
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Наши вакансии
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Помогите нам стать лучше
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Корпоративным клиентам
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>ИНТЕРНЕТ-МАГАЗИН</Box>
            <Box>
              <Link href="/" color="inherit">
                Каталог
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Как заказать
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Как оплатить
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Правила продажи
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Вопросы и ответы
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <span>Мы принимаем:</span>
              </Box>
              <img width="49" height="14" alt="Мир" src="//res.cloudinary.com/lmru/image/upload/index/mir-logo.svg" />
              <img width="49" height="14" alt="Visa" src="//res.cloudinary.com/lmru/image/upload/index/visa-logo.svg" />
              <img width="28" height="19" alt="Mastercard" src="//res.cloudinary.com/lmru/image/upload/index/mastercard-logo.svg" />
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          IdeaProject &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
}
