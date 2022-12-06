import React, { useEffect } from 'react';
import Registration from "../Auth/Registration/Registration";

import Login from "../Auth/Login/Login";

import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../store';

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
import { addAsyncUser } from "../Auth/authSlice";
import {checkAsyncUser, getUser}from '../Auth/authSlice'
import { useSelector } from "react-redux";
import { Root } from "react-dom/client";
import Logout from "../Auth/Logout/Logout";


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAsyncProducts());
    dispatch(addAsyncCategories());
  }, []);
  useEffect(()=> {
    dispatch(getUser())
  },[])
const {user} = useSelector((state:RootState)=> state.users )
console.log(user);

  

  return (
    <div className="App">
         {!user && (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/main" element={<Header />} />
             {/* <Route path="/profile" element={<Orders />} /> */}
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
          </Route>
          <Route path='/auth/logout' element={<Logout/>}/>
          <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      )}
      {user?.admin && (
        <Routes>
          <Route path="/" element={<HeaderAdmin />}>
          <Route path='/auth/logout' element={<Logout/>}/>
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
