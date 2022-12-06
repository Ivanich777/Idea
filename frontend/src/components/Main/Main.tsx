import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Auto from './Auto/Auto';
import Catalog from './Catalog/Catalog';
import Find from './Find/Find';
import Scroll from './Scroll/Scroll';

function Main():JSX.Element {
  const { products } = useSelector((state:any) => state.products);
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                <Catalog />
                <Find products={products} />
            </Box>
            <Box style={{ width: '1500px', height: '350px', margin: '15px' }}>
                <Scroll />
            </Box>
            <Box style={{ width: '800px', height: '400px', margin: '15px' }}>
                <Auto />
            </Box>

        </Box>
    );
}

export default Main;
