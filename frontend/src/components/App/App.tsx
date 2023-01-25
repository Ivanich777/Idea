import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Registration from '../Auth/Registration/Registration';

import Login from '../Auth/Login/Login';

import { RootState, useAppDispatch } from '../../store';

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
import { getUser } from '../Auth/authSlice';
import Logout from '../Auth/Logout/Logout';

import { actualOrder } from '../ProductCard/basketSlice';
import Basket from '../Basket/Basket';
import './app.css';
import { addAsyncOrders } from '../Orders/orderSlice';
import { ProductOrder } from '../ProductCard/types/State';

function App(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.users);
  const [countProduct, setCountProduct] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(addAsyncProducts());
    dispatch(addAsyncOrders());
    dispatch(addAsyncCategories());
    if (user) {
      dispatch(actualOrder(user.id!));
    }
  }, []);

  const { basket } = useSelector((state: RootState) => state.basket);

  useEffect(() => {
    const result: ProductOrder[] = [];
    const wasd = basket.filter((item, index, arr) =>
      index === arr.findIndex((el) => el.id === item.id));
    setCountProduct(wasd.length);
  }, [basket]);

  const count = countProduct;

  return (
    <div className="App">
      {!user && (
        <Routes>
          <Route path="/" element={<MainLayout count={count} />}>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductItem />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/auth/reg" element={<Registration />} />
            <Route path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      )}
      {user && !user.admin && (
        <Routes>
          <Route path="/" element={<MainLayout count={count} />}>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Orders />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductItem />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/basket" element={<Basket />} />
          </Route>
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      )}
      {user?.admin && (
        <Routes>
          <Route path="/" element={<HeaderAdmin />}>
            <Route path="/" element={<Orders />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/login" element={<Login />} />
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
