import css from './imgs/css.svg';
import html from './imgs/html.svg';
import javascript from './imgs/jss.svg';
import reacts from './imgs/reacts.svg';
import git from './imgs/git.svg';
import github from './imgs/github.svg';
import TrybeTunes from './imgsProjects/TrybeTunes.png';
import TrybeWallet from './imgsProjects/TrybeWallet.png';
import SecretWord from './imgsProjects/SecretWord.png';
import PixelsArt from './imgsProjects/PixelsArt.png';

const DataProjects = [
  {
    name: 'TrybeTunes',
    description: 'Neste projeto foi criado o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de: Fazer login, Pesquisar por uma banda ou artista, Listar os álbuns disponíveis dessa banda ou artista, Visualizar as músicas de um álbum selecionado, Reproduzir uma prévia das músicas deste álbum, Favoritar e desfavoritar músicas, Ver a lista de músicas favoritas, Ver o perfil da pessoa logada, Editar o perfil da pessoa logada.',
    imagem: TrybeTunes,
    link: 'https://projeto-trybe-tunes-kappa.vercel.app/',
    github: 'https://github.com/ThiagoFdaSLopes/Projeto-TrybeTunes',
    stacks: [javascript, reacts, html, css, git, github]
  },
  {
    name: 'TrybeWallet',
    description: 'Neste projeto você vai desenvolver uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de, Adicionar, remover e editar um gasto, Visualizar uma tabelas com seus gastos, Visualizar o total de gastos convertidos para uma moeda de escolha.',
    imagem: TrybeWallet,
    link: 'https://trybe-wallet-seven.vercel.app/',
    github: 'https://github.com/ThiagoFdaSLopes/Trybe-Wallet',
    stacks: [javascript, reacts, html, css, git, github]
  },
  {
    name: 'SecretWord',
    description: 'Projeto de um Jogo com Palavras Secretas para o usuario descobrir e se divertir com os amigos, o usuario recebe dicas e precisa decifrar a palavra que esta escondida! Visite o site abaixo e confira a aplicação!',
    imagem: SecretWord,
    link: 'https://secret-word-lyart.vercel.app/',
    github: 'https://github.com/ThiagoFdaSLopes/secretWord',
    stacks: [javascript, reacts, html, css, git, github]
  },
  {
    name: 'Front-End Online Store',
    description: 'Neste projeto foi uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvido em grupo suas funcionalidades de acordo com demandas definidas em um quadro Kanban. Estilização do projeto esta no inicio.',
    imagem: 'Em construção',
    link: 'https://projeto-front-end-online-store.vercel.app/',
    github: 'https://github.com/ThiagoFdaSLopes/Projeto-Front-End-Online-Store',
    stacks: [javascript, reacts, html, css, git, github]
  },
  {
    name: 'App de Receitas',
    description: '',
    imagem: '',
    stacks: [javascript, reacts, html, css, git, github]
  },
  {
    name: 'Pixel Art',
    description: 'Neste projeto, você vai implementar brincar de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco.',
    imagem: PixelsArt,
    github: 'https://github.com/ThiagoFdaSLopes/Projeto-Pixels-Art',
    link: 'https://pixel-arts-sage.vercel.app/',
    stacks: [javascript, html, css, git, github]
  },
  {
    name: 'Jogo de Trivia',
    description: '',
    imagem: '',
    stacks: [javascript, reacts, html, css, git, github]
  },
  {
    name: 'StarWars Planets Search',
    description: '',
    imagem: '',
    stacks: [javascript, reacts, html, css, git, github]
  },
];

export default DataProjects;