import React from "react";

import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Registration from "../Registration/Registration";

import Orders from "../Orders/Orders";
import  Login  from "../Login/Login";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/reg" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        >
          <Route path="/main" element={<Header />} />
          <Route path="/profile" element={<Orders />} />
          {/* <Route path="/main" element={<Footer />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
