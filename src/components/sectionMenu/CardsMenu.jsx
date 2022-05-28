import { useCart } from '../../context/cartContext';
import Card from './Card';

import styled from 'styled-components';

function CardsMenu() {
  const { items, handleToCart } = useCart();
  const MENU_ITEMS_CART = items;
  return (
    <WrapperCards>
      {MENU_ITEMS_CART.map((item) => (
        <Card handleToCart={handleToCart} key={item.id} item={item}></Card>
      ))}
    </WrapperCards>
  );
}

const WrapperCards = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export default CardsMenu;
