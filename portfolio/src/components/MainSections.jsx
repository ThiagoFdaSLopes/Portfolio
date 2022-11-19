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
import ReactLogo from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import js from '../assets/js.svg';

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
          <div className="react">
            <img src={ReactLogo} alt="react logo" />
          </div>
          <div className="javascript">
            <img src={js} alt="javascript logo" />
          </div>
          <Circle>
            <img src={heade} alt="head thiago" />
          </Circle>
          <div className="nodejs">
            <img src={nodejs} alt="nodejs logo" />
          </div>
        </DivPhoto>
      </SectionPhoto>
    </Main>
  );
};

export default MainSections;
