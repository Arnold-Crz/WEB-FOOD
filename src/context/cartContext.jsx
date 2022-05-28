import { createContext, useState, useContext, useEffect } from 'react';
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

  const orderList = () => {
    const CART_ORDER = itemsCart.map((item) => {
      let obj = {
        PRODUCTO: item.largetitle,
        PRECIO: item.price,
        CANTIDAD: item.qty,
      };
      return obj;
    });
    window.location.href = `https://api.whatsapp.com/send/?phone=50433038039&text=Hola%20me%20gustaria%20ordenar%0D%0A%0D%0A%2A${JSON.stringify(
      CART_ORDER
    )
      .slice(1, -1)
      .replace(/["']/g, '')
      .replace(/,/g, '  ')
      .replace(/{/g, '✅')
      .replace(/PRODUCTO/g, '*PRODUCTO* ')
      .replace(/PRECIO/g, '*PRECIO* ')
      .replace(/CANTIDAD/g, '*CANTIDAD* ')
      .replace(
        /}/g,
        '%0D%0A%0D%0A%2A'
      )}*TOTAL%20DE%20LA%20ORDEN:*%20${getTotal()}Lps💵%20en%20cuanto%20tiempo%20estara%20lista%20?`;
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
    orderList,
  };

  return <cartContext.Provider value={DATA}>{children}</cartContext.Provider>;
};

export { CartProvider };
