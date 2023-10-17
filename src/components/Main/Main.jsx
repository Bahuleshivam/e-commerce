import React from 'react';
import "./Main.css"
import Feature from '../Features/Feature';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import png from "../Main/1.png"
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <section id="page-header">
        <div className="text">
          <h3 className="m-1 font">Trade-in-offer</h3>
          <h1 className="page-header-h1">Super value deals</h1>
          <h1 className="page-header-h1-c">On all products</h1>
          <p className="m-1">some more with coupons & up to 70% off! </p>
          <Link className="m-1 link" to="/ProductList" >Shop Now </Link>
        </div>

        <div className="img">
          <img className="png" src={png} style={{ width: "96%" }} alt="img" />
        </div>

      </section>
      <Feature />
      <Banner />
      <Footer />

    </>
  );
}

export default Main;
