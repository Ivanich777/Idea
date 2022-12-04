import Registration from "../Registration/Registration";

import Login from "../Login/Login";

import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import Main from '../Main/Main';
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
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Orders />} />
          <Route path="/product" element={<ProductList />} />
        </Route>
       <Route path="/auth/reg" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
