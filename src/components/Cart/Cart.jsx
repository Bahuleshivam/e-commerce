import { React, useState } from 'react';
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux';

import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity

} from '../../app/features/cartSlice';


const Cart = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.AllCart)
    // console.log("cart", cart)

    const dispatch = useDispatch();
    dispatch(getCartTotal());

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {cart.length === 0 ? <h1>Cart is Empty</h1> : <div className="simple">
                <div className="ProductContainer">
                    {cart.map((data) => (
                        <div className="ProductCard" key={data.id}>
                            <div className="image">
                                <img className="ProductImage" src={data.ProductImage} alt='' />
                            </div>
                            <div className="card-body">
                                <h5 className="ProductName">{data.Subtitle}</h5>
                                <h6 className="discountedPrice">₹{data.DiscountedPrice}⁰⁰</h6>
                                <p className="OriginalPrice">
                                    <del>₹{data.price}⁰⁰</del>
                                </p>
                                <p className="ProductDescription">{data.description}</p>
                                <p>{data.Ratingstar}</p>
                            </div>
                            <div className="quen">
                                <span className='quentity' style={{ fontSize: '15px' }}>Quentity</span>
                                <button className='decrement' onClick={() => dispatch(decreaseItemQuantity(data.id))}>-</button>
                                <input className='quenty' id="form1" min="0" name="quantity" value={data.quantity} type="number" onChange={() => null} />
                                <button className='increament' onClick={() => dispatch(increaseItemQuantity(data.id))}>+</button>
                            </div>
                            <button onClick={() => dispatch(removeItem(data.id))} className="btn">Remove</button>
                        </div>

                    ))}

                </div>

                <div className={`Filter-list ${isMenuOpen ? 'toggle-function' : ''}`}>
                    <div className="toggle" onClick={toggleMenu} >
                        Proceed
                    </div>
                    <div className="Category" >
                        <h2 className='title'>Cart Total</h2>
                        <table>
                            <tr>
                                <td><strong>Total Quantity</strong></td>
                                <td><strong>{totalQuantity}</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Total Price</strong></td>
                                <td><strong>{totalPrice}</strong></td>

                            </tr>
                        </table>
                        <button className='proceed'>Proceed to checkout</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Cart;
