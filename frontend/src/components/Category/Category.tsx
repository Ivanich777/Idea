import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';
import ProductCard from '../ProductCard/productCard';

function Category():JSX.Element {
  const { categoryId } = useParams();
  const { products } = useSelector((state: RootState) => state.products);
  const { categories } = useSelector((state:RootState) => state.categories);
  const catObj = categories.find((el) => el.title === categoryId);
  const list = products.filter((el) => el.idCategory === catObj?.id)
  
  return (
   <div className="box">
    <h1 style={{textAlign:'center'}}>{categoryId}</h1>
    <ul style={{ display: 'flex', flexDirection: 'raw' }}>
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </ul>
   </div>
  );
}

export default Category;
