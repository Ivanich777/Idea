import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Orders from '../Orders/Orders';
import ProductList from '../ProductList/ProductList';

function App(): JSX.Element {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<><Header /><Footer /></>}>
          <Route path="/main" element={<Header />} />
          <Route path="/profile" element={<Orders />} />
          {/* <Route path="/main" element={<Footer />} /> */}
          <Route path="/product" element={<ProductList />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
