import styled from 'styled-components';

import ImgPrecio from '../../assets/precio.svg';

function Imgfood({ precio, img, top, right, left }) {
  return (
    <Wrapper>
      <img src={img} alt="ImgBurritas" />
      <ContainerPrecio top={top} right={right} left={left}>
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
  display: flex;
  width: 100%;
  margin-top: 90px;
  ~ img {
    max-width: 100%;
  }
`;

const ContainerPrecio = styled.div`
  position: absolute;

  div {
    position: relative;
    top: ${(props) => props.top};
    right: ${(props) => props.right || ''};
    left: ${(props) => props.left || ''};
    background-color: red;
    h2 {
      font-family: 'Capitalinaone';
      position: absolute;
      top: 40px;
      left: 24px;
      color: #f0f0f0;
      z-index: 2;
    }
    img {
      position: absolute;
    }
  }
`;

export default Imgfood;
