import Popularfood from '../../components/sectionPopular/PopularFood';
import Imgfood from '../../components/sectionPopular/Imgfood';

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
    <section id="home" className="Section_Home">
      <Popularfood title="Burritas" dataingredients={DATA_BURRITA} />
      <Imgfood precio="lps.50" img={BuritaImg} top="-40px" right="-225px" />
      <Popularfood
        title="Pollo"
        titleColor="Chuco"
        dataingredients={DATA_POLLO}
      />
      <Imgfood precio="lps.100" img={PolloImg} top="-50px" left="10px" />
    </section>
  );
}

export default Home;
