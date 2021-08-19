import React, {useState, useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import ModalContext from "../../context/ModalContext";


const HeaderCartButton = (props) => {
   const context = useContext(ModalContext);
   return (
       <button onClick={context.modalIsOpen} className={classes.button}>
          <span className={classes.icon}>
             <CartIcon/>
          </span>
          <span> Your cart</span>
          <span className={classes.badge}> 3 </span>
       </button>
   )
}

export default HeaderCartButton;