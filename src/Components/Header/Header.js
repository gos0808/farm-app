import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import { Products } from '../../Pages/Products/Products';
import { Home } from '../../Pages/Home/Home';
import { About } from '../../Pages/About/About';
import { DetailedPage } from "../../Pages/EventDetails/EventDetails";
import { Contact } from "../../Pages/Contact/Contact";
import { Cart } from "../../Pages/Cart/Cart";

import farmIcon from '../../Images/farm-icon.jpg';
import { getQuantity } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import Order from "../../Pages/Order/Order";


export const Header = () => {
    const totalQuantity = useSelector(getQuantity);

    return (
        <Router>
            <nav>
                <img className="farm-icon" src={farmIcon} alt="Farm Icon" />
                <div className='link-container'>
                    <NavLink to="/" className='link'>Our farm</NavLink>
                    <NavLink to="/products" className='link'>Products</NavLink>
                    <NavLink to="/about" className='link'>About</NavLink>
                    <NavLink to="/contact" className='link'>Contact</NavLink>
                    <NavLink to="/cart" className='link '>
                        <img className='basket-icon' src='../../images/basket.png' alt='Cart Icon' />
                        {totalQuantity > 0 &&
                            <span className={'basket-quantity'}>{totalQuantity}</span>
                        }
                    </NavLink>
                </div>

            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/details/:name' element={<DetailedPage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/order' element={<Order />} />
            </Routes>
        </Router>
    );
};