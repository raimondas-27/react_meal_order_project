import classes from "./Cart.module.css"
import Modal from "../UI/Modal"

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
       .map((item) => <li key={item.id}> {item.name} </li>)

   return (
       <Modal onClose={props.onClose}>
          <ul className={classes["cart-items"]}>
             {cartItems}
          </ul>
          <div className={classes.total}>
             <span> Total amount</span>
             <span> 34.99</span>
          </div>
          <div className={classes.actions}>
             <button onClick={props.onClose} className={classes["button__alt"]}>
                Close
             </button>
             <button className={classes.button}>
                Order
             </button>
          </div>
       </Modal>
   )
}

export default Cart;