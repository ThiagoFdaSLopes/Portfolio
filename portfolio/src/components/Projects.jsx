import React from 'react';
import Carousel from '@itseasy21/react-elastic-carousel';
import { ContainerProjects, DivAbout, DivProject } from '../styles';
import DataProjects from '../helpers/DataProjects';
import link from '../assets/link.svg';
import github from '../assets/github.png';

function ProjectsBox() {
  return (
    <>
      <DivAbout>
        <header className="header-about">
          <p>Projects</p>
        </header>
      </DivAbout>
      <ContainerProjects>
        <Carousel itemsToShow={2}>
          { DataProjects.map((e) => (
            <DivProject key={e.name}>
              <div className="DivImage">
                <img src={e.imagem} alt="projeto imagem" />
              </div>
              <div className="Divinfo">
                <div>
                  <h3>{e.name}</h3>
                </div>
                <p>{e.description}</p>
                <p>
                  <strong>Technologies:</strong>
                  <div className="div-stacks">
                    {
                        e.stacks.map((e2) => (
                          <img key={Math.floor(Math.random(100) * 15)} src={e2} alt="stack" />
                        ))
                      }
                  </div>
                </p>
                <div className="div-links-project">
                  <a href={e.link} target="_blank" rel="noopener noreferrer">
                    <img src={link} alt="imagem link" />
                    Preview
                  </a>
                  <a href={e.github} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="imagem link" />
                    Github
                  </a>
                </div>
              </div>
            </DivProject>
          ))}
        </Carousel>
      </ContainerProjects>
    </>
  );
}

export default ProjectsBox;
