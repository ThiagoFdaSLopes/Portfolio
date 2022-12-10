import React from 'react';
import HeaderHome from '../components/Header';
import MainSections from '../components/MainSections';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <HeaderHome />
      <MainSections />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
