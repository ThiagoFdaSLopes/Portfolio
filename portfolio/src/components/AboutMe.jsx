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
      <CardMe>
        <div className="photo-card">
          <div className="photo"></div>
        </div>
        <div className="description-me"></div>
      </CardMe>
    </>
  );
};

export default AboutMe;
