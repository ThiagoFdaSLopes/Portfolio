import React from 'react';
import { CardMe, DivAbout } from '../styles';
import thiago from '../assets/thiago1.jpg';

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
          <div className="photo">
            <img src={thiago} alt="foto do thiago perfil" />
          </div>
          <p className="frase-inspiradora">
            Seja você quem for, seja qual for a posição social que você tenha na
            vida, a mais alta ou a mais baixa, tenha sempre como meta muita
            força, muita determinação e sempre faça tudo com muito amor e com
            muita fé em Deus, que um dia você chega lá. De alguma maneira você
            chega lá.
          </p>
        </div>
        <div className="description-me">
          <p className='description-text'>
          Trabalhei como instrutor de informática, auxiliando e ensinando mais
            de 500 alunos durante 4 anos. Ensinei, Desenvolvimento de Games e
            Softwares entre outras tecnologias como Word e Excel. Adoro resolver
            problemas e poder contribuir com as pessoas. Sou aficionado por
            tecnologia, mercado financeiro e de capitais. Na trybe adquiri
            conhecimentos em versionamento de código com Git e GitHub. Linguagem
            de marcação com HTML, estilo com CSS, programação com JavaScript
            (ES6+) e bibliotecas como React e Redux. Testes automatizados
            unitários e de integração com Jest e React Testing Library,
            Metodologias Ágeis (Scrum, Kanban). Estou indo para o Modulo de
            Back-End onde vou aprender, TypeScript, Docker, Node, Next, Express,
            Sequelize, Prisma, Mocha, Chai, banco de dados SQL e NoSQL (MySQL e
            Mongo), GitHub Actions (CI), Heroku (CD).
          </p>
        </div>
      </CardMe>
    </>
  );
};

export default AboutMe;
