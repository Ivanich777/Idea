import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header /><Footer /></>}>
          <Route path="/main" element={<Header />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
