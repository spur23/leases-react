import styled from "styled-components";

const StyledPresentValueCalc = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;

  button {
    padding: 0.25rem;
    font-family: inherit;
  }

  .payments-container {
    margin-top: 2rem;
  }

  .payments-container,
  .submit-button-container,
  .input-container,
  .presentvalue-container,
  .payments-container > div {
    display: flex;
  }

  .payments-container,
  .submit-button-container {
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

  .error {
    margin: 0;
  }

  .input-container,
  .presentvalue-container {
    justify-content: space-between;
  }

  .payments-container > p {
    margin: 0;
  }

  .presentvalue-container {
    font-weight: bold;
  }

  .input-container > select,
  .payments-container > table > tbody > tr > td > input,
  .payments-container > table > tbody > tr > td > select {
    width: 8rem;
    padding: 0;
  }

  .payments-container > div,
  .payments-container > table {
    align-self: center;
  }

  .payments-container > div > button,
  .submit-button-container > button {
    margin-left: 1rem;
    font-size: 16px;
    background-color: #3498db;
    width: 8.5rem;
  }
  .payments-container > div > button:hover,
  .form-submit:hover {
    background-color: #74b9ff;
  }

  button[type="submit"] {
    margin: 2rem auto;
    padding: 0.25rem 0.5rem;
    font-weight: normal;
    font-size: 18px;
  }
`;

export default StyledPresentValueCalc;
