import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Auto from './Auto/Auto';
import Catalog from './Catalog/Catalog';
import Find from './Find/Find';
import Scroll from './Scroll/Scroll';

function Main():JSX.Element {
    const arr = [
        {
          title: 'Steve Jobs',
          article: '12331123123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'Zero to One',
          article: '1233112dsfsd3123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'The Pragmatic Programmer',
          article: '12dsa331123123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'The Unicorn Project',
          article: '123311fasfdasfsaf23123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'The Passionate Programmer',
          article: '123311sdfsds3123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'Hatching Twitter',
          article: '12331dfsdfsfs123123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'How Google Works',
          article: '1asdffsa2331123123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'Elon Musk',
          article: '1233dsfsdfsdfdsfs1123123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'Six Easy Pieces',
          article: '12331dsadsadasd23123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        },
        {
          title: 'Sapiens',
          article: '1asdsadddd2331123123',
          image: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
        }
      ];
      
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                <Catalog />
                <Find arr={arr} />
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
