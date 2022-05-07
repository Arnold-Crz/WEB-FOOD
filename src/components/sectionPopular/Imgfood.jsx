import styled from 'styled-components';

import ImgPrecio from '../../assets/precio.svg';

function Imgfood({ precio, imgpopular }) {
  return (
    <Wrapper>
      <Containerimgfood>
        <img src={imgpopular} alt="ImgBurritas" />
      </Containerimgfood>
      <ContainerPrecio>
        <div>
          <h2>{precio}</h2>
          <img src={ImgPrecio} alt="ImgPrecio" />
        </div>
      </ContainerPrecio>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Containerimgfood = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const ContainerPrecio = styled.div`
  display: flex;
  position: absolute;
  top: -34px;
  right: 26px;
  div {
    position: relative;

    h2 {
      font-family: 'Capitalinaone';
      position: absolute;
      top: 30px;
      left: 14px;
      color: #f0f0f0;
      z-index: 2;
    }
  }
`;

export default Imgfood;
