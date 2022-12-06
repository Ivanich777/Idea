import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductCard from '../ProductCard/productCard';

function ProductList():JSX.Element {
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//  dispatch(addAsyncProducts());
//   },
//    []);
  const { products } = useSelector((state: RootState) => state.products);

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
