import { createContext, useState, useContext } from 'react';
import { MENU_ITEMS } from './../data/dataMenu';

const cartContext = createContext();

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};

const CartProvider = ({ children }) => {
  const [Opencart, setOpencart] = useState(false);
  const [items, setItems] = useState(MENU_ITEMS);
  const [itemsCart, setItemsCart] = useState([]);

  const handleToCart = (item) => {
    const temp = [...itemsCart];
    const found = temp.find((itemCart) => itemCart.id === item.id);
    if (found) {
      found.qty += 1;
      setItemsCart(temp);
    } else {
      item.qty = 1;
      setItemsCart([...temp, item]);
    }
  };

  const getSubtotal = (item) => {
    return item.price * item.qty;
  };

  const getTotal = () => {
    return itemsCart.reduce((total, item) => total + getSubtotal(item), 0);
  };

  const handleDeleteItem = (item) => {
    const remove = itemsCart.filter((itemCart) => itemCart.id !== item.id);
    return setItemsCart(remove);
  };

  const getNumberItemCart = () => {
    return itemsCart.length;
  };

  const sendOrden = () => {
    alert('Orden Enviada');
  };

  const DATA = {
    Opencart,
    setOpencart,
    items,
    itemsCart,
    handleToCart,
    getSubtotal,
    getTotal,
    handleDeleteItem,
    getNumberItemCart,
  };

  return <cartContext.Provider value={DATA}>{children}</cartContext.Provider>;
};

export { CartProvider };
