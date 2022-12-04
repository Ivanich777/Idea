import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function ProductItem():JSX.Element {
  return (
    <div className="product_page__container">
    <h1 className="prod_page__title">{}</h1>
    <img className="prod_page__img" src="" alt="prod_img" />
    </div>
  );
}

export default ProductItem;
