import styled from 'styled-components';

import W from '../../assets/Vectorwhat.svg';
import F from '../../assets/Vectorface.svg';
import I from '../../assets/Vectorinsta.svg';

function Sociales() {
  return (
    <Wrapper>
      <div>
        <img src={W} alt="whatsapp" />
        <h5>504-XXXX-XXXX</h5>
      </div>
      <div>
        <img src={F} alt="facebook" />
        <h5>@La Capitalina</h5>
      </div>
      <div>
        <img src={I} alt="instagram" />
        <h5>@La Capitalina</h5>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 50px);
  place-content: center;
  place-items: center;
  div {
    display: flex;
    gap: 20px;
  }
  h5 {
    font-size: 1.5rem;
    font-family: 'Capitalinathree';
    color: #ecaa37;
  }
`;

export default Sociales;
