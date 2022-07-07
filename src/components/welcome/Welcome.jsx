import React from 'react';
import { PersonalInfo, SectionWelcome } from '../../styles';
import BackgroundAnimate from './BackgroundAnimate';
import InitialMessage from './InitialMessage';

function Welcome() {
  return (
    <section>
      <SectionWelcome>
        <BackgroundAnimate />
        <PersonalInfo>
          <InitialMessage />
        </PersonalInfo>
      </SectionWelcome>
    </section>
  );
}

export default Welcome;
