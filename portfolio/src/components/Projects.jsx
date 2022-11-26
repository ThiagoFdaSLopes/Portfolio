import React from 'react';
import { ContainerProjects, DivAbout } from '../styles';

const Projects = () => {
  return (
    <>
      <DivAbout>
        <header className="header-about">
          <p>Projects</p>
        </header>
      </DivAbout>
      <ContainerProjects />
    </>
  );
};

export default Projects;
