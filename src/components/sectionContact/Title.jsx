import styled from 'styled-components';

function Title({ title, color, marginTop }) {
  return (
    <H2 marginTop={marginTop} color={color}>
      {title}
    </H2>
  );
}

const H2 = styled.h2`
  color: ${(props) => props.color || '#ecaa37'};
  font-size: 2.5rem;
  font-family: 'Capitalinaone';
  margin-top: ${(props) => props.marginTop || '0'};
`;

export default Title;
