import styled from "styled-components";

const StyledCreateLease = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;

  h3 {
    margin: 0 0 1rem;
    background-size: 100% 100%;
    color: black;
    padding-bottom: 1rem;
  }

  .input-container {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .payments-container {
    width: 75%;
    display: flex;
    margin: 1rem auto auto;
    flex-direction: column;
  }

  .payments-container > div {
    display: flex;
    justify-content: space-evenly;
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
    border-bottom: 1px solid grey;
    border-top: none;
    border-right: none;
    border-left: none;
    text-align: right;
  }

  input:focus,
  select:focus {
    background: #55efc4;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  button {
    padding: 0.25rem;
    font-family: inherit;
    margin-left: 1rem;
    font-size: 16px;
    background-color: #3498db;
    width: 8.5rem;
  }

  button[type="submit"] {
    margin: 2rem auto;
    padding: 0.25rem 0.5rem;
    font-weight: normal;
    font-size: 18px;
  }

  button:hover {
    background-color: #74b9ff;
  }

  @media (min-width: 40rem) {
    margin: 2.5rem auto auto;
    width: 40rem;
  }
`;

export { StyledCreateLease };
