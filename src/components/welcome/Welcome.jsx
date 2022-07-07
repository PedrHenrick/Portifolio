import React from 'react';
import { PersonalInfo, SectionWelcome } from '../../styles';
import BackgroundAnimate from './backgound/BackgroundAnimate';
import InitialMessage from './initialText/InitialText';

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
