import React from 'react';
import { Box } from '@mui/material';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function MainLayout(): JSX.Element {
  // const isAuth = useSelector(state => state.isAuth)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }} />
      <Footer />
    </Box>
  );
}

export default MainLayout;
