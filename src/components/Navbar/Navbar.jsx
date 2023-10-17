import React, { useEffect, useState } from 'react';
import "../Navbar/Navbar.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../app/features/cartSlice';
import { useUserAuth } from '../context/UserAuthContext';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobile(!isMobile);
  };

  const { user } = useUserAuth(false);

  const { cart, totalQuantity } = useSelector((state) => state.AllCart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart]);

    // Function to close the mobile menu
    const closeMobileMenu = () => {
      setIsMobile(false);
    };


  return (
  
    <nav className="navbar">
     <h2>Fashion Clothing Store</h2>
      <ul className={isMobile ? "nav-links mobile" : "nav-links"}>
        <li>
        <Link to="/" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/ProductList" onClick={closeMobileMenu}>Product</Link>
        </li>
        
        <li>
          <Link to="/Cart" onClick={closeMobileMenu}>Cart ({totalQuantity})</Link>
        </li>
        {user ? (
          <li>
            <Link to="/Profile" onClick={closeMobileMenu}>Profile</Link>
          </li>) :
          <li> <Link to="/login" onClick={closeMobileMenu}>Login</Link></li>}
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHamburgerClick}>
        <div className={isMobile ? "bar active" : "bar"}></div>
        <div className={isMobile ? "bar active" : "bar"}></div>
        <div className={isMobile ? "bar active" : "bar"}></div>
      </div>
    </nav>
  );
}

export default Navbar;
