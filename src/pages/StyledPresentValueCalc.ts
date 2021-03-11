import styled from 'styled-components';

const StyledPresentValueCalc = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 0.25rem;
    font-family: inherit;
  }

  .payments-container {
    margin-top: 2rem;
    /* border: 1px solid black; */
  }

  .payments-container,
  .submit-button-container,
  .input-container,
  .payments-container > div {
    display: flex;
  }

  .payments-container,
  .submit-button-container {
    width: 30%;
    align-content: center;
  }

  .submit-button-container {
    justify-content: center;
  }

  .input-container,
  .payments-container > div {
    margin-top: 1rem;
  }

  .payments-container {
    flex-direction: column;
    align-content: center;
  }

  .input-container {
    justify-content: space-between;
    width: 25%;
  }

  .input-container > select,
  .payments-container > table > tbody > tr > td > input,
  .payments-container > table > tbody > tr > td > select {
    width: 8rem;
    padding: 0;
    border: 1px solid #dfe6e9;
  }

  .payments-container > div,
  .payments-container > table {
    align-self: center;
  }

  .payments-container > div > button,
  .submit-button-container > button {
    margin-left: 1rem;
    font-size: 16px;
    background-color: #0984e3;
    width: 8.5rem;
  }

  .payments-container > div > button:hover {
    background-color: #74b9ff;
  }
`;

export default StyledPresentValueCalc;
