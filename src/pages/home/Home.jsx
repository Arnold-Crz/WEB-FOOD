import Popularfood from '../../components/sectionPopular/PopularFood';
import Imgfood from '../../components/sectionPopular/Imgfood';

import {
  DATA_INGREDIENTES_BURRITAS,
  DATA_INGREDIENTES_POLLO,
} from '../../data/dataMenu';

import './home.scss';

function Home() {
  return (
    <section id="home" className="Section_Home">
      <div className="wrapper">
        <div className="content_left">
          <Popularfood
            title="Burritas"
            dataingredients={DATA_INGREDIENTES_BURRITAS}
            link="https://api.whatsapp.com/send/?phone=50433038039&text=Hola me gustaria ordenar una burrita 🌮, en cuanto tiempo estara lista ?"
          />
        </div>
        <div>
          <Imgfood
            precio="lps.50"
            img={
              'https://res.cloudinary.com/dr9rlr5vi/image/upload/v1653766756/Capitalina/Group_29-min_ya968h.png'
            }
            top="-40px"
            right="-225px"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="content_left">
          <Popularfood
            title="Pollo"
            titleColor="Chuco"
            dataingredients={DATA_INGREDIENTES_POLLO}
            link="https://api.whatsapp.com/send/?phone=50433038039&text=Hola me gustaria ordenar un Pollo a la capitalina 🍗, en cuanto tiempo estara listo ?"
          />
        </div>
        <div>
          <Imgfood
            precio="lps.100"
            img={
              'https://res.cloudinary.com/dr9rlr5vi/image/upload/v1653766756/Capitalina/Group_30-min_v1cfer.png'
            }
            top="-50px"
            left="10px"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
