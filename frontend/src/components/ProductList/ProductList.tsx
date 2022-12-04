import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ProductCard from '../ProductCard/productCard';

function ProductList():JSX.Element {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  return (
   <div className="box">
    <ul>
          {products.map((product) => (
            <ProductCard key={product.id} product={product.title} />
          ))}
    </ul>
   </div>
  );
}

export default ProductList;
