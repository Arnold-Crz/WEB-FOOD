import { useCart } from '../../context/cartContext';
import Papelera from '../../assets/papelera.svg';

import './styles.scss';

function TotalCart() {
  const { itemsCart, getSubtotal, getTotal, handleDeleteItem, orderList } =
    useCart();
  const ITEM_TO_CART = itemsCart;

  const { Opencart, setOpencart } = useCart();

  const handleOpenToCart = () => {
    setOpencart(false);
  };
  return (
    <div className={`Cart_Wrapper ${Opencart ? 'active' : ''}`}>
      <div className="Cart_Content">
        <div className="Cart_header">
          <h3>Lista de Compras</h3>
          <div className="down_arrow" onClick={handleOpenToCart}>
            <i className="bx bxs-down-arrow"></i>
          </div>
        </div>
        <div className="Cart_Pedido-Content">
          {ITEM_TO_CART.map((item) => (
            <div key={item.id} className="Cart_Pedido">
              <img key={item.id} src={item.img} alt={item.largetitle} />
              <div className="Cart_Pedido_title">
                <p>{item.largetitle}</p>
                <p>Precio:</p>
                <p>Unidades:</p>
                <p>Subtotal:</p>
              </div>
              <div className="Cart_Pedido_price">
                <p>{item.price}</p>
                <p>{item.qty}</p>
                <p>{getSubtotal(item)}</p>
              </div>
              <button onClick={() => handleDeleteItem(item)}>
                <img src={Papelera} alt="Eliminar" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={`Cart_total  ${Opencart ? 'active' : ''}`}>
        <div>
          <h3>Total:</h3>
          <p>Lps.{getTotal()}</p>
        </div>
        {itemsCart.length === 0 ? (
          <h2>No tienes Productos</h2>
        ) : (
          <button onClick={() => orderList()}>Generar Pedido</button>
        )}
      </div>
    </div>
  );
}
export default TotalCart;
