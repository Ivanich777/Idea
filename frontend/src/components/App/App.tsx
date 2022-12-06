import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Root } from 'react-dom/client';
import Registration from '../Auth/Registration/Registration';

import Login from '../Auth/Login/Login';

import { RootState, useAppDispatch } from '../../store';

import Header from '../Header/Header';
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin';

import Main from '../Main/Main';

import MainLayout from '../MainLayout/MainLayout';
import Orders from '../Orders/Orders';
import ProductItem from '../ProductItem/ProductItem';
import ProductList from '../ProductList/ProductList';
import { addAsyncProducts } from '../ProductList/productSlice';
import ProductAddForm from '../ProductAddForm/ProductAddForm';
import { addAsyncCategories } from '../ProductAddForm/categorySlice';
import Category from '../Category/Category';
import { addAsyncUser, checkAsyncUser, getUser } from '../Auth/authSlice';
import Logout from '../Auth/Logout/Logout';
import { actualOrder } from '../ProductCard/basketSlice';
import Basket from '../Basket/Basket';

function App(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  useEffect(() => {
    dispatch(addAsyncProducts());
    dispatch(addAsyncCategories());
  }, []);

  return (
    <div className="App">
      {!user && (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductItem />} />
          </Route>
          <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      )}
      {user && !user.admin && (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Orders />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductItem />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path='/basket' element={<Basket />} />
          </Route>
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      )}
      {user?.admin && (
        <Routes>
          <Route path="/" element={<HeaderAdmin />}>
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/product" element={<><ProductAddForm id={0} /><ProductList /></>} />
            <Route path="/product/:productId" element={<ProductItem />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
