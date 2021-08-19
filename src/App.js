import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import ModalContext from "./context/ModalContext";

function App() {

   const [modalState, setModalState] = useState(false);

   const closeModal = () => {
      setModalState(false);
   }

   const openModal = () => {
      setModalState(true)
   }

   return (
       <ModalContext.Provider
           value={{
              modalIsOpen: openModal
           }}
       >
          <div className="App">
             <Cart modalState={modalState}
                 onCloseModal={closeModal}
             />
             <Header/>
             <main>
                <Meals/>
             </main>
          </div>
       </ModalContext.Provider>
   );
}

export default App;
