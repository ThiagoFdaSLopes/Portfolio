import React from 'react';
import { ContainerProjects, DivAbout } from '../styles';
import Carousel from '@itseasy21/react-elastic-carousel';

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
