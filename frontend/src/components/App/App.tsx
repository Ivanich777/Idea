import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Registration from '../Registration/Registration';

function App(): JSX.Element {
  return (
    <div className="App">

      <Routes>
        {/* <Route path="/" element={<><Header /><Footer /></>}>
          <Route path="/main" element={<Header />} /> */}
          <Route path="/auth/reg" element={<Registration />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
