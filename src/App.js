import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quote from './pages/quote';
import CalculatorPage from './pages/calculator-page';
import Navbar from './components/navbar';
import NotMatch from './pages/not-match';

const App = () => {
  const [headerStyles, setHeaderStyles] = useState({});
  const header = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    color: '#fff',
    boxShadow: ' 0 2px 4px 0 rgba(0,0,0,.2)',
    ...headerStyles,
  };
  return (
    <div className="App">
      <div style={header} className="px-4">
        <h1>Math Magicians</h1>
        <Navbar style={{ flexGrow: 1 }} />
      </div>
      <div className="container d-flex flex-column justify-content-center pr-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote updateHeaderBackground={setHeaderStyles} />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
