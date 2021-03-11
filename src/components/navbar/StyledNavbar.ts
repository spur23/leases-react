import styled from 'styled-components';

const StyledNavbar = styled.div`
  background-color: #3c6382;
  width: 80vw;
  margin: auto;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }

  a,
  a:visited {
    text-decoration: none;
    color: white;
  }
`;

export default StyledNavbar;
