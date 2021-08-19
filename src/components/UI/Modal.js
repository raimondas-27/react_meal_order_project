import React from "react";
import classes from "./Modal.module.css"

const BackDrop = (props) => {
   return (
       <div className={classes.backdrop}></div>
   )
}

const ModalOverlay = (props) => {
   return (
       <div className={classes.modal}>
          <div className={classes.content}>
             {props.children}
          </div>
       </div>
   )
}


const Modal = (props) => {
   return (
       <React.Fragment>
          <BackDrop/>
          <ModalOverlay> {props.children} </ModalOverlay>
       </React.Fragment>
   )
}

export default Modal;