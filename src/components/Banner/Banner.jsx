import React from 'react';
import "./Banner.css"
import { Link } from "react-router-dom";


function Banner() {
  return (
    <section id="banner">
        <span >Repair Services</span>
        <h1  >Up to <span>70% Off</span> - All t-Shirts & Accessories</h1>
        <Link className="explore " to='/ProductList'>Explore More</Link>
    </section>
  );
}
export default Banner;
