import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItems } from './CartItems'
import "./carts.css"
export const Cart = () => {
    const {cartItems} = useContext(ShopContext)
  return (
    <div className='cart'>
        <div>
            <h1>Cart Items</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product) =>{
                if (cartItems[product.id] !==0){
                    return <CartItems data={product} />
                }
            })}
        </div>
    </div>
  )
}
