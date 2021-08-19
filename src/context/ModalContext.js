import React from 'react';

// sukurti konteksta
const ModalContext = React.createContext({
    modalIsOpen: null,
});
ModalContext.displayName = 'ModalContext'

export default ModalContext;