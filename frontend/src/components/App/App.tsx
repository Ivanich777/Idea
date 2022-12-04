import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Orders from '../Orders/Orders';
import ProductItem from '../ProductItem/ProductItem';
import ProductList from '../ProductList/ProductList';
import { addAsyncProducts } from '../ProductList/productSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
 dispatch(addAsyncProducts());
  },
   []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header /><Footer /></>}>
          <Route path="/main" element={<Header />} />
          <Route path="/profile" element={<Orders />} />
          {/* <Route path="/main" element={<Footer />} /> */}
          <Route path="/catalog" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
