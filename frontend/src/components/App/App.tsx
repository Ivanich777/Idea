import Registration from "../Registration/Registration";

import Login from "../Login/Login";

import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../../store";

import Header from "../Header/Header";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";

import Main from "../Main/Main";

import MainLayout from "../MainLayout/MainLayout";
import Orders from "../Orders/Orders";
import ProductItem from "../ProductItem/ProductItem";
import ProductList from "../ProductList/ProductList";
import { addAsyncProducts } from "../ProductList/productSlice";
import { addAsyncUser } from "../Registration/authSlice";
import {checkAsyncUser, getUser}from '../Login/logSlice'
function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addAsyncProducts());
  }, []);
  useEffect(()=> {
    dispatch(getUser())
  },[])

  const user = {
    id: 1,
    isAdmin: false,
  };

  return (
    <div className="App">
      {!user.isAdmin && (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/main" element={<Header />} />
            <Route path="/profile" element={<Orders />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductItem />} />
          </Route>
          <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
        // </Routes>
      )}
      {user.isAdmin && (
        <Routes>
          <Route path="/" element={<HeaderAdmin />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/product" element={<ProductList />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
