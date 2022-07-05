import React, { useState, useEffect } from "react";
import { PersonalInfo, SectionWelcome,  } from '../../styles'; 
import BackgroundAnimate from "./BackgroundAnimate";

const arrayWithName = [
  'M',
  'Me',
  'Mes',
  'Mesq',
  'Mesqu',
  'Mesqui',
  'Mesquit',
  'Mesquita',
  'Mesquit',
  'Mesqui',
  'Mesqu',
  'Mesq',
  'Mes',
  'Me',
  'M',
  '',
  'H',
  'He',
  'Hen',
  'Henr',
  'Henri',
  'Henric',
  'Henrick',
  'Henrick!',
];

const Welcome = () => {
  const [lastName, setLastName] = useState('');
  const [modify, setModify] = useState(false);

  useEffect(() => {
    const TypeWriter = () => {
      arrayWithName.forEach((name, i) => {
        setTimeout(() => {
          setLastName(name);
        }, 200 * i);
      });
    }
    TypeWriter()
  }, [modify]);


  return (
    <section>
      <SectionWelcome>
        <BackgroundAnimate />
        <PersonalInfo>
          <h3>Bem Vindo! Me chamo...</h3>
          <h2>Pedro { lastName }</h2>
          <h3>Estudante de desenvolvimento web na trybe!</h3>
          <button>Download cv</button>
        </PersonalInfo>
      </SectionWelcome>
    </section>
  );
};

export default Welcome;
