import BookIcon from '../../assets/book.svg';
import styled from 'styled-components';

function Ingredients({ dataingredients }) {
  return (
    <DivIngredientItem>
      {dataingredients.map((ingredient, index) => (
        <div key={index}>
          <img src={BookIcon} alt="BookIcon" />
          <p>{ingredient}</p>
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

    p {
      font-family: 'Capitalinathree';
      font-size: 1rem;
      color: #fffefe;
    }
  }
`;

export default Ingredients;
