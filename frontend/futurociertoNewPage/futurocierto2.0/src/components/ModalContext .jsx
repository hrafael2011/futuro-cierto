import React, { createContext, useContext, useState } from "react";

// Create context
const ModalContext = createContext();

// create context provider
export const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <ModalContext.Provider value={{ isOpenModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};


//Customer hook for to use context
export const useModal = () => useContext(ModalContext);
