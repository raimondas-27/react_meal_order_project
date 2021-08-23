import React from "react";
import classes from "./Modal.module.css"
import ReactDOM from "react-dom";

const BackDrop = (props) => {
   return (
       <div onClick={props.onClose} className={classes.backdrop}></div>
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

const portalEL = document.getElementById("overlays");


const Modal = (props) => {
   return (
       <React.Fragment>
          {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalEL)};
          {/*<BackDrop/>*/}
          {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalEL)};
          {/*<ModalOverlay> {props.children} </ModalOverlay>*/}
       </React.Fragment>
   )
}

export default Modal;