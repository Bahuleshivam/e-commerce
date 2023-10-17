import React from 'react';
import "./Footer.css"
import logo from "../Footer/logo.png"

function Footer() {
  return (
    <footer>
        <div className="foot-1">
            <img className="foot-1-img" src={logo} alt=""/>
            <h3>Contact</h3>
            <p><span className="f-b">Address:</span> 562 West Road</p>
            <p><span className="f-b">Phone:</span> +91 7775921153</p>
            <span className="f-b">Follow Us</span>
            <div className="foot-icon">

                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </div>

        <div className="foot-2">
            <h3 >About</h3>
            <p>About Us</p>
            <p>Dilivery Information</p>
            <p>Privacy Policy</p>
            <p>Term's & Conditions</p>
            <p>Contact Us</p>

        </div>

        <div className="foot-4">
            <h3>Install App</h3>
            <p>From App Store or Google Play</p>
            <div className="apple">
               <img src="https://560degree.com/images/apple-google.png" style={{width:"200px"}}  alt=""/>
            </div>

            <p>Secured Payment Gateways</p>
            <img className="secure" src="https://tse2.mm.bing.net/th?id=OIP.XDSZR3LjJWQjtEhcbtz82QAAAA&pid=Api&P=0&h=180" style={{width:"200px"}} alt="" />

        </div>
    </footer>
  );
}

export default Footer;
