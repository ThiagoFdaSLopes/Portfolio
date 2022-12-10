import React from 'react';
import { ContainerSkills, DivAbout } from '../styles';
import DataSkills from '../helpers/Dataskills';

function SkillsBox() {
  return (
    <>
      <DivAbout>
        <header className="header-about">
          <p>Skills</p>
        </header>
      </DivAbout>
      <ContainerSkills>
        <div className="skills">
          {DataSkills.map(({ name, imagem }) => (
            <div className="habilidades" key={name}>
              <img src={imagem} alt="stack" />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </ContainerSkills>
    </>
  );
}

export default SkillsBox;
