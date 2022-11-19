import React from 'react';
import {
  Main,
  SectionInfo,
  SectionPhoto,
  DivSaudacao,
  DivApresentacao,
  DivLinks,
} from '../styles';
import hand from '../assets/hand.svg';
import LinksGitLinkedin from './LinksGitLinkedin';

const MainSections = () => {
  const name = '<THIAGO LOPES />';
  const stack = 'DEV FULLSTACK';
  return (
    <Main>
      <SectionInfo>
        <DivApresentacao>
          <DivSaudacao>
            <img src={hand} />
            <p>Saudações</p>
          </DivSaudacao>
          <p className="name">{name}</p>
          <p className="stack">{stack}</p>
          <DivLinks>
            <LinksGitLinkedin />
          </DivLinks>
        </DivApresentacao>
      </SectionInfo>
      <SectionPhoto />
    </Main>
  );
};

export default MainSections;
