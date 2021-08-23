import {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Chat from "./components/Chat/Chat"


function App() {
   const [cartIsShown, setCartIsShown] = useState(false);
   const [chatIsShown, setChatIsShown] = useState(false);

   const showCartHandler = () => {
      setCartIsShown(true);
   };
   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   const showChatHandler = () => {
      setChatIsShown(true);
   }

   const hideChatHandler = () => {
      setChatIsShown(false);
   }

   return (
       <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler}/>}
          {chatIsShown && <Chat onClose={hideChatHandler}/>}
          <Header onShownChat={showChatHandler}
                  onShowCart={showCartHandler}
          />
          <main>
             <Meals/>
          </main>
       </CartProvider>
   );
}

export default App;
