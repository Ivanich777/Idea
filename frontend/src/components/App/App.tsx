import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import Header from '../Header/Header';
import MainLayout from '../MainLayout/MainLayout';
import Orders from '../Orders/Orders';
import ProductList from '../ProductList/ProductList';
import { addAsyncProducts } from '../ProductList/productSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAsyncProducts());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/main" element={<Header />} />
          <Route path="/profile" element={<Orders />} />
          <Route path="/product" element={<ProductList />} />
        </Route>
        {/* <Route path="/registration" element={<Registration />} /> */}
      </Routes>
    </div>
  );
}

export default App;
