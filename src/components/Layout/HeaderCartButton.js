import React, {useState, useContext, useEffect} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {


   const cartCtx = useContext(CartContext)

   const [buttonBumpAdded, setButtonBumpAdded] = useState(false);

   const numberOfCartItems = cartCtx.items.reduce((total, currentObj) =>
       total + currentObj.amount, 0)

   const btnClasses = `${classes.button} ${buttonBumpAdded ? classes.bump : ""}`

   const {items} = cartCtx;

   useEffect(() => {
      if (items.length === 0) return;
      setButtonBumpAdded(true);
      const timer = setTimeout(() => {
         setButtonBumpAdded(false);
      }, 300);
      return () => {
         clearTimeout(timer)
      }

   }, [items])

   return (
       <button onClick={props.onClick} className={btnClasses}>
          <span className={classes.icon}>
             <CartIcon/>
          </span>
          <span> Your cart</span>
          <span className={classes.badge}> {numberOfCartItems} </span>
       </button>
   )
}

export default HeaderCartButton;