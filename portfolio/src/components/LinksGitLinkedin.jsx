import React from 'react';
import git from '../assets/github.png';

const LinksGitLinkedin = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/thiago-lopes-dev-/" target="_blank">
        <img
          className="linkedin"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        />
      </a>
      <a href="https://github.com/ThiagoFdaSLopes" target="_blank">
        <img className="github" src={git} />
      </a>
    </div>
  );
};

export default LinksGitLinkedin;
