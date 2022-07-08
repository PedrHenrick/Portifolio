import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import { BiCloudDownload } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import {
  PersonalName,
  SectionMain,
  WelcomeText,
  DescriptionText,
  ButtonDownload,
  ButtonBar,
  ButtonLinkedin,
  RedesNav,
  Tecnology,
} from './InitialText';

export default function InitialText() {
  return (
    <SectionMain>
      <WelcomeText>Bem Vindo! Me chamo...</WelcomeText>
      <PersonalName>
        <TypeWriterEffect
          cursorColor="white"
          multiText={[
            'Pedro Mesquita',
            'Pedro Henrick',
          ]}
          multiTextDelay={2000}
          typeSpeed={200}
        />
      </PersonalName>
      <DescriptionText>Sou estudante de desenvolvimento web full-stack na trybe!</DescriptionText>
      <ButtonBar>
        <ButtonLinkedin type="button">
          <BsLinkedin />
          {' '}
          LinkedIn
        </ButtonLinkedin>
        <ButtonDownload type="button">
          <BiCloudDownload />
          {' '}
          Download cv
        </ButtonDownload>
      </ButtonBar>

      <RedesNav>
        <Tecnology><AiFillGithub /></Tecnology>
        <Tecnology><FiTwitter /></Tecnology>
      </RedesNav>
    </SectionMain>
  );
}
