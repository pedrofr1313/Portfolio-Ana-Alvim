import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isInEnglish, setIsInEnglish] = useState(false);

  const changeLanguage = () => setIsInEnglish((prev) => !prev);


  return (
    <LanguageContext.Provider value={{ isInEnglish, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageButton = () => useContext(LanguageContext);

// LanguageProvider gerencia o estado do menu.
// O useMenu fornece funções para abrir/fechar o menu.
// A Navbar usa esse contexto para exibir o menu.
// O Content detecta cliques fora para fechar o menu automaticamente.