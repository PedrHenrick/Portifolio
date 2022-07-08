import styled from 'styled-components';

export const SectionMain = styled.section`
  margin-top: 25vh;
  margin-left: 15vh;
`;

export const WelcomeText = styled.h3`
  color: #32CD32;
  text-shadow: 0 0 20px #32CD32;
  font-size: 34px;
  cursor: default;
  `;

export const DescriptionText = styled.h3`
  color: grey;
  display: flex;
  text-align: center;
  justify-content: flex-start;
  font-size: 24px;
  width: 600px;
  cursor: default;
  `;

export const PersonalName = styled.h2`
  text-align: center;
  font-size: 84px;
  margin-left: 50px;
  height: 79px  ;
  cursor: default;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ButtonBar = styled.section`
  display: flex;
  flex-direction: row;
  margin-left: 20vh;
`;

export const ButtonLinkedin = styled.button`
  background-color: #4F4F4F;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: none;
  font-family: monospace;
  font-size: 15px;
  font-weight: 800;
  padding: 10px;
  border-radius: 7px;
  margin-top: 5vh;
  margin-left: 5vh;
  width: 120px;
  color: white;
  cursor: pointer;
  
  &&:hover {
    background-color: #363636;
  }
`;

export const ButtonDownload = styled.button`
  background-color: #32CD32;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  font-family: monospace;
  font-size: 15px;
  font-weight: 800;
  padding: 10px;
  border-radius: 7px;
  margin-top: 5vh;
  margin-left: 5vh;
  width: 140px;
  cursor: pointer;

  &&:hover {
    background-color: #0f0;
  }
`;

export const RedesNav = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Tecnology = styled.h1`
  display: flex;
  border-radius: 50%;
  padding: 10px;
  background-color: #4F4F4F;
  font-size: 25px;
  margin-top: 50px;
  margin-left: 10px;
  cursor: pointer;

  &&:hover {
    background-color: #363636;
  };
`;
