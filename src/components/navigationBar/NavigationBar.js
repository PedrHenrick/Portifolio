import styled from 'styled-components';

export const BarComponent = styled.nav`
  display: flex;
  width: 60vw;
  margin-top: 5vh;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NavigationLink = styled.a`
  font-size: 24px;
  cursor: pointer;
  font-weight: 800;

  &&:hover {
    color: #32CD32;
    text-shadow: 0 0 20px #32CD32;
  }
`;
