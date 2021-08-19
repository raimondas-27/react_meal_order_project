import React, {useState, useContext} from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
import ModalContext from "../../../context/ModalContext";


const MealItemForm = (props) => {
   const context = useContext(ModalContext)


   return (
       <form className={classes.form}>
          <Input label="Amount" input={{
             id : props.id,
             type : "number",
             min : 1,
             max : 5,
             step : 1,
             defaultValue : 1,
          }}
          />
          <button onClick={() => context.setModalIsOpen(true)}> + Add</button>
       </form>
   )
}

export default MealItemForm;