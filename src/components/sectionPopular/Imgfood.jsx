import styled from 'styled-components';

function Imgfood({ precio, img, top, right, left }) {
  return (
    <Wrapper>
      <img className="Popular_img" src={img} alt="ImgBurritas" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 100vw;
  width: 95%;
  margin: 0 auto;
  margin-top: 90px;

  .Popular_img {
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
