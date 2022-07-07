import styled, { keyframes } from 'styled-components';

export const Background = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #111;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 10px 0;
  white-space: nowrap;
  font-size: 60px;
  transform: rotate(-30deg);
`;

const animate1 = keyframes`
  from {
    transform: translateX(100%)
  }

  to {
    transform: translateX(-100%)
  }
`;

const animate2 = keyframes`
  from {
    transform: translateX(0%)
  }

  to {
    transform: translateX(-200%)
  }
`;

export const ConjuntIcons = styled.div`
  animation: ${animate1} 80s linear infinite;
  animation-delay: -80s;

  &&:nth-child(2) {
    animation: ${animate2} 80s linear infinite;
    animation-delay: -40s;
  }
`;

export const Icons = styled.i`
  color: rgba(0, 0, 0, 0.5);
  transition: 1s;
  padding: 0 5px;
  user-select: none;
  cursor:default;
  &&:hover {
    transition: 0s;
    color: #0f0;
    filter: drop-shadow(0px 0px 20px #0f0);
  }
`;
