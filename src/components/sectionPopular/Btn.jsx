import styled from 'styled-components';

function Btn({ icon, text, color, bgcolor, link }) {
  return (
    <>
      <Ancla href={link} color={color} bgcolor={bgcolor}>
        <img src={icon} alt="icon" />
        {text}
      </Ancla>
    </>
  );
}

const Ancla = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  font-family: 'Capitalinaone';
  font-size: 1.3em;
  padding: 0.8em;
  width: 150px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
`;

export default Btn;
