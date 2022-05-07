import styled from 'styled-components';

import Money from '../../assets/moneymenu.svg';

function Card({ item }) {
  return (
    <WrapperCard>
      <img src={item.img} alt={item.title} />
      <h2>
        {item.title}
        <span>{item.sudtitle}</span>{' '}
      </h2>
      <div>
        <p>{item.price}</p>
        <img src={Money} alt="Money" />
      </div>
      <a href="#">Ordenar</a>
    </WrapperCard>
  );
}

const WrapperCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 85%;
  border-radius: 15px;
  background-color: #ffffff;
  > img {
    margin-top: 15px;
    width: 80%;
    height: 80%;
  }

  > h2 {
    font-family: 'Capitalinaone';
    font-size: 2.5rem;
    text-align: center;
    > span {
      color: #ecaa37;
    }
  }

  > div {
    position: absolute;
    display: flex;
    font-family: 'Capitalinaone';
    font-size: 1.5rem;
    padding: 0.5rem;
    justify-content: space-around;
    align-items: center;
    width: 70px;
    height: 35px;
    border-radius: 10px;
    background-color: #0d0d0d;
    color: #f5f5f5;
    gap: 5px;
    top: 15px;
    right: 10px;
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Capitalinaone';
    text-decoration: none;
    color: #f5f5f5;
    padding: 15px 10px;
    width: 120px;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #0d0d0d;
    margin-bottom: 15px;
  }
`;

export default Card;
