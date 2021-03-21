import React from 'react';
import './CartItem.css'
function CartItem()
{
    return (
        <div className = "Cart-Item">
            <div className="CartItem-Image">
                <img src="https://m.media-amazon.com/images/S/gladiator-image-upload-prod/c/ATVPDKIKX0DER/39650b23419e680064aa30252743c928._CR0,0,400,400_AC_SL180_QL70_.jpg" alt="Product"></img>
            </div> 
            <div className = "CartItem-Info">
                <div className="Info-Title">
                    <h2>New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (Latest Model, 4th Generation)</h2>
                </div>
                <div className="Info-Stock">
                    In Stock
                </div>
                <div className="Item-Actions">
                    <div className="Item-Quantity">
                        <select>
                            <option value="1"> Qty: 1</option>
                            <option value ="2">Qty 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4"> Qty: 4</option>
                            <option value="5">Qty: 5</option>
                        </select>
                    </div>
                    <div className="Item-Action-Divider">|</div>
                    <div className="Item-Delete">Delete</div>
                </div>
                </div>    
                    <div className="CartItem-Price">$500</div>

        </div>
    );
}
export default CartItem;