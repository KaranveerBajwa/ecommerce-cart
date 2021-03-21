import React from 'react'
import CartItem from './CartItem.js';
import './CartItems.css'
function CartItems(){
return (
    <div className = "Cart-Items">
        <h1> Shopping Cart </h1>
        <div className="CartItems-Items">
        <CartItem />
        </div>
    </div>
    );
}

export default CartItems;