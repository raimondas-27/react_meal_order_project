import classes from "./MealItem.module.css"
import CartContext from "../../../store/cart-context";
import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";



const MealItem = (props) => {
   const cartCtx = useContext(CartContext);

   const price = `$${props.price.toFixed(2)}`

   const addToCartHandler = (itemQuantity) => {
      cartCtx.addItem({
         id : props.id,
         name : props.name,
         amount : itemQuantity,
         price : props.price,
      })
   }


   return (
       <li className={classes.meal}>
         <div>
            <h3> {props.name} </h3>
            <div className={classes.description}> {props.description} </div>
            <div className={classes.price}> {price} </div>
         </div>
         <div>
            <MealItemForm onAddItem={addToCartHandler} id={props.id} />
         </div>
       </li>
   )
}

export default MealItem;