import BookIcon from '../../assets/book.svg';
import styled from 'styled-components';

const Dataingredients = [
  'Tortillas a la Capitaliana',

  'Huevo Revuelto',

  'Tajadas de Platano Frito',

  'Queso',

  'Frijoles Fritos',

  'Arroz',

  'Cerdo | Pollo | Res',
];

function Ingredients() {
  return (
    <DivIngredientItem>
      {Dataingredients.map((ingredient, index) => (
        <div key={index}>
          <img src={BookIcon} alt="BookIcon" />
          <h4>{ingredient}</h4>
        </div>
      ))}
    </DivIngredientItem>
  );
}

const DivIngredientItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-left: 10px;
  margin-top: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    gap: 10px;

    img {
      width: 20px;
      height: 20px;
    }

    h4 {
      font-family: 'Capitalinathree';
      font-size: 1rem;
      color: #fffefe;
    }
  }
`;

export default Ingredients;
