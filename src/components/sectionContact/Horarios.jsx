import styled from 'styled-components';

function Horarios({ dias, horas = '8:00am - 10:00pm' }) {
  return (
    <Wrapper>
      <h5>{dias}</h5>
      <span></span>
      <p>{horas}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h5,
  p {
    color: #f0f0f0;
    font-size: 1.5rem;
    font-family: 'Capitalinathree';
  }
  span {
    margin-left: 5px;
    margin-right: 5px;
    width: 80px;
    height: 2px;
    background-color: #f0f0f0;
  }
`;

export default Horarios;
