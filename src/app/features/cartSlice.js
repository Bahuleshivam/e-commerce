import { createSlice } from "@reduxjs/toolkit";
import productData from "../../components/ProductDatabase/Product";


// Load cart data from local storage if available
const savedCart = JSON.parse(localStorage.getItem("cart"))

const initialState = {
    cart: savedCart || [], // Initialize the cart state with saved data or an empty array
    items: productData,   // Your product data
    totalQuantity: 0,     // Initialize total quantity to zero
    totalPrice: 0,   // Initialize total prixe to zero
  

};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {

            //Check if the product is already in the cart
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                // If not found, add it to the cart
                state.cart[find].quantity += 1;
            }
            else {
                state.cart.push(action.payload)

            }
            //Update local storage with the new cart data
            localStorage.setItem("cart", JSON.stringify(state.cart))

        },

        getCartTotal: (state) => {
            // Calculate total quantity and total price from the cart items
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartItem", cartItem);
                    const { DiscountedPrice, quantity } = cartItem;
                    console.log(DiscountedPrice, quantity);
                    const itemTotal = DiscountedPrice * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;

                },
                {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            );

            //Update state with the calculated values
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            //Remove item from the cart by its ID
            state.cart = state.cart.filter((item) => item.id !== action.payload);

            // Update local storage with the new cart data
            localStorage.setItem("cart", JSON.stringify(state.cart))

        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
        },

      

       

    },
})

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;