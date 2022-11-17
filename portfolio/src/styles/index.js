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

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 52rem;
`;

export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  width: 45rem;
  height: 52rem;
`;

export const SectionPhoto = styled.section`
  display: flex;
  width: 55rem;
  height: 52rem;
`;

export const DivApresentacao = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 20rem;
  margin-top: 13rem;
  margin-left: 6rem;

  .name {
    font-family: 'League Spartan';
    margin: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    color: white;
  }
  .stack {
    font-family: 'League Spartan';
    margin: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    color: white;
  }
`;

export const DivSaudacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 3rem;
  margin-bottom: 10px;
  border-radius: 25px;
  background-color: white;

  img {
    width: 32px;
    margin-right: 10px;
  }

  p {
    font-family: 'League Spartan';
    font-size: 24px;
    font-weight: 700;
  }
`;

export const DivLinks = styled.div`
  display: flex;
  width:  200px;
  height: 50px;
  margin-left: 10rem;
  justify-content: center;
  align-items: center;

  .github {
    width: 52px;
  }

  .linkedin {
    margin-right: 5px;
    width: 48px;
  }
`;