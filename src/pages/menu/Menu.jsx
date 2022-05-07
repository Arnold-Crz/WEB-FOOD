import React from 'react';
import CardsMenu from '../../components/sectionMenu/CardsMenu';
import Title from '../../components/sectionMenu/Title';
import './menu.scss';

function Menu() {
  return (
    <section className="Section_Menu">
      <Title />
      <CardsMenu />
    </section>
  );
}

export default Menu;
