import React from 'react';
import Popularfood from '../../components/sectionPopular/PopularFood';
import BuritaImg from '../../assets/burritaimg.png';
import PolloImg from '../../assets/polloimg.png';

const DATA_BURRITA = [
  'Tortillas a la Capitaliana',

  'Huevo Revuelto',

  'Tajadas de Platano Frito',

  'Queso',

  'Frijoles Fritos',

  'Arroz',

  'Cerdo | Pollo | Res',
];

const DATA_POLLO = [
  'Pollo Frito a la Capitaliana',

  'Tajadas de Platano Frito | Papas Fritas',

  'Salsas con el sabor de la Capitalina',

  'Encurtido',
];

function Home() {
  return (
    <section>
      <Popularfood
        title="Burritas"
        precio="Lps.50"
        dataingredients={DATA_BURRITA}
        imgpopular={BuritaImg}
      />
      <Popularfood
        title="Pollo"
        titleColor="Chuco"
        precio="Lps.100"
        dataingredients={DATA_POLLO}
        imgpopular={PolloImg}
      />
    </section>
  );
}

export default Home;
