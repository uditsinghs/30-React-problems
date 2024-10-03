/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
const CartContext = createContext()
const initialState = {
  cartItems: []
}

function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    <></>
  } else if (action.type === "DELETE_FROM_CART") {
    <></>
  }
}


export const CartContextProvider = ({ children }) => {


  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);


  return <CartContext.Provider value={{ cartState, cartDispatch }}>
    {children}
  </CartContext.Provider>
}
export const useCart = () => {
  return useContext(CartContext)
}