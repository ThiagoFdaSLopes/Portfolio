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
import git from '../assets/github.png';

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
            <a
              href="https://www.linkedin.com/in/thiago-lopes-dev-/"
              target="_blank"
            >
              <img
                className="linkedin"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-lopes-dev-/"
              target="_blank"
            >
              <img
                className="github"
                src={ git }
              />
            </a>
          </DivLinks>
        </DivApresentacao>
      </SectionInfo>
      <SectionPhoto />
    </Main>
  );
};

export default MainSections;
