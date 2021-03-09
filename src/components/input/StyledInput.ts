import styled from 'styled-components';

const InputStyled = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }
`;

export { InputStyled };
