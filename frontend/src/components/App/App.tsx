import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import { useAppDispatch } from '../../store';
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

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAsyncProducts());
    dispatch(addAsyncCategories());
  }, []);

  const user = {
    id: 1,
    isAdmin: true,
  };

  return (
    <div className="App">
      {!user.isAdmin && (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Orders />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductItem />} />
            <Route path="/categories/:categoryId" element={<Category />} />
          </Route>
            <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      )}
      {user.isAdmin && (
        <Routes>
          <Route path="/" element={<HeaderAdmin />}>
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
