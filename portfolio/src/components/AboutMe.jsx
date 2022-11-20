import React from 'react';
import { CardMe, DivAbout } from '../styles';

const AboutMe = () => {
  return (
    <>
      <DivAbout>
        <header className="header-about">
          <p>About-Me</p>
        </header>
      </DivAbout>
      <CardMe />
    </>
  );
};

export default AboutMe;
