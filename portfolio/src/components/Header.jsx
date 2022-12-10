import React from 'react';
import { Header, Logo } from '../styles';
import NavBar from './NavBar';

function HeaderHome() {
  return (
    <Header>
      <Logo>{'<TH />'}</Logo>
      <NavBar />
    </Header>
  );
}

export default HeaderHome;
