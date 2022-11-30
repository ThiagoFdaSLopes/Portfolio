import React from 'react';
import HeaderHome from '../components/Header';
import MainSections from '../components/MainSections';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <HeaderHome />
      <MainSections />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
