import styled from 'styled-components';

import CartMas from './../../assets/cart-mas.svg';
import Money from '../../assets/moneymenu.svg';

function Card({ item, handleToCart }) {
  const handleClick = () => {
    handleToCart(item);
  };
  return (
    <WrapperCard>
      <img src={item.img} alt={item.title} />
      <h2>
        {item.title}
        <span>{item.sudtitle}</span>{' '}
      </h2>
      <div className="Card_Precio">
        <p>{item.price}</p>
        <img src={Money} alt="Money" />
      </div>
      <div className="Btns_Order">
        <a href="#">Ordenar</a>
        <button onClick={handleClick}>
          <img src={CartMas} alt="carrito agregar" />
        </button>
      </div>
    </WrapperCard>
  );
}

const WrapperCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    height: 500px;
  }

  border-radius: 15px;
  background-color: #ffffff;
  > img {
    margin-top: 15px;
    width: 250px;
    height: 250px;
  }

  > h2 {
    font-family: 'Capitalinaone';
    font-size: 2.5rem;
    text-align: center;
    > span {
      color: #ecaa37;
    }
  }

  .Card_Precio {
    position: absolute;
    display: flex;
    font-family: 'Capitalinaone';
    font-size: 1.5rem;
    padding: 0.5rem;
    justify-content: space-around;
    align-items: center;
    width: 70px;
    height: 35px;
    border-radius: 10px;
    background-color: #0d0d0d;
    color: #f5f5f5;
    gap: 5px;
    top: 15px;
    right: 10px;
  }

  .Btns_Order {
    display: flex;
    width: 80%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    a,
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Capitalinaone';
      color: #f5f5f5;
      text-transform: uppercase;
      background-color: #0d0d0d;
      padding: 15px 10px;
      border-radius: 10px;
    }
    a {
      text-decoration: none;
      width: 120px;
      font-size: 1.5rem;
      font-weight: bold;
    }
    button {
      width: 100px;
    }
  }
`;

export default Card;
