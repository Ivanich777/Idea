import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import Auto from './Auto/Auto';
import Catalog from './Catalog/Catalog';
import Find from './Find/Find';
import Scroll from './Scroll/Scroll';

function Main():JSX.Element {
    return (
        <Box>
            <Box>
                <Catalog />
                <Find />
            </Box>
            <Box>
                <Scroll />
            </Box>
            <Box style={{ width: '800px', height: '400px' }}>
                <Auto />
            </Box>

        </Box>
    );
}

export default Main;
