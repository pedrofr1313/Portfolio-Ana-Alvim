import { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

// MenuProvider gerencia o estado do menu.
// O useMenu fornece funções para abrir/fechar o menu.
// A Navbar usa esse contexto para exibir o menu.
// O Content detecta cliques fora para fechar o menu automaticamente.