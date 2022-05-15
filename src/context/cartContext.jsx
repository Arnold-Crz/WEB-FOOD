import { createContext, useState, useContext } from 'react';

const cartContext = createContext();

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};

const CartProvider = ({ children }) => {
  const [Opencart, setOpencart] = useState(false);

  const DATA = {
    Opencart,
    setOpencart,
  };

  return <cartContext.Provider value={DATA}>{children}</cartContext.Provider>;
};

export { CartProvider };
