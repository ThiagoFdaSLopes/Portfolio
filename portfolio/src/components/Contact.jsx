import React from 'react';
import { DivAbout, DivContact } from '../styles';
import github from '../assets/github.png';
import gmail from '../assets/gmail.svg';

function Contact() {
  return (
    <>
      <DivAbout>
        <header className="header-about">
          <p>Contact</p>
        </header>
      </DivAbout>
      <DivContact>
        <p>Entre em contato comigo através dos links abaixo!</p>
        <div>
          <a href="https://www.linkedin.com/in/thiago-lopes-dev-/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/ThiagoFdaSLopes" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
          <a href="mailto:programadorthiagolopes@gmail.com" target="_blank" rel="noreferrer">
            <img src={gmail} alt="gmail" />
          </a>
        </div>
      </DivContact>
    </>
  );
}

export default Contact;
