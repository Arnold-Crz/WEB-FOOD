import styled from 'styled-components';

function Title() {
  return (
    <TitleStyled>
      <div>
        <span></span>
        <h2>
          Nuestro<span> Menú</span>
        </h2>
        <span></span>
      </div>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    h2 {
      font-size: 4rem;
      font-family: 'CapitalinaOne';
      color: #f0f0f0;
      > span {
        color: #ecaa37;
      }
    }
    > span:first-of-type {
      position: absolute;
      display: block;
      top: 0;
      left: 10px;
      width: 200px;
      height: 5px;
      border-radius: 10px;
      background-color: #ecaa37;
      &::after {
        content: '';
        position: absolute;
        top: -15px;
        left: 0;
        width: 300px;
        height: 5px;
        border-radius: 10px;
        background-color: #ecaa37;
      }
    }
    > span:last-of-type {
      position: absolute;
      display: block;
      bottom: -5px;
      right: 10px;
      width: 200px;
      height: 5px;
      border-radius: 10px;
      background-color: #ecaa37;
      &::after {
        content: '';
        position: absolute;
        top: 15px;
        left: -100px;
        width: 300px;
        height: 5px;
        border-radius: 10px;
        background-color: #ecaa37;
      }
    }
  }
`;
export default Title;
