import React from 'react';
import Background from '../../components/sectionMenu/Background';
import CardsMenu from '../../components/sectionMenu/CardsMenu';
import Title from '../../components/sectionMenu/Title';

import './menu.scss';

function Menu() {
  return (
    <section className="Section_Menu">
      <Title title="Nuestro" subtitle="Menú" />
      <CardsMenu />
      <Background />
    </section>
  );
}

export default Menu;
