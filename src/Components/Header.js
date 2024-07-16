import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Products } from '../Pages/Products';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import farmIcon from '../Images/farm-icon.jpg';
import { DetailedPage } from "../Pages/EventDetails";

export const Header = () => {

    return (
        <Router>
            <nav>
                <img
                    className="farm-icon" src={farmIcon} alt="Farm Icon" />
                <div className='link-container'>
                    <NavLink to="/" className='link'>Our farm</NavLink>
                    <NavLink to="/products" className='link'>Products</NavLink>
                    <NavLink to="/about" className='link'>About us</NavLink>
                </div>

            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/details/:name' element={<DetailedPage />} />
            </Routes>
        </Router>
    );
};