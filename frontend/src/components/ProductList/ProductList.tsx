import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductCard from '../ProductCard/productCard';
// import { addAsyncProducts } from './productSlice';

function ProductList(): JSX.Element {
  const { products } = useSelector((state: RootState) => state.products);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(addAsyncProducts());
  // },[]);
  return (
    <div className="box">
      <ul style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '60px' }}>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
