import styled from 'styled-components';

import FondoH from '../../assets/fondoh.svg';
import FondoS from '../../assets/fondos.svg';
import FondoP from '../../assets/fondop.svg';
import FondoT from '../../assets/fondot.svg';
import FondoHu from '../../assets/fondohu.svg';
import FondoPo from '../../assets/fondopo.svg';

const DATA_FOOD_LEFT = [
  FondoH,
  FondoP,
  FondoS,
  FondoT,
  FondoHu,
  FondoPo,
  FondoH,
];

const DATA_FOOD_RIGHT = [
  FondoS,
  FondoPo,
  FondoP,
  FondoHu,
  FondoH,
  FondoT,
  FondoP,
];

function Background() {
  return (
    <Wrapper>
      <div className="Wrapper_Item-left">
        {DATA_FOOD_LEFT.map((item, index) => (
          <img key={index} src={item} alt="fondoicon" />
        ))}
      </div>
      <div className="Wrapper_Item-right">
        {DATA_FOOD_RIGHT.map((item, index) => (
          <img key={index} src={item} alt="fondoicon" />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 100px;
  z-index: -1;
  .Wrapper_Item-left {
    position: absolute;
    top: 0;
    left: -50px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    img {
      width: 160px;
      height: 150px;
    }
  }
  .Wrapper_Item-right {
    position: absolute;
    top: 0;
    right: -50px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    img {
      width: 160px;
      height: 150px;
    }
  }
`;
export default Background;
