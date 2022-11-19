import React from 'react';
import {
  Main,
  SectionInfo,
  SectionPhoto,
  DivSaudacao,
  DivApresentacao,
  DivLinks,
  DivPhoto,
  Circle,
} from '../styles';
import hand from '../assets/hand.svg';
import LinksGitLinkedin from './LinksGitLinkedin';
import heade from '../assets/thiago.svg';

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
      <SectionPhoto>
        <DivPhoto>
          <div className="react"></div>
          <div className="javascript"></div>
          <Circle>
            <img src={heade} alt="head thiago" width="450px" />
          </Circle>
          <div className="nodejs"></div>
        </DivPhoto>
      </SectionPhoto>
    </Main>
  );
};

export default MainSections;
