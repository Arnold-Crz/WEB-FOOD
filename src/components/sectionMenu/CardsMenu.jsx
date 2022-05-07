import Card from './Card';

import styled from 'styled-components';

import PMenu from '../../assets/pollomenu.png';
import SMenu from '../../assets/sandwichmenu.png';
import HMenu from '../../assets/hamburguesamenu.png';

const MENU_ITEMS = [
  {
    id: 1,
    title: 'Pollo con ',
    sudtitle: 'Tajadas',
    img: PMenu,
    price: '100',
  },
  {
    id: 2,
    title: 'Hamburguesa con ',
    sudtitle: 'Papas',
    img: HMenu,
    price: '120',
  },
  {
    id: 3,
    title: 'sandwich de ',
    sudtitle: 'Pollo',
    img: SMenu,
    price: '80',
  },
];

function CardsMenu() {
  return (
    <WrapperCards>
      {MENU_ITEMS.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </WrapperCards>
  );
}

const WrapperCards = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-items: center;
  gap: 40px;
`;

export default CardsMenu;
