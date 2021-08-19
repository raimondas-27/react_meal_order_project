import classes from "./Cart.module.css"

import React from "react";


const Cart = (props) => {

   const cartItems = [
      {
         id: "c1",
         name: "sushi",
         amount: 2,
         price: 12.99
      }
   ]
       .map((item) => <li> {item.name} </li>)

   return (
       <div>
          <ul className={classes["cart-items"]}>
             {cartItems}
          </ul>
          <div className={classes.total}>
             <span> Total amount</span>
             <span> 34.99</span>
          </div>
          <div className={classes.actions}>
             <button className={classes["button__alt"]}>
                Close
             </button>
             <button className={classes.button}>
                Order
             </button>
          </div>
       </div>
   )
}

export default Cart;