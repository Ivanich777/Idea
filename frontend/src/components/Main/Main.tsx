import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Auto from './Auto/Auto';
import Catalog from './Catalog/Catalog';
import Find from './Find/Find';
import Scroll from './Scroll/Scroll';

function Main():JSX.Element {
  const { products } = useSelector((state:RootState) => state.products);
  const { categories } = useSelector((state:RootState) => state.categories);
  
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            }}
        >
            <Box style={{
                width: '1250px',
                height: '320px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '30px',
                background: 'url("./kar.jpeg") no-repeat',
                borderRadius:'10px' }}
            >
                <Catalog categories={categories} />
                <Find products={products} />
            </Box>
            <Box style={{
                width: '1340px',
                height: '420px',
                margin: '75px' }}
            >
                <Scroll products={products} />
            </Box>
            <Box style={{
                width: '1340px',
                height: '320px',
                marginBottom: '45px' }}
            >
                <Auto />
            </Box>

        </Box>
    );
}

export default Main;
