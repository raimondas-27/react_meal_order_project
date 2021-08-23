import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';


import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Chat from "./components/Chat/Chat"
import Join from "./components/Chat/Join";


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
       <div>
          <Router>
             <Switch>
                <Route exact path="/" render={(props) =>
                    <CartProvider {...props}>
                   {cartIsShown && <Cart onClose={hideCartHandler}/>}
                   <Header onShownChat={showChatHandler}
                           onShowCart={showCartHandler}
                   />
                   <main>
                      <Meals/>
                   </main>
                </CartProvider>
                }
                />
                <Route path="/join" component={Join} />
                <Route path="/chat" component={Chat} />
             </Switch>
          </Router>
       </div>
   );
}

export default App;
