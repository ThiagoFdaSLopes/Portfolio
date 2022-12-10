import React from 'react';
import git from '../assets/github.png';

function LinksGitLinkedin() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/thiago-lopes-dev-/" target="_blank" rel="noreferrer">
        <img
          className="linkedin"
          alt="logo do linkedin"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        />
      </a>
      <a href="https://github.com/ThiagoFdaSLopes" target="_blank" rel="noreferrer">
        <img className="github" alt="imagem do github" src={git} />
      </a>
    </div>
  );
}

export default LinksGitLinkedin;
