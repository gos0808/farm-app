import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Events } from '../src/Events/Events';
import { Products } from '../src/Products/Products';
import { Home } from './Home/Home';
import { About } from './About/About';
import farmIcon from './Images/farm-icon.jpg';

export const Header = () => {

    return (
        <Router>
            <nav>
                <img className="farm-icon" src={farmIcon} alt="Farm Icon" />
                <div className='link-container'>
                    <NavLink to="/" className='link'>Home</NavLink>
                    <NavLink to="/products" className='link'>Products</NavLink>
                    <NavLink to="/events" className='link'>Events</NavLink>
                    <NavLink to="/about" className='link'>About</NavLink>
                </div>

            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/events' element={<Events />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    );
};