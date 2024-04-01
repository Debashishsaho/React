import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItems = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {cartItems,addItems,removeItems,updateCartItems} =useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className="description">
            <p>
                <b>
                    {productName}
                </b>
            </p>
            <p>
                ${price}
            </p>
            <div className="countHandler">
                <button onClick={() => addItems(id)}>+</button>
                <input type="text" value={cartItems[id]} onChange={(e) => updateCartItems(Number(e.target.value),id)} />
                <button onClick={() => removeItems(id)}>-</button>
            </div>
        </div>
    </div>
  )
}
