import React from 'react';
import { PersonalInfo, SectionWelcome } from './welcomeIndex';
import BackgroundAnimate from './backgound/BackgroundAnimate';
import InitialText from './initialText/InitialText.jsx';
import NavigationBar from '../navigationBar/NavigationBar.jsx';

function Welcome() {
  return (
    <section>
      <SectionWelcome>
        <BackgroundAnimate />
        <PersonalInfo>
          <NavigationBar />
          <InitialText />
        </PersonalInfo>
      </SectionWelcome>
    </section>
  );
}

export default Welcome;
