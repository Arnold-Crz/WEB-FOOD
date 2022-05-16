import Popularfood from '../../components/sectionPopular/PopularFood';
import Imgfood from '../../components/sectionPopular/Imgfood';

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
      <Popularfood
        title="Burritas"
        dataingredients={DATA_BURRITA}
        link="https://api.whatsapp.com/send/?phone=50433038039&text=Hola me gustaria ordenar una burrita 🌮, en cuanto tiempo estara lista ?"
      />
      <Imgfood
        precio="lps.50"
        img={
          'https://res.cloudinary.com/dr9rlr5vi/image/upload/v1652736411/Capitalina/Group_13-min_t5lxyq.png'
        }
        top="-40px"
        right="-225px"
      />
      <Popularfood
        title="Pollo"
        titleColor="Chuco"
        dataingredients={DATA_POLLO}
        link="https://api.whatsapp.com/send/?phone=50433038039&text=Hola me gustaria ordenar un Pollo a la capitalina 🍗, en cuanto tiempo estara listo ?"
      />
      <Imgfood
        precio="lps.100"
        img={
          'https://res.cloudinary.com/dr9rlr5vi/image/upload/v1652736411/Capitalina/Group_15-min_qmm9iq.png'
        }
        top="-50px"
        left="10px"
      />
    </section>
  );
}

export default Home;
