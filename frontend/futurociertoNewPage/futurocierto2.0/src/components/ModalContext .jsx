import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const ModalContext = createContext();

// Crear el proveedor del contexto
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

// Hook personalizado para usar el contexto
export const useModal = () => useContext(ModalContext);
