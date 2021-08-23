import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
   return (
       <div>
          <header className={classes.header}>
             <h1> React meals</h1>
             <button onClick={props.onShownChat}> Let's Chat About Food </button>
             <HeaderCartButton onClick={props.onShowCart}/>
          </header>
          <div className={classes["main-image"]}>
             <img src={mealsImage} alt="table full of food"/>
          </div>
       </div>
   )
}

export default Header;