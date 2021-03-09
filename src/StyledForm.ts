import styled from 'styled-components';

const FormStyled = styled.form`
  border: thin solid lightgrey;
  width: 40rem;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  flex-direction: column;

  .input-container {
    display: flex;
    flex-direction: column;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  button {
    width: 10vw;
    margin: auto;
    margin-left: 1rem;
  }
`;

export { FormStyled };
