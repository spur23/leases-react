import styled from 'styled-components';

const FormStyled = styled.form`
  font-family: inherit;
  border: thin solid lightgrey;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  max-width: 50rem;
  background: #f7f9f9;
  box-sizing: border-box;
  border-radius: 5px;

  h1 {
    text-align: center;
    border-bottom: 1px solid black;
    margin: 0;
    margin-bottom: 1rem;
    background: #55efc4;
    background-size: 100% 100%;
    color: white;
    padding-bottom: 1rem;
  }

  .input-container {
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .payments-container {
    margin-top: 1rem;
    width: 75%;
    margin: auto;
  }

  .input-container > input,
  .input-container > label,
  .input-container > select {
    margin-top: 0.5rem;
    width: 50%;
    font: inherit;
    padding: 2px 2px;
    box-sizing: border-box;
  }

  input,
  select {
    border: 1px solid grey;
    border-radius: 4px;
  }

  input:focus,
  select:focus {
    background: #55efc4;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    display: block;
    margin-top: 1rem;
  }

  @media (min-width: 40rem) {
    margin: auto;
    margin-top: 2.5rem;
    width: 40rem;
  }
`;

export { FormStyled };
