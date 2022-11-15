import React from 'react';
import { Header, Logo } from '../styles';
import NavBar from './NavBar';

const HeaderHome = () => {
  return (
    <Header>
      <Logo>{'< />'}</Logo>
      <NavBar />
    </Header>
  )
}

export default HeaderHome;