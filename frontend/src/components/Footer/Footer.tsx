import React from 'react';
import { Container, Grid, Box, Link } from '@mui/material';

export default function Footer(): JSX.Element {
  return (
    <Box
      px={{ xs: 2, sm: 2, lg: 2 }}
      py={{ xs: 2, sm: 2, lg: 4 }}
      bgcolor="text.secondary"
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box py={{ xs: 2, sm: 2, lg: 2 }}>КОНТАКТЫ</Box>
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
            <Box py={{ xs: 2, sm: 2, lg: 2 }}>ИНТЕРНЕТ-МАГАЗИН</Box>
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
            <Box>
              {/* <Mapp /> */}
            </Box>
            <Box pt={{ xs: 2, sm: 2, lg: 2 }}>
              <span>Лахта-центр, адрес: Высотная улица, 1, Санкт-Петербург, 197229</span>
            </Box>
            <Box>
              <span>email: lahta-construction@gmail.com</span>
            </Box>
            <Box>
              <span>phone: +7920-660-8423</span>
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-around' }}
              pt={{ xs: 2, sm: 3, lg: 3 }}
            >
              <img width="49" height="14" alt="Мир" src="//res.cloudinary.com/lmru/image/upload/index/mir-logo.svg" />
              <img width="49" height="14" alt="Visa" src="//res.cloudinary.com/lmru/image/upload/index/visa-logo.svg" />
              <img width="28" height="19" alt="Mastercard" src="//res.cloudinary.com/lmru/image/upload/index/mastercard-logo.svg" />
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 2, sm: 2, lg: 2 }} pb={{ xs: 2, sm: 0, lg: 0 }}>
          IdeaProject &reg; {new Date().getFullYear()}
        </Box>
      </Container>

    </Box>
  );
}
