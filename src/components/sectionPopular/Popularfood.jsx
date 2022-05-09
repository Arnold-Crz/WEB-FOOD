import styled from 'styled-components';

import Btn from './Btn';
import Ingredients from './Ingredients';

import IngredientesIcon from '../../assets/ingredientes.svg';
import BurritaIcon from '../../assets/burrita.svg';
import DescargaIcon from '../../assets/descarga.svg';

function Popularfood({ title, titleColor, dataingredients }) {
  return (
    <>
      <H1>
        {title} <span>{titleColor}</span>{' '}
      </H1>
      <DivIngredientTitle>
        <h2>Ingredientes</h2>
        <img src={IngredientesIcon} alt="IngredientesIcon" />
      </DivIngredientTitle>
      <Ingredients dataingredients={dataingredients} />
      <DivBtn>
        <Btn
          icon={BurritaIcon}
          text="Ordenar"
          color="#f0f0f0"
          bgcolor="#FE1618"
        />
        <Btn
          icon={DescargaIcon}
          text="Menu"
          color="#f0f0f0"
          bgcolor="#ecaa37"
        />
      </DivBtn>
    </>
  );
}

const H1 = styled.div`
  position: relative;
  font-size: 5.5rem;
  margin-left: 10px;
  margin-top: 20px;
  font-family: 'Capitalinaone';
  color: #f0f0f0;
  ::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2px;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    border-bottom: 5px solid #f00;
  }
  > span {
    color: #ecaa37;
  }
`;

const DivIngredientTitle = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  gap: 10px;
  align-items: center;
  h2 {
    font-family: 'Capitalinatwo';
    font-size: 2.5rem;
    color: #ecaa37;
  }
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 20px;
`;
export default Popularfood;
