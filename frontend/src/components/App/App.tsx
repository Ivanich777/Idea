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

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAsyncProducts());
  }, []);

  const user = {
    id: 1,
    isAdmin: false,
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
          </Route>
            <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      )}
      {user.isAdmin && (
        <Routes>
          <Route path="/" element={<HeaderAdmin />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/product" element={<><ProductAddForm /><ProductList /></>} />
          </Route>
        </Routes>
      )}

    </div>
  );
}

export default App;
