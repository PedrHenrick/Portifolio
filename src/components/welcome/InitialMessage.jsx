import React, { useEffect, useState } from 'react';

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

export default function InitialMessage() {
  const [lastName, setLastName] = useState('');
  const [modify] = useState(false);

  useEffect(() => {
    const TypeWriter = () => {
      arrayWithName.forEach((name, i) => {
        setTimeout(() => {
          setLastName(name);
        }, 200 * i);
      });
    };
    TypeWriter();
  }, [modify]);

  return (
    <section>
      <h3>Bem Vindo! Me chamo...</h3>
      <h2>
        Pedro
        { lastName }
      </h2>
      <h3>Estudante de desenvolvimento web na trybe!</h3>
      <button type="button">Download cv</button>
    </section>
  );
}
