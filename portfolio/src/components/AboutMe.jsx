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
          <p>
            Olá me chamo Thiago F. Da S. Lopes, Sou do interior de São Paulo!
            Nascido em Bebedouro/SP.
          </p>
          <p>
            Atualmente tenho 26 anos de idade, nasci em 10/07/1996, muitos
            sonhos para realizar e varios ja realizados!
          </p>
          <p>
            Tudo realmente começou quando eu fui ter contato com a computação
            aos 7 anos de idade, eu havia pedido para minha mae um computador
            para jogar counter-strike 1.6(Um jogo de muito sucesso na época). Na
            época os computadores não eram como hoje super tecnologicos, mas era
            o suficiente para despertar em mim um interesse gigantesco na área
            de tecnologia, pois eu aprendi a formatar computadores com 10 anos e
            a fazer como forma de renda aos 12 anos de idade! Como nem toda
            historia é feito somente de sucesso, eu queimei muitas fontes de
            computadores de clientes entres outras peças, mas todo erro nos leva
            a evoluir e fui aprendendo, fazendo meu primeiro curso de computação
            com 14 anos nome do curso, Hardware e Redes - Microlins, Limeira-SP.
          </p>
          <p>
            Apartir dos 12 anos até os 18 anos de idade, Eu vivi na programação
            brincando e trabalhando da melhor forma possivel, eu criava
            "Servidores" de jogos online e cobrava certa quantia de outras
            pessoas para poder jogar nesse servidores dos mais variados jogos
            que tem "codigo aberto" na internet por exemplo: DDTank, Minecraft,
            The War Z, Habbo, MU Online, FIVEM(GTA 5) entre outros não tão
            conhecidos.
          </p>
          <p>
            Apartir dos 18 anos, Trabalhei como instrutor de informática,
            auxiliando e ensinando mais de 500 alunos durante 4 anos. Ensinei,
            Desenvolvimento de Games e Softwares entre outras tecnologias como
            Word e Excel.
          </p>
          <p>
            Costumo dizer que sou uma pessoa movido a desafios, eu preciso ser
            desafiado e colocado em prova sempre que for possivel, tenho uma
            motivação interna muito grande e uma cobrança por sempre dar o
            maximo em tudo, isso veio do futebol, pois sou Brasileiro apaixonado
            por futebol. Eu gosto de criar soluções complexas e que precisam de
            alto nivel de concentração, isso me faz feliz me expoe a coisas
            novas, novas formas de pensar, reflexão. Sou muito colaborativo e
            amo trabalhar em equipe, durante o tempo que fui instrutor de
            informatica, trabalhei com uma equipe que era super colaborativa e
            tinham senso de que o sucesso de todos ali era gerado através dos
            esforços conduzido em conjunto e esses esforços para ensinar as
            pessoas da melhor maneira possivel e gerar interesse deles gerava
            ensinamento e felicidade na vida das pessoas, o poder da
            transformação era muito grande e satisfátorio para todos. Hoje estou
            em busca do meu sonho, que começou aos 7 anos e sei que posso
            contribuir muito para a equipe que me tiver como membro e me
            acolher.
          </p>
        </div>
      </CardMe>
    </>
  );
};

export default AboutMe;
