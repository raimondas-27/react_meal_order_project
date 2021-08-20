import CartContext from "./cart-context";
import React, {useReducer} from "react";


const defaultCartState = {
   items: [],
   totalAmount: 0,
}

const cartReducer = (state, action) => {
   switch (action.type) {
      case "ADD" :
         const {item} = action;
         const updatedItems = [...state.items, item];
         const updatedAmount = state.totalAmount + item.price * item.amount
         return {
            items: updatedItems,
            totalAmount: updatedAmount,
         };

      case "REMOVE" :
         throw new Error("remove item not completed");
      default :
         return state;
   }
}


const CartProvider = (props) => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
   const addItemToCartHandler = (item) => {
      dispatchCartAction({type: "ADD", item: item})
   };
   const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type: "REMOVE", id: id})
   };

   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
   };

   return (
       <CartContext.Provider value={cartContext}>
          {props.children}
       </CartContext.Provider>
   );
};

export default CartProvider;