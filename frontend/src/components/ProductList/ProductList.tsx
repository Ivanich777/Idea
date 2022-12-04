import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import ProductCard from '../ProductCard/productCard';
import { addAsyncProducts } from './productSlice';

function ProductList():JSX.Element {
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//  dispatch(addAsyncProducts());
//   },
//    []);
  const { products } = useSelector((state: RootState) => state.products);


  return (
   <div className="box">
    <ul>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </ul>
   </div>
  );
}

export default ProductList;
