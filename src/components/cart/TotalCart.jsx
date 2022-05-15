import ArrowUp from '../../assets/angle-up.svg';
import Papelera from '../../assets/papelera.svg';
import { useCart } from '../../context/cartContext';

import './styles.scss';

function TotalCart() {
  const { Opencart, setOpencart } = useCart();

  const handleOpenToCart = () => {
    setOpencart(false);
  };
  return (
    <>
      <div className={`Cart_Wrapper ${Opencart ? 'active' : ''}`}>
        <div className="Cart_Content">
          <div className="Cart_header">
            <h3>Lista de Compras</h3>
            <img onClick={handleOpenToCart} src={ArrowUp} alt="ArrowUp" />
          </div>
          <div className="Cart_Pedido">
            <img
              src="https://res.cloudinary.com/dr9rlr5vi/image/upload/v1652648005/Capitalina/burrita_nbrqgk.png"
              alt="Burrita"
            />
            <div className="Cart_Pedido_title">
              <h5>Burrita</h5>
              <p>Precio:</p>
              <p>Unidades:</p>
              <p>Subtotal:</p>
            </div>
            <div className="Cart_Pedido_price">
              <p>80</p>
              <p>2</p>
              <p>160</p>
            </div>
            <button>
              <img src={Papelera} alt="" />
            </button>
          </div>
          <div className="Cart_total">
            <div>
              <h3>Total:</h3>
              <p>160</p>
            </div>
            <a href="#">Enviar Pedido</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default TotalCart;
