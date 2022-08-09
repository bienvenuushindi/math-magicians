import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quote from './pages/quote';
import About from './pages/about';
import Navbar from './components/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
