import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Events } from './Events';
import { Products } from './Products';
import { Home } from './Home';
import { About } from './About';


function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" className='link'>Home</NavLink>
        <NavLink to="/products" className='link'>Products</NavLink>
        <NavLink to="/events" className='link'>Events</NavLink>
        <NavLink to="/about" className='link'>About us</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
