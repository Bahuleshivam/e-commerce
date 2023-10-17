import React from 'react';
import "./Feature.css"

function Feature() {
  return (
    <section id="feature">
        <div className="box">
            <div className="item">
                <img className="item-img" src="https://pngimg.com/uploads/free_shipping/free_shipping_PNG37.png" alt=""/>
                <h3 className="i-c">Free Shipping</h3>
            </div>
            <div className="item">
                <img className="item-img" src="https://www.nicepng.com/png/full/230-2303322_order-png-background-image-online-food-ordering-icon.png" alt=""/>
                <h3 className="i-c">Online Order</h3>
            </div>
            <div className="item">
                <img className="item-img" src="https://hotmart.s3.amazonaws.com/product_pictures/0f3aa0ff-8452-4c4a-8fc6-51d982ad93a9/beste.png" alt=""/>
                <h3 className="i-c">Happy Sell</h3>
            </div>
            <div className="item">
                <img className="item-img " src="https://www.myherothemes.com/media-RmNMGYZF0noo.png" alt=""/>
                <h3 className="i-c">24/7 Support</h3>
            </div>
            <div className="item">
                <img className="item-img " src="https://www.pinclipart.com/picdir/big/22-220911_coin-clipart-expense-save-money-flat-icon-png.png" alt=""/>
                <h3 className="i-c">Save Money</h3>
            </div>
        </div>
    </section>
  );
}

export default Feature;
