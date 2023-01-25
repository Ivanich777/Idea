import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductCard from '../ProductCard/productCard';
import { Product } from './types/state';

function ProductList(): JSX.Element {
  const { products } = useSelector((state: RootState) => state.products);
  const { user } = useSelector((state: RootState) => state.users);
  const [fProducts, setFProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFProducts(products);
  }, [products]);

  const handleSearch = (event: any): void => {
    setFProducts(products.filter((item) => String(item.article).includes(event.target.value)));
    setSearch(event.target.value);
  };

  return (
    <div className="box">
      {
        user?.admin &&
        (
          <Box sx={{ display: 'flex', justifyContent: 'left', mt: 3 }}>
            <p style={{ fontSize: '1rem', marginLeft: '100px', textDecoration: 'underline' }}>Поиск товара по артикулу: </p>
            <TextField
              label="Введите артикул"
              value={search}
              onChange={handleSearch}
              sx={{ ml: 10, width: '50%' }}
            />
          </Box>
        )
      }
      <ul style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '10px' }}>
        {fProducts.length > 0 && fProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {!user?.admin && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
