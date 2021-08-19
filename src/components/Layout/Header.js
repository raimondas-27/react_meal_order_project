import React, {useState, useEffect} from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
   return (
       <div>
          <header className={classes.header}>
             <h1> React meals</h1>
             <button> Cart</button>
          </header>
          <div className={classes["main-image"]}>
             <img src={mealsImage} alt="table full of food"/>
          </div>
       </div>
   )
}

export default Header;