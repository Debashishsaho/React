import React, { createContext , useState} from 'react'
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);

const getDefaultItems = () => {
    const cart={};
    for (let i=1 ; i<PRODUCTS.length+1 ; i++) {
        cart[i] =0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultItems());

    const addItems = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeItems = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
    }
    const updateCartItems = (newAmt,itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:newAmt}));
    }
    const contextValue={cartItems,addItems,removeItems,updateCartItems}
  return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
  )
}