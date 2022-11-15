import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 55px;
  margin-top: 100px;
  margin-left: 110px;
  margin-right: 110px;
  border-radius: 10px;
  background-color: #403DF3;
`;

export const Logo = styled.p`
  width: 140px;
  height: 50px;
  font-family: 'League Spartan', sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  line-height: 55px;
  padding: 10px;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 30%;
  width: 35%;
  border-radius: 15px;
  height: 55px;
`;

export const StyledLink = styled(Link)`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: white;
  text-decoration: none;
`;