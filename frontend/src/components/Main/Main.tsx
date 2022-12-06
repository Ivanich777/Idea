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
                width: '1300px',
                height: '320px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '25px',
                background: 'url("https://bigfoto.name/uploads/posts/2022-03/1648579364_7-bigfoto-name-p-oboi-estetika-bezhevii-minimalizm-v-intere-12.jpg") no-repeat' }}
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
