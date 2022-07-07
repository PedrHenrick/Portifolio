import React, { useEffect, useState } from 'react';

import { Background, Row } from './background';
import IconSet from './IconSet';

const arrLength = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

function BackgroundAnimate() {
  const [backgroundLines, setBackgroundLines] = useState([]);
  let rows;

  useEffect(() => {
    const addBackground = () => {
      rows = arrLength.map((item) => (
        <Row key={[item]}>
          <IconSet />
          <IconSet />
        </Row>
      ));
      setBackgroundLines(rows);
    };
    addBackground();
  }, []);

  return (
    <Background>
      { backgroundLines }
    </Background>
  );
}

export default BackgroundAnimate;
